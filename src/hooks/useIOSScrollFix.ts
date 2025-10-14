// hooks/useIOSScrollFix.ts
'use client';

import { useEffect } from 'react';

/**
 * Hook para lidar com o bug de fixed position no iOS 26 Safari
 *
 * O bug: Elementos fixed "pulam" ou ficam com gap ao scrollar,
 * especialmente depois de focar na barra de endereço
 *
 * Fix: Move o scroll da window para o body
 */
export function useIOSScrollFix() {
    useEffect(() => {
        // Detecta iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);

        if (!isIOS) return;

        // Move scroll para o body
        const html = document.documentElement;
        const body = document.body;

        // Salva scroll atual
        const scrollY = window.scrollY;

        // Aplica fix
        html.style.height = '100%';
        html.style.overflow = 'hidden';

        body.style.height = '100%';
        body.style.overflowY = 'auto';
        body.style.overflowX = 'hidden';
        body.style.webkitOverflowScrolling = 'touch';

        // Restaura posição de scroll no body
        if (scrollY > 0) {
            body.scrollTop = scrollY;
        }

        // Cleanup
        return () => {
            html.style.height = '';
            html.style.overflow = '';
            body.style.height = '';
            body.style.overflowY = '';
            body.style.overflowX = '';
            body.style.webkitOverflowScrolling = '';
        };
    }, []);
}

/**
 * Versão alternativa: força scroll update no iOS
 * Use se a solução acima quebrar third-party libs
 */
export function useIOSScrollUpdate() {
    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
        const isMobileSafari = isIOS && window.innerWidth < 768;

        if (!isMobileSafari) return;

        // Força Safari atualizar scroll position
        const logDiv = document.createElement('div');
        logDiv.style.height = '0px';
        logDiv.style.overflow = 'hidden';
        logDiv.style.position = 'fixed';
        logDiv.style.top = '0';
        logDiv.style.left = '0';
        logDiv.style.pointerEvents = 'none';
        document.body.appendChild(logDiv);

        const updateLog = () => {
            logDiv.textContent = window.scrollY.toFixed(0);
        };

        // Força update em todos eventos relevantes
        const options = { passive: true, capture: true };
        window.addEventListener('scroll', updateLog, options);
        window.addEventListener('touchstart', updateLog, options);
        window.addEventListener('touchmove', updateLog, options);
        window.addEventListener('touchend', updateLog, options);

        return () => {
            window.removeEventListener('scroll', updateLog);
            window.removeEventListener('touchstart', updateLog);
            window.removeEventListener('touchmove', updateLog);
            window.removeEventListener('touchend', updateLog);
            logDiv.remove();
        };
    }, []);
}