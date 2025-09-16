// src/lib/analytics.ts
// CORREÇÃO: Tipar corretamente ao invés de any
declare global {
    interface Window {
        gtag: (
            command: string,
            targetId: string,
            config?: {
                page_path?: string;
                event_category?: string;
                event_label?: string;
                value?: number;
            }
        ) => void;
        dataLayer: Array<Record<string, unknown>>;
    }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID as string, {
            page_path: url,
        });
    }
};

export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

export const trackWhatsAppClick = (type: 'pf' | 'pj', location?: string) => {
    event({
        action: 'whatsapp_click',
        category: 'conversion',
        label: `${type}_${location || 'general'}`,
    });
};

export const trackCalculatorUse = (savings: number) => {
    event({
        action: 'calculator_complete',
        category: 'engagement',
        value: Math.round(savings),
    });
};