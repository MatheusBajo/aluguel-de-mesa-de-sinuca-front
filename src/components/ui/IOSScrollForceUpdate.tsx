// src/components/ui/IOSScrollForceUpdate.tsx
'use client';

import { useEffect } from 'react';

/**
 * Alternativa mais leve: força Safari iOS a atualizar scroll position
 *
 * Use esta se a solução IOSScrollFix quebrar third-party libs
 * que dependem de window.scrollY
 *
 * Funciona criando um elemento invisível que força o Safari
 * a atualizar o scroll em todos os touch events
 */
export function IOSScrollForceUpdate() {
    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
        const isMobileSafari = isIOS && window.innerWidth < 768;

        if (!isMobileSafari) return;

        // Cria elemento invisível que força scroll update
        const updateTrigger = document.createElement('div');
        updateTrigger.style.height = '0';
        updateTrigger.style.overflow = 'hidden';
        updateTrigger.style.position = 'fixed';
        updateTrigger.style.top = '0';
        updateTrigger.style.left = '0';
        updateTrigger.style.pointerEvents = 'none';
        updateTrigger.style.zIndex = '-1';
        document.body.appendChild(updateTrigger);

        // Atualiza o conteúdo do elemento para forçar repaint
        const forceScrollUpdate = () => {
            updateTrigger.textContent = `${window.scrollY}`;
        };

        // Eventos passivos para performance
        const options: AddEventListenerOptions = {
            passive: true,
            capture: true
        };

        window.addEventListener('scroll', forceScrollUpdate, options);
        window.addEventListener('touchstart', forceScrollUpdate, options);
        window.addEventListener('touchmove', forceScrollUpdate, options);
        window.addEventListener('touchend', forceScrollUpdate, options);

        return () => {
            window.removeEventListener('scroll', forceScrollUpdate);
            window.removeEventListener('touchstart', forceScrollUpdate);
            window.removeEventListener('touchmove', forceScrollUpdate);
            window.removeEventListener('touchend', forceScrollUpdate);
            updateTrigger.remove();
        };
    }, []);

    return null;
}