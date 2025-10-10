// src/components/ui/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('system');
    const [mounted, setMounted] = useState(false);

    // Evita hidratação incorreta
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as Theme || 'system';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;

        // Remove classes anteriores
        root.classList.remove('light', 'dark');

        if (newTheme === 'system') {
            // Detecta preferência do sistema
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(newTheme);
        }

        localStorage.setItem('theme', newTheme);
    };

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    if (!mounted) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 border border-gray-200 dark:border-gray-700">
            <button
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-lg transition-colors ${
                    theme === 'light'
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                title="Modo Claro"
            >
                <Sun className="w-5 h-5" />
            </button>

            <button
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                title="Modo Escuro"
            >
                <Moon className="w-5 h-5" />
            </button>

            <button
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-lg transition-colors ${
                    theme === 'system'
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                title="Automático"
            >
                <Monitor className="w-5 h-5" />
            </button>
        </div>
    );
}