// src/components/sections/Storytelling.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
    {
        image: '/scene-01.png',
        title: 'Galera indo embora cedo 😔',
        description: '22h - Mais uma sexta sem ter motivo pra ficar',
        position: 'bottom'
    },
    {
        image: '/scene-02.png',
        title: 'A mudança acontece 🎱',
        description: 'Montagem profissional em 2h',
        position: 'center'
    },
    {
        image: '/scene-03.png',
        title: 'Sua casa 🏠 virou o point 🎉',
        description: '01h - Ninguém quer ir embora',
        position: 'top'
    }
];

export function Storytelling() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const textsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: 1.5,
                        }
                    }
                );

                // Texto aparece depois
                const textEl = textsRef.current[index];
                if (textEl) {
                    gsap.fromTo(textEl,
                        {
                            opacity: 0,
                            y: 20
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 70%',
                                end: 'top 50%',
                                scrub: 0.8,
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="momentos"
            ref={sectionRef}
            className="py-16 md:py-24 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-8">
                        A Transformação
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600">
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
                            className={`relative ${
                                index === 2 ? 'lg:scale-105' : ''
                            }`}
                        >
                            {/* Card com imagem */}
                            <div className={`relative aspect-[4/3] sm:aspect-[16/10] md:aspect-video rounded-xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl ${
                                index === 2 ? 'ring-4 ring-yellow-400/50 ring-offset-4 ring-offset-white' : ''
                            }`}>
                                <Image
                                    src={scene.image}
                                    alt={scene.title}
                                    fill
                                    className={`object-cover ${
                                        index === 2
                                            ? 'brightness-110 contrast-110 saturate-125'
                                            : ''
                                    }`}
                                />

                                {/* Badge especial pro card 3 */}
                                {index === 2 && (
                                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-base shadow-lg z-20 animate-pulse">
                                        🎉 O MOMENTO
                                    </div>
                                )}

                                {/* Overlay gradiente - menor no card 3 */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${
                                    index === 2
                                        ? 'from-black/60 via-transparent to-transparent'
                                        : 'from-black/80 via-transparent to-transparent md:from-black/80 md:via-black/30'
                                }`} />

                                {/* Texto - só na parte inferior */}
                                <div
                                    ref={(el) => {
                                        textsRef.current[index] = el;
                                    }}
                                    className="absolute bottom-0 left-0 right-0 px-10 pb-6 md:p-8 lg:p-12"
                                >
                                    <p className={`text-xs md:text-lg lg:text-xl mb-0.5 md:mb-2 ${
                                        index === 2
                                            ? 'text-yellow-300 font-semibold'
                                            : 'text-white'
                                    }`}>
                                        {scene.description}
                                    </p>
                                    <h3 className={`text-lg md:text-4xl lg:text-6xl font-bold leading-tight ${
                                        index === 2
                                            ? 'text-white drop-shadow-2xl'
                                            : 'text-white'
                                    }`}>
                                        {scene.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Card final - CTA */}
                    <div className="mt-8 md:mt-16 relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl md:shadow-2xl border-2 border-green-200">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/30 to-transparent animate-shimmer"/>
                        </div>

                        <div className="relative z-10 text-center">
                            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-2 md:mb-4">
                                É isso que você aluga
                            </p>
                            <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6">
                                Não é só uma mesa. É churrasco 🥩 toda semana, tradição da casa 🏠, memórias que sua família ❤️ vai lembrar pra sempre.
                            </p>
                            <WhatsAppButton
                                variant="inline"
                                className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                                message="Oi! Vi as transformações no site e quero criar essa tradição na minha casa também!"
                            >
                                Quero criar a tradição
                            </WhatsAppButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animação CSS shimmer */}
            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </section>
    );
}