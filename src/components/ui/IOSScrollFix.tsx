// src/components/ui/IOSScrollFix.tsx
'use client';

import { useEffect } from 'react';

/**
 * Componente que aplica fix para o bug de position fixed no iOS 26 Safari
 *
 * Bug: Elementos fixed pulam/deslocam ao scrollar, especialmente após
 * focar na barra de endereço. Aparece um gap e o posicionamento fica errado.
 *
 * Solução: Move o scroll da window para o body
 * Trade-off: Algumas libs third-party podem esperar scroll na window
 */
export function IOSScrollFix() {
    useEffect(() => {
        // Detecta iOS Safari
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);

        if (!isIOS) return;

        const html = document.documentElement;
        const body = document.body;

        // Salva scroll atual antes de modificar
        const currentScrollY = window.scrollY;

        // Aplica fix: move scroll para o body
        html.style.height = '100%';
        html.style.overflow = 'hidden';

        body.style.height = '100%';
        body.style.overflowY = 'auto';
        body.style.overflowX = 'hidden';

        // -webkit-overflow-scrolling: touch (momentum scrolling)
        // @ts-ignore - propriedade webkit não tipada
        body.style.webkitOverflowScrolling = 'touch';

        // Restaura posição de scroll no body
        if (currentScrollY > 0) {
            body.scrollTop = currentScrollY;
        }

        // Também força GPU rendering nos elementos fixed
        const fixedElements = document.querySelectorAll('[class*="fixed"]');
        fixedElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                el.style.transform = 'translate3d(0, 0, 0)';
                el.style.webkitTransform = 'translate3d(0, 0, 0)';
                // @ts-ignore
                el.style.backfaceVisibility = 'hidden';
                // @ts-ignore
                el.style.webkitBackfaceVisibility = 'hidden';
            }
        });

        // Cleanup ao desmontar
        return () => {
            html.style.height = '';
            html.style.overflow = '';
            body.style.height = '';
            body.style.overflowY = '';
            body.style.overflowX = '';
            // @ts-ignore
            body.style.webkitOverflowScrolling = '';
        };
    }, []);

    return null;
}