/**
 * Meta Ads Dataset Quality API Integration
 * 
 * This module provides functionality to interact with Meta's Dataset Quality API
 * to monitor and improve Event Match Quality (EMQ) for Conversions API.
 */

const META_API_VERSION = process.env.META_API_VERSION || 'v21.0';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const META_DATASET_ID = process.env.META_DATASET_ID;

export interface DatasetQualityMetrics {
  event_match_quality_score: number;
  total_events: number;
  matched_events: number;
  match_rate: number;
  diagnostics: Diagnostic[];
}

export interface Diagnostic {
  severity: 'error' | 'warning' | 'info';
  message: string;
  field: string;
  recommendation: string;
}

export interface EventData {
  event_name: string;
  event_time: number;
  user_data: {
    em?: string; // email (hashed)
    ph?: string; // phone (hashed)
    fn?: string; // first name (hashed)
    ln?: string; // last name (hashed)
    ct?: string; // city (hashed)
    st?: string; // state (hashed)
    zp?: string; // zip code (hashed)
    country?: string; // country code
    external_id?: string; // external ID
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string; // Facebook click ID
    fbp?: string; // Facebook browser ID
  };
  custom_data?: Record<string, any>;
  action_source: 'website' | 'app' | 'email' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
}

/**
 * Get Dataset Quality Metrics
 * Retrieves quality metrics for the configured dataset/pixel
 */
export async function getDatasetQuality(): Promise<DatasetQualityMetrics> {
  if (!META_ACCESS_TOKEN || !META_DATASET_ID) {
    throw new Error('Meta Ads credentials not configured. Please set META_ACCESS_TOKEN and META_DATASET_ID in .env');
  }

  const url = `https://graph.facebook.com/${META_API_VERSION}/${META_DATASET_ID}/da_checks`;
  
  try {
    const response = await fetch(`${url}?access_token=${META_ACCESS_TOKEN}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Meta API Error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return parseQualityMetrics(data);
  } catch (error) {
    console.error('Error fetching dataset quality:', error);
    throw error;
  }
}

/**
 * Get Event Match Quality Score
 * Returns the EMQ score (0-10) for the dataset
 */
export async function getEventMatchQuality(): Promise<number> {
  const metrics = await getDatasetQuality();
  return metrics.event_match_quality_score;
}

/**
 * Send Conversion Event
 * Sends a conversion event to Meta's Conversions API
 */
export async function sendConversionEvent(eventData: EventData): Promise<boolean> {
  if (!META_ACCESS_TOKEN || !META_DATASET_ID) {
    throw new Error('Meta Ads credentials not configured');
  }

  const url = `https://graph.facebook.com/${META_API_VERSION}/${META_DATASET_ID}/events`;

  try {
    const response = await fetch(`${url}?access_token=${META_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to send event: ${error.error?.message || 'Unknown error'}`);
    }

    const result = await response.json();
    return result.events_received > 0;
  } catch (error) {
    console.error('Error sending conversion event:', error);
    throw error;
  }
}

/**
 * Hash user data for privacy
 * Meta requires user data to be hashed using SHA-256
 */
export async function hashUserData(data: string): Promise<string> {
  if (typeof window === 'undefined') {
    // Server-side (Node.js)
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
  } else {
    // Client-side
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data.toLowerCase().trim());
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}

/**
 * Parse quality metrics from API response
 */
function parseQualityMetrics(data: any): DatasetQualityMetrics {
  const checks = data.data || [];
  
  // Extract EMQ score and diagnostics
  const emqCheck = checks.find((check: any) => check.check_name === 'event_match_quality');
  
  return {
    event_match_quality_score: emqCheck?.result?.score || 0,
    total_events: emqCheck?.result?.total_events || 0,
    matched_events: emqCheck?.result?.matched_events || 0,
    match_rate: emqCheck?.result?.match_rate || 0,
    diagnostics: parseDiagnostics(checks),
  };
}

/**
 * Parse diagnostics from API response
 */
function parseDiagnostics(checks: any[]): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  
  checks.forEach((check: any) => {
    if (check.result?.issues) {
      check.result.issues.forEach((issue: any) => {
        diagnostics.push({
          severity: issue.severity || 'info',
          message: issue.message || '',
          field: issue.field || '',
          recommendation: issue.recommendation || '',
        });
      });
    }
  });
  
  return diagnostics;
}

/**
 * Create a standard conversion event
 * Helper function to create properly formatted events
 */
export function createConversionEvent(
  eventName: string,
  userData: Partial<EventData['user_data']>,
  customData?: Record<string, any>,
  actionSource: EventData['action_source'] = 'website'
): EventData {
  return {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    user_data: userData,
    custom_data: customData,
    action_source: actionSource,
  };
}
