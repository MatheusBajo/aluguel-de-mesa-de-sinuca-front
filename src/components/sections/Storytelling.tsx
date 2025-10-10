// src/components/sections/Storytelling.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const scenes = [
    {
        image: '/storytelling/scene-01.webp',
        title: 'Sua casa no final de semana',
        description: '',
        position: 'bottom'
    },
    {
        image: '/storytelling/scene-02.webp',
        title: 'A mudança acontece',
        description: '',
        position: 'center'
    },
    {
        image: '/storytelling/scene-03.webp',
        title: 'Sua casa virou o point',
        description: '',
        position: 'top'
    }
];

export function Storytelling() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const ctaTitleRef = useRef<HTMLHeadingElement>(null);
    const ctaDesc1Ref = useRef<HTMLParagraphElement>(null);
    const ctaDesc2Ref = useRef<HTMLParagraphElement>(null);
    const ctaIconRef = useRef<HTMLDivElement>(null);
    const ctaButtonRef = useRef<HTMLButtonElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animar cada card
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Card vem de baixo e escala
                gsap.fromTo(card,
                    {
                        y: 100,
                        scale: 0.9,
                        opacity: 0
                    },
                    {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            end: 'top 30%',
                            scrub: 2.5,
                        }
                    }
                );

                // Animar título com SplitText
                const titleEl = titleRefs.current[index];
                if (titleEl) {
                    const splitTitle = new SplitText(titleEl, {
                        type: 'chars, words',
                        charsClass: 'char-title'
                    });

                    if (isMobile) {
                        // Mobile: só opacity
                        gsap.set(splitTitle.chars, {
                            opacity: 0
                        });

                        gsap.to(splitTitle.chars, {
                            opacity: 1,
                            duration: 0.6,
                            stagger: 0.02,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'bottom 95%',
                                toggleActions: 'play none none reverse',
                            }
                        });
                    } else {
                        // Desktop: opacity + blur + movement
                        gsap.set(splitTitle.chars, {
                            opacity: 0,
                            x: -20,
                            filter: 'blur(10px)'
                        });

                        gsap.to(splitTitle.chars, {
                            opacity: 1,
                            x: 0,
                            filter: 'blur(0px)',
                            duration: 0.8,
                            stagger: 0.02,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'bottom 95%',
                                toggleActions: 'play none none reverse',
                            }
                        });
                    }
                }
            });

            // Animar CTA Card
            const ctaCard = document.querySelector('.cta-card');
            if (ctaCard) {
                // Animar background do card
                gsap.fromTo(ctaCard,
                    {
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ctaCard,
                            start: 'top 75%',
                            toggleActions: 'play none none none',
                        }
                    }
                );

                // Animar ícone
                if (ctaIconRef.current) {
                    gsap.fromTo(ctaIconRef.current,
                        {
                            scale: 0,
                            rotation: -180,
                            opacity: 0
                        },
                        {
                            scale: 1,
                            rotation: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: ctaCard,
                                start: 'top 70%',
                                toggleActions: 'play none none none',
                            }
                        }
                    );
                }

                // Animar título do CTA
                if (ctaTitleRef.current) {
                    const splitCtaTitle = new SplitText(ctaTitleRef.current, {
                        type: 'chars, words',
                        charsClass: 'char-cta-title'
                    });

                    if (isMobile) {
                        // Mobile: só opacity e scale
                        gsap.set(splitCtaTitle.chars, {
                            opacity: 0,
                            scale: 0.8
                        });

                        gsap.to(splitCtaTitle.chars, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            stagger: 0.03,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: ctaCard,
                                start: 'top 70%',
                                toggleActions: 'play none none none',
                            }
                        });
                    } else {
                        // Desktop: com blur e movimento
                        gsap.set(splitCtaTitle.chars, {
                            opacity: 0,
                            y: 50,
                            scale: 0.8
                        });

                        gsap.to(splitCtaTitle.chars, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            stagger: 0.03,
                            ease: 'back.out(1.4)',
                            scrollTrigger: {
                                trigger: ctaCard,
                                start: 'top 70%',
                                toggleActions: 'play none none none',
                            }
                        });
                    }
                }

                // Animar primeira linha da descrição
                if (ctaDesc1Ref.current) {
                    gsap.set(ctaDesc1Ref.current, {
                        opacity: 0,
                        y: 30
                    });

                    gsap.to(ctaDesc1Ref.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.3,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ctaCard,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                        }
                    });
                }

                // Animar segunda linha da descrição
                if (ctaDesc2Ref.current) {
                    gsap.set(ctaDesc2Ref.current, {
                        opacity: 0,
                        y: 30
                    });

                    gsap.to(ctaDesc2Ref.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ctaCard,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                        }
                    });
                }

                // Animar botão
                if (ctaButtonRef.current) {
                    gsap.fromTo(ctaButtonRef.current,
                        {
                            opacity: 0,
                            y: 20,
                            scale: 0.9
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: 0.9,
                            ease: 'back.out(1.4)',
                            scrollTrigger: {
                                trigger: ctaCard,
                                start: 'top 70%',
                                toggleActions: 'play none none none',
                            }
                        }
                    );
                }
            }

            // Animar título principal da seção
            const mainTitle = document.querySelector('.main-title');
            if (mainTitle) {
                const splitMainTitle = new SplitText(mainTitle, {
                    type: 'chars',
                    charsClass: 'char-main'
                });

                if (isMobile) {
                    // Mobile: só opacity
                    gsap.set(splitMainTitle.chars, {
                        opacity: 0
                    });

                    gsap.to(splitMainTitle.chars, {
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.02,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: mainTitle,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        }
                    });
                } else {
                    // Desktop: com blur e movimento
                    gsap.set(splitMainTitle.chars, {
                        opacity: 0,
                        x: -40,
                        rotateY: -30,
                        filter: 'blur(20px)'
                    });

                    gsap.to(splitMainTitle.chars, {
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        filter: 'blur(0px)',
                        duration: 1.2,
                        stagger: 0.02,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: mainTitle,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        }
                    });
                }
            }

            // Animar subtítulo da seção
            const mainSubtitle = document.querySelector('.main-subtitle');
            if (mainSubtitle) {
                const splitMainSubtitle = new SplitText(mainSubtitle, {
                    type: 'words',
                    wordsClass: 'word-subtitle'
                });

                if (isMobile) {
                    // Mobile: só opacity
                    gsap.set(splitMainSubtitle.words, {
                        opacity: 0
                    });

                    gsap.to(splitMainSubtitle.words, {
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.03,
                        delay: 0.3,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: mainSubtitle,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        }
                    });
                } else {
                    // Desktop: com blur e movimento
                    gsap.set(splitMainSubtitle.words, {
                        opacity: 0,
                        y: 20,
                        filter: 'blur(5px)'
                    });

                    gsap.to(splitMainSubtitle.words, {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 0.8,
                        stagger: 0.03,
                        delay: 0.3,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: mainSubtitle,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        }
                    });
                }
            }

        }, sectionRef);

        return () => ctx.revert();
    }, [isMobile]);

    return (
        <section
            id="momentos"
            ref={sectionRef}
            className="py-16 md:py-24 lg:py-40 bg-gradient-to-b from-background via-muted/30 to-background"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
                    <h2 className="main-title text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-8">
                        A Transformação
                    </h2>
                    <p className="main-subtitle text-xl md:text-2xl text-muted-foreground">
                        Veja o antes e depois de adicionar uma mesa na sua casa
                    </p>
                </div>

                {/* Cards */}
                <div className="max-w-6xl mx-auto space-y-8 md:space-y-16 lg:space-y-20">
                    {scenes.map((scene, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className="relative"
                        >
                            {/* Card com imagem e glassmorphism no overlay */}
                            <div className="relative aspect-[16/9] md:aspect-video rounded-xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                                <Image
                                    src={scene.image}
                                    alt={scene.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay gradiente com glassmorphism */}
                                <div className={`absolute inset-0 ${
                                    index === 2
                                        ? 'bg-gradient-to-t from-black/40 to-transparent'
                                        : 'bg-gradient-to-t from-black/50 via-black/20 to-transparent'
                                }`} />

                                {/* Texto sempre branco sem blur */}
                                <div className="absolute text-center tracking-tight bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                                    <h3
                                        ref={(el) => {
                                            titleRefs.current[index] = el;
                                        }}
                                        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl"
                                    >
                                        {scene.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Final com glassmorphism */}
                    <div className="cta-card mt-20 md:mt-32 lg:mt-40 relative">
                        {/* Background decorativo glassmorphism */}
                        <div className="absolute inset-0 glass-gradient rounded-3xl -z-10 border-border" />

                        <div className="text-center py-16 md:py-24 px-6 md:px-12">
                            {/* Ícone */}
                            <div
                                ref={ctaIconRef}
                                className="mb-8 text-6xl md:text-7xl"
                            >
                                🎱
                            </div>

                            <h2
                                ref={ctaTitleRef}
                                className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 text-foreground"
                            >
                                É isso que você aluga!
                            </h2>

                            <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
                                <p
                                    ref={ctaDesc1Ref}
                                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-brand-green)]"
                                >
                                    Não é só uma mesa.
                                </p>
                                <p
                                    ref={ctaDesc2Ref}
                                    className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light"
                                >
                                    É tradição, conexão e memórias que sua família vai lembrar pra sempre.
                                </p>
                            </div>

                            {/* CTA Button com glassmorphism no hover */}
                            <button
                                ref={ctaButtonRef}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, '_blank')}
                                className="mt-12 px-8 py-4 bg-[var(--color-brand-green)] hover:bg-[#047857] text-white text-lg font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Quero alugar agora
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilos CSS */}
            <style jsx>{`
                .char-title,
                .char-cta-title,
                .word-cta-desc,
                .char-main,
                .word-subtitle {
                    display: inline-block;
                    will-change: transform, opacity, filter;
                }
            `}</style>
        </section>
    );
}