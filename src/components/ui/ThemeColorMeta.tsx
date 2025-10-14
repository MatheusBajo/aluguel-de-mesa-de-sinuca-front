// src/components/ui/ThemeColorMeta.tsx
'use client';

import { useEffect } from 'react';

/**
 * Atualiza a meta tag theme-color dinamicamente baseado no tema
 * Isso muda a cor da barra superior do navegador mobile (iOS/Android)
 */
export function ThemeColorMeta() {
    useEffect(() => {
        const updateThemeColor = () => {
            const isDark = document.documentElement.classList.contains('dark');

            // Cores do globals.css
            // Light: --background: oklch(1 0 0) = #FFFFFF
            // Dark: --background: oklch(0.145 0 0) = #252525
            const color = isDark ? '#252525' : '#FFFFFF';

            // Atualiza ou cria a meta tag principal
            let metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');

            if (metaThemeColor) {
                metaThemeColor.setAttribute('content', color);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'theme-color';
                meta.content = color;
                document.head.appendChild(meta);
            }

            // Cria meta tags com media query (iOS Safari usa isso pra evitar flash)
            updateMetaWithMedia('light', '#FFFFFF');
            updateMetaWithMedia('dark', '#252525');
        };

        const updateMetaWithMedia = (scheme: 'light' | 'dark', color: string) => {
            const mediaQuery = `(prefers-color-scheme: ${scheme})`;
            let meta = document.querySelector(`meta[name="theme-color"][media="${mediaQuery}"]`);

            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', 'theme-color');
                meta.setAttribute('media', mediaQuery);
                document.head.appendChild(meta);
            }

            meta.setAttribute('content', color);
        };

        // Atualiza imediatamente
        updateThemeColor();

        // Observer para mudanças de tema
        const observer = new MutationObserver(updateThemeColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return null;
}