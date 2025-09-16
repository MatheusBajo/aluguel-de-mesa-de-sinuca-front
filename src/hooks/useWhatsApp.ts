// src/hooks/useWhatsApp.ts
import { useCallback } from 'react';

interface WhatsAppOptions {
    message?: string;
    phoneNumber?: string;
}

export const useWhatsApp = () => {
    const defaultPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999';

    const openWhatsApp = useCallback(({ message = '', phoneNumber = defaultPhone }: WhatsAppOptions = {}) => {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        // Track conversion event (adicionar GTM/Analytics depois)
        if (typeof window !== 'undefined') {
            window.open(url, '_blank');
        }
    }, [defaultPhone]);

    const generateMessage = useCallback((type: 'pf' | 'pj' | 'custom', customMessage?: string) => {
        const messages = {
            pf: `Olá! 👋 Gostaria de saber mais sobre o aluguel de mesa de sinuca para *residência*.\n\nVi que o valor é R$ ${process.env.NEXT_PUBLIC_PRICE_PF}/mês para contratos de 6 meses.\n\nPoderia me passar mais informações?`,
            pj: `Olá! 👋 Gostaria de saber mais sobre o aluguel de mesa de sinuca para *empresa*.\n\nVi que o valor é R$ ${process.env.NEXT_PUBLIC_PRICE_PJ}/mês para contratos de 6 meses.\n\nPoderia me passar mais informações?`,
            custom: customMessage || ''
        };

        return messages[type];
    }, []);

    return { openWhatsApp, generateMessage };
};