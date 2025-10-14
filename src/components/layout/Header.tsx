// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { Button } from '@/components/ui/button';

const WHATSAPP_CONFIG = {
    link: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
};

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detectar tema
    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');

        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    // Logo: branco no topo, tema depois do scroll
    // Logo: branco no topo, tema depois do scroll
    const logoPath = !isScrolled
        ? '/images/logo/logo-01-white.png'
        : theme === 'dark'
            ? '/images/logo/logo-01-black.png'
            : '/images/logo/logo-01-white.png';

    const navItems = [
        { href: '#como-funciona', label: 'Como Funciona' },
        { href: '#beneficios', label: 'Vantagens' },
        { href: '#mesas', label: 'Nossas Mesas' },
        { href: '#depoimentos', label: 'Depoimentos' },
        { href: '#faq', label: 'Dúvidas' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 w-full isolate',
                'transition-all duration-500 ease-out',
                // Texto branco quando no topo (transparente)
                !isScrolled && 'text-white'
            )}
        >
            {/* Camada de blur suave - só aparece quando scrollou */}
            {isScrolled && (
                <>
                    <span className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-[12px] dark:backdrop-blur-[8px] animate-in fade-in duration-500" />

                    {/* Gradiente de fundo */}
                    <span className="pointer-events-none absolute inset-0 -z-20 hidden supports-[backdrop-filter]:block bg-gradient-to-b from-background/80 via-background/60 to-background/50 dark:from-background/100 dark:via-background/80 dark:to-background/60 animate-in fade-in duration-500" />
                </>
            )}

            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src={logoPath}
                            alt="Logo"
                            width={180}
                            height={60}
                            className="h-10 w-auto transition-all group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-[var(--color-brand-green)] transition-colors font-medium text-sm"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Ações à direita (WhatsApp, Modo Dark/Light) */}
                    <div className="flex items-center gap-1">
                        {/* WhatsApp Desktop */}
                        <a
                            href={WHATSAPP_CONFIG.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="transition-none rounded-full text-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                            </Button>
                        </a>

                        {/* Mode Toggle */}
                        <div className="hidden lg:block">
                            <ModeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden rounded-full"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border/20 backdrop-blur-xl">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-foreground hover:text-[var(--color-brand-green)] transition-colors font-medium py-2 px-3 rounded-lg hover:bg-accent/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* WhatsApp Mobile */}
                            <div className="pt-3 border-t border-border/20 space-y-2">
                                <a
                                    href={WHATSAPP_CONFIG.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full justify-center gap-2 text-[#25D366] border-[#25D366]/20 hover:bg-[#25D366]/10"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                        Falar no WhatsApp
                                    </Button>
                                </a>

                                {/* Mode Toggle Mobile */}
                                <div className="flex justify-center">
                                    <ModeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}