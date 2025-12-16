'use client';

import { useEffect, useCallback } from 'react';
import { events, trackEvent, trackCustomEvent } from '@/lib/meta-pixel';

/**
 * Hook para rastrear eventos de Meta Pixel de forma sencilla
 */
export function useMetaPixel() {
    // Rastrear vista de contenido
    const trackViewContent = useCallback((data: {
        contentName?: string;
        contentCategory?: string;
        contentIds?: string[];
        contentType?: string;
        value?: number;
        currency?: string;
    }) => {
        events.viewContent({
            content_name: data.contentName,
            content_category: data.contentCategory,
            content_ids: data.contentIds,
            content_type: data.contentType,
            value: data.value,
            currency: data.currency || 'ARS',
        });
    }, []);

    // Rastrear compra
    const trackPurchase = useCallback((data: {
        contentIds?: string[];
        contentType?: string;
        value: number;
        currency?: string;
        numItems?: number;
    }) => {
        events.purchase({
            content_ids: data.contentIds,
            content_type: data.contentType,
            value: data.value,
            currency: data.currency || 'ARS',
            num_items: data.numItems,
        });
    }, []);

    // Rastrear lead
    const trackLead = useCallback((data: {
        contentName?: string;
        contentCategory?: string;
        value?: number;
        currency?: string;
    }) => {
        events.lead({
            content_name: data.contentName,
            content_category: data.contentCategory,
            value: data.value,
            currency: data.currency || 'ARS',
        });
    }, []);

    // Rastrear registro
    const trackRegistration = useCallback((data: {
        contentName?: string;
        value?: number;
        currency?: string;
        status?: string;
    }) => {
        events.completeRegistration({
            content_name: data.contentName,
            value: data.value,
            currency: data.currency || 'ARS',
            status: data.status,
        });
    }, []);

    // Rastrear agregar al carrito
    const trackAddToCart = useCallback((data: {
        contentIds?: string[];
        contentName?: string;
        contentType?: string;
        value?: number;
        currency?: string;
    }) => {
        events.addToCart({
            content_ids: data.contentIds,
            content_name: data.contentName,
            content_type: data.contentType,
            value: data.value,
            currency: data.currency || 'ARS',
        });
    }, []);

    // Rastrear inicio de checkout
    const trackInitiateCheckout = useCallback((data: {
        contentIds?: string[];
        contentCategory?: string;
        numItems?: number;
        value?: number;
        currency?: string;
    }) => {
        events.initiateCheckout({
            content_ids: data.contentIds,
            content_category: data.contentCategory,
            num_items: data.numItems,
            value: data.value,
            currency: data.currency || 'ARS',
        });
    }, []);

    // Rastrear búsqueda
    const trackSearch = useCallback((data: {
        searchString?: string;
        contentCategory?: string;
        contentIds?: string[];
    }) => {
        events.search({
            search_string: data.searchString,
            content_category: data.contentCategory,
            content_ids: data.contentIds,
        });
    }, []);

    // Rastrear contacto
    const trackContact = useCallback((data: {
        contentName?: string;
        contentCategory?: string;
    }) => {
        events.contact({
            content_name: data.contentName,
            content_category: data.contentCategory,
        });
    }, []);

    // Rastrear evento personalizado
    const trackCustom = useCallback((eventName: string, data: Record<string, any> = {}) => {
        trackCustomEvent(eventName, data);
    }, []);

    return {
        trackViewContent,
        trackPurchase,
        trackLead,
        trackRegistration,
        trackAddToCart,
        trackInitiateCheckout,
        trackSearch,
        trackContact,
        trackCustom,
        // También exportar los eventos directos
        events,
        trackEvent,
    };
}

/**
 * Hook para rastrear vista de página automáticamente
 */
export function usePageView(data?: {
    contentName?: string;
    contentCategory?: string;
}) {
    useEffect(() => {
        if (data) {
            events.viewContent({
                content_name: data.contentName,
                content_category: data.contentCategory,
            });
        }
    }, [data]);
}

/**
 * Hook para rastrear vista de producto automáticamente
 */
export function useProductView(product: {
    id: string;
    name: string;
    category?: string;
    price?: number;
} | null) {
    const { trackViewContent } = useMetaPixel();

    useEffect(() => {
        if (product) {
            trackViewContent({
                contentName: product.name,
                contentCategory: product.category,
                contentIds: [product.id],
                contentType: 'product',
                value: product.price,
                currency: 'ARS',
            });
        }
    }, [product, trackViewContent]);
}
