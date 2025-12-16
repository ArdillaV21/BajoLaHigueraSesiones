import { NextRequest, NextResponse } from 'next/server';
import { sendConversionEvent, createConversionEvent, hashUserData } from '@/lib/meta-ads';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            eventName,
            userData,
            customData,
            actionSource = 'website'
        } = body;

        if (!eventName) {
            return NextResponse.json(
                { error: 'Event name is required' },
                { status: 400 }
            );
        }

        // Hash sensitive user data
        const hashedUserData: any = {};

        if (userData.email) {
            hashedUserData.em = await hashUserData(userData.email);
        }
        if (userData.phone) {
            hashedUserData.ph = await hashUserData(userData.phone);
        }
        if (userData.firstName) {
            hashedUserData.fn = await hashUserData(userData.firstName);
        }
        if (userData.lastName) {
            hashedUserData.ln = await hashUserData(userData.lastName);
        }
        if (userData.city) {
            hashedUserData.ct = await hashUserData(userData.city);
        }
        if (userData.state) {
            hashedUserData.st = await hashUserData(userData.state);
        }
        if (userData.zipCode) {
            hashedUserData.zp = await hashUserData(userData.zipCode);
        }

        // Non-hashed data
        if (userData.country) hashedUserData.country = userData.country;
        if (userData.externalId) hashedUserData.external_id = userData.externalId;
        if (userData.clientIpAddress) hashedUserData.client_ip_address = userData.clientIpAddress;
        if (userData.clientUserAgent) hashedUserData.client_user_agent = userData.clientUserAgent;
        if (userData.fbc) hashedUserData.fbc = userData.fbc;
        if (userData.fbp) hashedUserData.fbp = userData.fbp;

        // Create and send event
        const event = createConversionEvent(
            eventName,
            hashedUserData,
            customData,
            actionSource
        );

        const success = await sendConversionEvent(event);

        return NextResponse.json(
            {
                success,
                message: success ? 'Event sent successfully' : 'Failed to send event'
            },
            { status: success ? 200 : 500 }
        );
    } catch (error) {
        console.error('Error sending conversion event:', error);

        return NextResponse.json(
            {
                error: 'Failed to send conversion event',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
