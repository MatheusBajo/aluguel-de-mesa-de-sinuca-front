// src/components/layout/HeroHeader.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/ModeToggle';

const WHATSAPP_CONFIG = {
    link: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
};

/**
 * Header que fica visível no Hero com texto SEMPRE BRANCO
 * Desaparece quando scrolla (o Header principal assume)
 */
export function HeroHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                'fixed top-0 left-0 right-0 z-40 w-full isolate transition-opacity duration-500',
                // Invisível quando scrolla (Header principal assume)
                isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo - sempre branco */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/images/logo/logo-01-white.png"
                            alt="Logo"
                            width={180}
                            height={60}
                            className="h-10 w-auto transition-all group-hover:scale-105 brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav - texto branco */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white hover:text-[#fbbf24] transition-colors font-medium text-sm"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Ações à direita */}
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
                                className="transition-none rounded-full text-[#25D366] hover:text-[#25D366] hover:bg-white/10"
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
                            className="lg:hidden rounded-full text-white hover:bg-white/10"
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
                    <div className="lg:hidden py-4 border-t border-white/20 backdrop-blur-xl bg-black/40 rounded-b-2xl">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-white hover:text-[#fbbf24] transition-colors font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            <div className="pt-3 border-t border-white/20 space-y-2">
                                <a
                                    href={WHATSAPP_CONFIG.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full justify-center gap-2 text-[#25D366] border-[#25D366]/20 hover:bg-[#25D366]/10 bg-white/10"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                        Falar no WhatsApp
                                    </Button>
                                </a>

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