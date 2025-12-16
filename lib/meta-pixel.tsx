'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        fbq: any;
        _fbq: any;
    }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '716760367715152';

export const pageview = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};

// Standard Events
export const trackEvent = (name: string, options: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', name, options);
    }
};

// Custom Events
export const trackCustomEvent = (name: string, options: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', name, options);
    }
};

// Standard Event Helpers
export const events = {
    // E-commerce Events
    viewContent: (data: {
        content_name?: string;
        content_category?: string;
        content_ids?: string[];
        content_type?: string;
        value?: number;
        currency?: string;
    }) => trackEvent('ViewContent', data),

    addToCart: (data: {
        content_ids?: string[];
        content_name?: string;
        content_type?: string;
        value?: number;
        currency?: string;
    }) => trackEvent('AddToCart', data),

    initiateCheckout: (data: {
        content_ids?: string[];
        content_category?: string;
        num_items?: number;
        value?: number;
        currency?: string;
    }) => trackEvent('InitiateCheckout', data),

    purchase: (data: {
        content_ids?: string[];
        content_type?: string;
        value: number;
        currency: string;
        num_items?: number;
    }) => trackEvent('Purchase', data),

    // Lead Events
    lead: (data: {
        content_name?: string;
        content_category?: string;
        value?: number;
        currency?: string;
    }) => trackEvent('Lead', data),

    completeRegistration: (data: {
        content_name?: string;
        value?: number;
        currency?: string;
        status?: string;
    }) => trackEvent('CompleteRegistration', data),

    // Engagement Events
    search: (data: {
        search_string?: string;
        content_category?: string;
        content_ids?: string[]
    }) => trackEvent('Search', data),

    contact: (data: {
        content_name?: string;
        content_category?: string;
    }) => trackEvent('Contact', data),

    submitApplication: (data: {
        content_name?: string;
        value?: number;
        currency?: string;
    }) => trackEvent('SubmitApplication', data),
};

// Meta Pixel Script Component usando Next.js Script
export function MetaPixel() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Track page views on route change
        if (pathname && window.fbq) {
            pageview();
        }
    }, [pathname, searchParams]);

    return (
        <>
            {/* Meta Pixel Code */}
            <Script
                id="meta-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                }}
            />

            {/* Noscript fallback */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    );
}
