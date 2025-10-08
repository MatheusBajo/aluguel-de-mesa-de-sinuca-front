// src/components/sections/Hero.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ChevronDown } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';

// Registrar plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

// ========================================
// 🎨 CONFIGURAÇÕES GLOBAIS DA ANIMAÇÃO
// ========================================
const ANIMATION_CONFIG = {
    // Timing
    WORD_DELAY: 150,              // ms entre cada palavra aparecer
    HEADLINE_DISPLAY_TIME: 4000,  // ms que headline fica visível após animação completa
    TRANSITION_DURATION: 600,     // ms da transição entre headlines (mais rápido)
    HIGHLIGHT_DURATION: 800,      // ms da animação do highlight (grifar)
    HIGHLIGHT_STAGGER: 400,       // ms entre começar cada highlight

    // Easing
    WORD_EASE: 'power3.out',
    TRANSITION_EASE: 'power2.inOut',
    HIGHLIGHT_EASE: 'power2.out',

    // Efeitos visuais
    WORD_Y_DISTANCE: 20,          // px que palavra sobe ao entrar
    WORD_BLUR: 4,                 // px de blur ao entrar
};

// Headlines que vão rotacionar
const HEADLINES = [
    {
        text: "A Diferença Entre 'Foi Legal' e 'Quando é o Próximo?'",
        highlights: [
            {
                phrase: "'Foi Legal'",
                backgroundColor: 'rgba(234, 179, 8, 0.35)'
            },
            {
                phrase: "'Quando é o Próximo?'",
                backgroundColor: 'rgba(74, 222, 128, 0.35)'
            }
        ]
    },
    {
        text: "🍖 O Que Separa Seu Churrasco dos Outros",
        highlights: []
    },
    {
        text: "Cria a Tradição que Sua Casa Merece",
        highlights: []
    }
];

export function Hero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // Animação inicial (badge, subhead, cta)
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(badgeRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6
            });

            tl.from(subheadRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, '-=0.2');

            tl.from(ctaRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.6
            }, '-=0.2');
        });

        return () => ctx.revert();
    }, []);

    // Animação das headlines rotativas
    useEffect(() => {
        if (!headlineRef.current) return;

        const animateHeadline = () => {
            const headline = HEADLINES[currentIndex];
            const headlineElement = headlineRef.current;
            if (!headlineElement) return;

            // Limpar conteúdo
            headlineElement.innerHTML = '';

            // Inserir texto com highlights ANTES do SplitText
            let htmlContent = headline.text;

            // Envolver frases destacadas em spans
            headline.highlights.forEach((highlight, index) => {
                const spanClass = `highlight-${index}`;
                htmlContent = htmlContent.replace(
                    highlight.phrase,
                    `<span class="${spanClass}" style="background-color: ${highlight.backgroundColor}; padding: 4px 8px; border-radius: 6px; box-decoration-break: clone; -webkit-box-decoration-break: clone; display: inline;">${highlight.phrase}</span>`
                );
            });

            headlineElement.innerHTML = htmlContent;

            // Manter invisível até começar animação
            gsap.set(headlineElement, { opacity: 0 });

            // Pequeno delay antes de começar a animar
            gsap.delayedCall(0.15, () => {
                // Split text em palavras (vai preservar os spans de highlight)
                const split = new SplitText(headlineElement, {
                    type: 'words',
                    wordsClass: 'word-animated'
                });

                // CSS para quebra natural
                gsap.set(split.words, {
                    display: 'inline-block',
                    margin: '0 2px'
                });

                // Timeline da animação
                const tl = gsap.timeline({
                    onComplete: () => {
                        // Após completar, espera e passa pra próxima
                        gsap.delayedCall(ANIMATION_CONFIG.HEADLINE_DISPLAY_TIME / 1000, () => {
                            // Animar saída suave (sem piscada)
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

                // Animar entrada de cada palavra
                gsap.set(split.words, {
                    opacity: 0,
                    y: ANIMATION_CONFIG.WORD_Y_DISTANCE,
                    filter: `blur(${ANIMATION_CONFIG.WORD_BLUR}px)`
                });

                // Mostrar headline e animar palavras
                gsap.set(headlineElement, { opacity: 1 });

                tl.to(split.words, {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 0.6,
                    stagger: ANIMATION_CONFIG.WORD_DELAY / 1000,
                    ease: ANIMATION_CONFIG.WORD_EASE
                });

                timelineRef.current = tl;
            });
        };

        animateHeadline();

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, [currentIndex]);

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
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-7xl mx-auto text-center px-8">
                    {/* Badge */}
                    <div ref={badgeRef}>
                        <Badge className="mb-6 bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-2">
                            🎱 A partir de R$ 250/mês
                        </Badge>
                    </div>

                    {/* Headline Rotativa - HEIGHT FIXO */}
                    <div className="h-[160px] md:h-[240px] lg:h-[280px] flex items-center justify-center mb-6">
                        <h1
                            ref={headlineRef}
                            className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight flex flex-wrap items-center justify-center gap-x-2 gap-y-1 w-full opacity-0"
                            style={{ perspective: '1000px' }}
                        >
                        </h1>
                    </div>

                    {/* Subheadline FIXO */}
                    <p
                        ref={subheadRef}
                        className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
                    >
                        Churrasco bom todo mundo faz. Tradição precisa de sinuca.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            variant="hero"
                            type="pf"
                            className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-2xl"
                        >
              <span className="flex items-center gap-2">
                💬 Quero Criar a Tradição
              </span>
                        </WhatsAppButton>

                        <a
                            href="#momentos"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            Ver Como Funciona
                        </a>
                    </div>

                    {/* Trust signal */}
                    <p className="mt-8 text-white/70 text-sm">
                        ✓ Entregamos e montamos • ✓ Contrato 6 meses • ✓ R$ 250/mês
                    </p>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-white/60" />
            </div>

            {/* Estilos CSS adicionais */}
            <style jsx>{`
        .word-animated {
          will-change: transform, opacity, filter;
        }
      `}</style>
        </section>
    );
}