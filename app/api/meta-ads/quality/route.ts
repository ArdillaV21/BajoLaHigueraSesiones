import { NextRequest, NextResponse } from 'next/server';
import { getDatasetQuality } from '@/lib/meta-ads';

export async function GET(request: NextRequest) {
    try {
        const metrics = await getDatasetQuality();

        return NextResponse.json(metrics, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (error) {
        console.error('Error fetching Meta Ads quality metrics:', error);

        return NextResponse.json(
            {
                error: 'Failed to fetch quality metrics',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
