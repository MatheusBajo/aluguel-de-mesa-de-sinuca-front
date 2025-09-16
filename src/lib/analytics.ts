// src/lib/analytics.ts
// Configuração do Google Analytics e conversões

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Track page views
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Track events
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

// Track WhatsApp conversions
export const trackWhatsAppClick = (type: 'pf' | 'pj', location?: string) => {
    event({
        action: 'whatsapp_click',
        category: 'conversion',
        label: `${type}_${location || 'general'}`,
    });
};

// Track calculator usage
export const trackCalculatorUse = (savings: number) => {
    event({
        action: 'calculator_complete',
        category: 'engagement',
        value: Math.round(savings),
    });
};