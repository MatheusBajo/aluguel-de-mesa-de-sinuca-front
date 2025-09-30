// ==================================================
// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function Header() {
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
        <header className={cn(
            'fixed top-02 left-0 right-0 z-40 transition-all',
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg text-black' : 'bg-transparent text-white'
        )}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">🎱</span>
                        </div>
                        <span className="font-display font-bold text-xl ">Aluguel de Bilhar</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-primary-600 transition-colors !duration-75 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="tel:+5511999999999"
                            className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-medium">(11) 99999-9999</span>
                        </a>
                        <WhatsAppButton variant="inline" type="pf">
                            Orçamento Grátis
                        </WhatsAppButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2"
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t shadow-xl">
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t">
                                <WhatsAppButton variant="hero" type="pf" className="w-full justify-center">
                                    Solicitar Orçamento
                                </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}