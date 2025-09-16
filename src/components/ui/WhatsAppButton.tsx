// ==================================================
// src/components/ui/WhatsAppButton.tsx
'use client';

import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
    message?: string;
    variant?: 'floating' | 'inline' | 'hero';
    className?: string;
    children?: React.ReactNode;
    type?: 'pf' | 'pj' | 'custom';
}

export function WhatsAppButton({
                                   message,
                                   variant = 'inline',
                                   className,
                                   children,
                                   type = 'custom'
                               }: WhatsAppButtonProps) {
    const { openWhatsApp, generateMessage } = useWhatsApp();

    const finalMessage = message || generateMessage(type);

    const variants = {
        floating: 'fixed bottom-6 right-6 z-50 rounded-full shadow-2xl hover:scale-110 bg-green-500 hover:bg-green-600 p-4',
        inline: 'inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-all hover:scale-105',
        hero: 'inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all'
    };

    return (
        <button
            onClick={() => openWhatsApp({ message: finalMessage })}
            className={cn(variants[variant], className)}
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className={variant === 'floating' ? 'w-8 h-8' : 'w-6 h-6'} />
            {variant !== 'floating' && (children || 'Falar no WhatsApp')}
        </button>
    );
}