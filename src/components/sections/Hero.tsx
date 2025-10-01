// src/components/sections/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';

export function Hero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline principal
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Badge aparece primeiro
            tl.from(badgeRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6
            });

            // Headline - cada palavra sobe individualmente
            if (headlineRef.current) {
                const words = headlineRef.current.querySelectorAll('.word');
                tl.from(words, {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    stagger: 0.1,
                    duration: 0.8
                }, '-=0.3');
            }

            // Subheadline - efeito fade + slide
            tl.from(subheadRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, '-=0.4');

            // CTAs
            tl.from(ctaRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.6
            }, '-=0.2');
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/mesa-de-sinuca-light.png"
                    alt="Mesa de sinuca"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />

                {/* Overlay escuro pra contraste */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Gradiente de baixo pra cima */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div ref={badgeRef}>
                        <Badge className="mb-6 bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-2">
                            🎱 A partir de R$ 250/mês
                        </Badge>
                    </div>

                    {/* Headline - quebrado em palavras pra animar individualmente */}
                    <h1
                        ref={headlineRef}
                        className="font-display font-bold text-5xl lg:text-7xl xl:text-8xl text-white mb-6 leading-tight"
                    >
                        <span className="block">
                            <span className="word inline-block">Transforma</span>{' '}
                            <span className="word inline-block">Sua</span>{' '}
                            <span className="word inline-block">Casa</span>
                        </span>
                        <span className="block relative">
                            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-gradient-x relative">
                                no Point
                                {/* Shimmer overlay */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                            </span>
                        </span>
                    </h1>

                    <style jsx>{`
                        @keyframes gradient-x {
                            0%, 100% {
                                background-position: 0% 50%;
                            }
                            50% {
                                background-position: 100% 50%;
                            }
                        }
                        @keyframes shimmer {
                            0% {
                                transform: translateX(-100%);
                            }
                            100% {
                                transform: translateX(100%);
                            }
                        }
                        .animate-gradient-x {
                            background-size: 200% 200%;
                            animation: gradient-x 3s ease infinite;
                        }
                        .animate-shimmer {
                            animation: shimmer 2s ease-in-out infinite;
                        }
                    `}</style>

                    {/* Subheadline */}
                    <p
                        ref={subheadRef}
                        className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
                    >
                        Churrasco todo fim de semana vira tradição.
                        <br className="hidden sm:block" />
                        Sua galera sempre vai querer voltar.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            variant="hero"
                            type="pf"
                            className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-2xl"
                        >
                            <span className="flex items-center gap-2">
                                💬 Quero Saber Mais
                            </span>
                        </WhatsAppButton>

                        <a
                            href="#momentos"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            Ver Como Funciona
                        </a>
                    </div>

                    {/* Trust signal sutil */}
                    <p className="mt-8 text-white/70 text-sm">
                        ✓ Entregamos e montamos  ✓ Contrato 6 meses  ✓ R$ 250/mês
                    </p>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-white/60" />
            </div>
        </section>
    );
}