// src/components/ui/ModeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const [theme, setThemeState] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    // Evita mismatch entre SSR e client
    useEffect(() => {
        setMounted(true);
        const savedTheme = (localStorage.getItem('theme') || 'light') as 'light' | 'dark';
        setThemeState(savedTheme);

        // Aplica o tema salvo
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(savedTheme);
    }, []);

    if (!mounted) {
        // Renderiza placeholder invisível para evitar layout shift
        return (
            <Button
                variant="ghost"
                size="icon"
                className="relative overflow-hidden rounded-full opacity-0 pointer-events-none"
            >
                <Sun className="h-4 w-4" />
            </Button>
        );
    }

    const isDark = theme === 'dark';

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setThemeState(newTheme);

        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newTheme);

        localStorage.setItem('theme', newTheme);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Alternar tema"
            onClick={toggleTheme}
            className="relative overflow-hidden rounded-full transition-none"
        >
            {/* Sol quando claro */}
            <Sun
                className={`h-4 w-4 transition-transform duration-300 ${
                    isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
            />
            {/* Lua vem por cima quando escuro */}
            <Moon
                className={`absolute h-4 w-4 transition-transform duration-300 ${
                    isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
                }`}
            />
        </Button>
    );
}