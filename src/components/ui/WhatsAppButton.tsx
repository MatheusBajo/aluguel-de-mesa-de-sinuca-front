// src/components/ui/WhatsAppButton.tsx
'use client';

import Image from 'next/image';
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
        // Floating com safe-area-inset para não colar no notch/barra inferior
        floating: cn(
            'fixed z-50 rounded-full shadow-2xl hover:scale-110 transition-transform',
            // Safe area no mobile (iOS principalmente)
            'bottom-[max(1.5rem,calc(env(safe-area-inset-bottom)+0.5rem))]',
            'right-[max(1.5rem,calc(env(safe-area-inset-right)+0.5rem))]',
            // FIX iOS Safari - força GPU rendering
            'transform-gpu will-change-transform'
        ),
        inline: 'inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-all hover:scale-105',
        hero: 'inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all'
    };

    return (
        <button
            onClick={() => openWhatsApp({ message: finalMessage })}
            className={cn(variants[variant], className)}
            aria-label="Contato via WhatsApp"
            style={variant === 'floating' ? {
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
            } : undefined}
        >
            {variant === 'floating' ? (
                // Floating usa imagem 256px
                <Image
                    src="/images/whatsapp/256px-WhatsApp.png"
                    alt="WhatsApp"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                />
            ) : (
                // Inline/hero usa imagem 64px
                <>
                    <Image
                        src="/images/whatsapp/64px-WhatsApp.png"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                    {children || 'Falar no WhatsApp'}
                </>
            )}
        </button>
    );
}