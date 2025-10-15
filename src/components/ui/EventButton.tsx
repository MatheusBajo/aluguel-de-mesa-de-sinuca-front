// src/components/ui/EventButton.tsx
'use client';

import { PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventButtonProps {
    className?: string;
}

export function EventButton({ className }: EventButtonProps) {
    return (
        <a
            href="https://www.alugueldegames.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'fixed z-50 rounded-full shadow-2xl hover:scale-110 transition-all group',
                // Safe area no mobile (iOS principalmente) - posiciona ACIMA do WhatsApp
                'bottom-[max(6rem,calc(env(safe-area-inset-bottom)+5rem))]',
                'right-[max(1.5rem,calc(env(safe-area-inset-right)+0.5rem))]',
                // FIX iOS Safari - força GPU rendering
                'transform-gpu will-change-transform',
                // Cores
                'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
                'text-white',
                className
            )}
            style={{
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
            }}
            aria-label="Aluguel para festas e eventos"
        >
            <div className="relative w-14 h-14 flex items-center justify-center">
                <PartyPopper className="w-7 h-7" />

                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20" />

                {/* Tooltip no hover */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg">
                        Festas e Eventos
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                    </div>
                </div>
            </div>
        </a>
    );
}