// src/components/sections/Hero.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ChevronDown } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

const ANIMATION_CONFIG = {
    WORD_DELAY: 120,
    HEADLINE_DISPLAY_TIME: 2500,
    TRANSITION_DURATION: 500,
    HIGHLIGHT_DURATION: 600,
    HIGHLIGHT_STAGGER: 300,
    WORD_EASE: 'power3.out',
    TRANSITION_EASE: 'power2.inOut',
    HIGHLIGHT_EASE: 'power2.out',
    WORD_Y_DISTANCE: 64,
    WORD_BLUR: 8,
};

const HEADLINES = [
    {
        text: "A Diferença Entre Foi Legal 😊 e Quando é o Próximo? 🤩",
        highlights: [
            { phrase: "Foi Legal 😊", backgroundColor: 'rgba(234, 179, 8, 0.35)' },
            { phrase: "Quando é o Próximo? 🤩", backgroundColor: 'rgba(74, 222, 128, 0.35)' }
        ]
    },
    {
        text: "O Que Separa Seu Churrasco 🔥 dos Outros",
        highlights: [
            { phrase: "Separa", backgroundColor: 'rgba(239, 68, 68, 0.35)' },
            { phrase: "Churrasco 🔥 dos Outros", backgroundColor: 'rgba(251, 146, 60, 0.35)' }
        ]
    },
    {
        text: "Cria a Tradição 🏆 que Sua Casa Merece 🏠",
        highlights: [
            { phrase: "Tradição 🏆", backgroundColor: 'rgba(168, 85, 247, 0.35)' },
            { phrase: "Casa Merece 🏠", backgroundColor: 'rgba(34, 197, 94, 0.35)' }
        ]
    }
];

export function Hero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Garantir que o vídeo toca automaticamente
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.log('Autoplay prevented:', err);
            });
        }
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from(badgeRef.current, { opacity: 0, y: -20, duration: 0.6 });
            tl.from(subheadRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.2');
            tl.from(ctaRef.current, { opacity: 0, y: 30, duration: 0.6 }, '-=0.2');
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!headlineRef.current) return;

        const animateHeadline = () => {
            const headline = HEADLINES[currentIndex];
            const headlineElement = headlineRef.current;
            if (!headlineElement) return;

            headlineElement.innerHTML = '';
            let htmlContent = headline.text;

            headline.highlights.forEach((highlight, index) => {
                const spanClass = `highlight-span-${index}`;
                htmlContent = htmlContent.replace(
                    highlight.phrase,
                    `<span class="${spanClass}" data-bg="${highlight.backgroundColor}" style="
                        padding: 3px 8px;
                        border-radius: 6px;
                        background-image: linear-gradient(to right, ${highlight.backgroundColor} 0%, ${highlight.backgroundColor} 0%);
                        background-repeat: no-repeat;
                        background-size: 0% 100%;
                        box-decoration-break: clone;
                        -webkit-box-decoration-break: clone;
                        display: inline;
                        text-transform: uppercase;
                        font-weight: 700;
                    ">${highlight.phrase}</span>`
                );
            });

            headlineElement.innerHTML = htmlContent;
            gsap.set(headlineElement, { opacity: 0 });

            gsap.delayedCall(0.15, () => {
                const highlightSpans = headline.highlights.map((_, index) =>
                    headlineElement.querySelector(`.highlight-span-${index}`)
                );

                const split = new SplitText(headlineElement, {
                    type: 'words',
                    wordsClass: 'word-animated'
                });

                gsap.set(split.words, { display: 'inline-block', margin: '0 2px' });

                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.delayedCall(ANIMATION_CONFIG.HEADLINE_DISPLAY_TIME / 1000, () => {
                            gsap.to(headlineElement, {
                                opacity: 0,
                                duration: ANIMATION_CONFIG.TRANSITION_DURATION / 1000,
                                ease: ANIMATION_CONFIG.TRANSITION_EASE,
                                onComplete: () => {
                                    split.revert();
                                    setCurrentIndex((prev) => (prev + 1) % HEADLINES.length);
                                }
                            });
                        });
                    }
                });

                if (isMobile) {
                    gsap.set(split.words, { opacity: 0 });
                    gsap.set(headlineElement, { opacity: 1 });

                    tl.to(split.words, {
                        opacity: 1,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.set(split.words, {
                        opacity: 0,
                        y: ANIMATION_CONFIG.WORD_Y_DISTANCE,
                        filter: `blur(${ANIMATION_CONFIG.WORD_BLUR}px)`
                    });

                    gsap.set(headlineElement, { opacity: 1 });

                    tl.to(split.words, {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 0.6,
                        stagger: ANIMATION_CONFIG.WORD_DELAY / 1000,
                        ease: ANIMATION_CONFIG.WORD_EASE
                    });
                }

                highlightSpans.forEach((span, index) => {
                    if (span) {
                        const startDelay = (index * ANIMATION_CONFIG.HIGHLIGHT_STAGGER / 1000) + 0.4;
                        tl.to(span, {
                            backgroundSize: '100% 100%',
                            duration: ANIMATION_CONFIG.HIGHLIGHT_DURATION / 1000,
                            ease: ANIMATION_CONFIG.HIGHLIGHT_EASE
                        }, startDelay);
                    }
                });

                timelineRef.current = tl;
            });
        };

        animateHeadline();
        return () => {
            if (timelineRef.current) timelineRef.current.kill();
        };
    }, [currentIndex, isMobile]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        filter: 'saturate(1.2) brightness(0.5)'
                    }}
                >
                    <source
                        src="/images/produtos/mesa-de-sinuca-padrao/video-mesa-de-sinuca.mp4"
                        type="video/mp4"
                    />
                    Seu navegador não suporta vídeos.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Badge com glassmorphism */}
                    <div ref={badgeRef} className="mb-6">
                        <Badge className="backdrop-blur-[2px] bg-white/40 dark:bg-black/40 text-foreground px-4 py-2 text-base font-semibold border border-white/30 dark:border-white/20">
                            🎱 A partir de R$ 295/mês
                        </Badge>
                    </div>

                    {/* Headline */}
                    <div className="h-[220px] sm:h-[240px] lg:h-[280px] w-full flex items-center justify-center mb-6 px-4 sm:px-6 md:px-10">
                        <h1
                            ref={headlineRef}
                            className="font-display font-bold text-[1.75rem] sm:text-3xl md:text-5xl lg:text-7xl text-white text-center opacity-0 max-w-full"
                            style={{ perspective: '1000px', width: '100%', display: 'block', maxWidth: 'calc(100% - 2rem)', lineHeight: '1.55' }}
                        />
                    </div>

                    {/* Subheadline */}
                    <p ref={subheadRef} className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto px-4">
                        Churrasco bom todo mundo faz. Tradição precisa de sinuca.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center px-4 mb-8">
                        <WhatsAppButton
                            variant="hero"
                            type="pf"
                            className="bg-[var(--color-brand-green)] hover:bg-[#047857] text-white shadow-2xl px-4 py-3 md:px-8 md:py-4 text-sm md:text-lg border-0 justify-center"
                        >
                            Entrar em Contato
                        </WhatsAppButton>
                        <a
                            href="#momentos"
                            className="inline-flex items-center justify-center gap-2 px-4 py-3 md:px-8 md:py-4 rounded-xl glass-gradient border-white/20 text-white font-bold text-sm md:text-lg hover:scale-105 transition-all"
                        >
                            Ver Como Funciona
                        </a>
                    </div>

                    {/* Trust badges com glassmorphism */}
                    <div className="flex flex-wrap justify-center gap-3 px-4">
                        <Badge className="backdrop-blur-[2px] bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/20 text-foreground px-4 py-2">
                            ✓ Entregamos e montamos
                        </Badge>
                        <Badge className="backdrop-blur-[2px] bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/20 text-foreground px-4 py-2">
                            ✓ Contratos de até 6 meses
                        </Badge>
                        <Badge className="backdrop-blur-[2px] bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/20 text-foreground px-4 py-2">
                            ✓ R$ 295/mês
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white/60" />
            </div>

            <style jsx>{`
                .word-animated {
                    will-change: transform, opacity, filter;
                }
            `}</style>
        </section>
    );
}