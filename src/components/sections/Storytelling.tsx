// src/components/sections/Storytelling.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
    {
        image: '/scene-01.png',
        title: 'Galera indo embora cedo',
        description: '22h - Mais uma sexta sem ter motivo pra ficar',
        position: 'bottom'
    },
    {
        image: '/scene-02.png',
        title: 'A mudança acontece',
        description: 'Montagem profissional em 2h',
        position: 'center'
    },
    {
        image: '/scene-03.png',
        title: 'Sua casa virou o point',
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

                // Card vem de baixo e escala - COMEÇA MAIS CEDO
                gsap.fromTo(card,
                    {
                        y: 150,
                        scale: 0.8,
                        opacity: 0
                    },
                    {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%', // Começa mais cedo (era 85%)
                            end: 'top 50%',   // Termina antes
                            scrub: 1.5,
                        }
                    }
                );

                // Texto + gradiente aparecem DEPOIS que imagem terminou
                const textEl = textsRef.current[index];
                if (textEl) {
                    gsap.fromTo(textEl,
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 45%', // Só começa quando imagem já subiu
                                end: 'top 40%',
                                scrub: 0.6,
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
            className="py-40 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                        A Transformação
                    </h2>
                    <p className="text-2xl text-gray-600">
                        Veja o antes e depois de adicionar uma mesa na sua casa
                    </p>
                </div>

                {/* Cards grandes */}
                <div className="max-w-6xl mx-auto flex flex-col gap-20">
                    {scenes.map((scene, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className="relative min-h-[70vh]"
                        >
                            {/* Imagem com texto sobreposto */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={scene.image}
                                    alt={scene.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay gradiente pra legibilidade */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>

                                {/* Texto DENTRO da imagem */}
                                <div
                                    ref={(el) => {
                                        textsRef.current[index] = el;
                                    }}
                                    className={`absolute inset-0 flex flex-col justify-end p-8 lg:p-12`}
                                >
                                    <p className="text-white/80 text-lg lg:text-xl mb-2">
                                        {scene.description}
                                    </p>
                                    <h3 className="text-white text-4xl lg:text-6xl font-bold">
                                        {scene.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        className="mt-12 relative bg-white rounded-2xl p-8 lg:p-12 shadow-2xl border-2 border-green-200">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/30 to-transparent animate-shimmer"/>
                        </div>

                        <div className="relative z-10">
                            <p className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                                É isso que você aluga
                            </p>
                            <p className="text-xl text-gray-700">
                                Não é só uma mesa. É tradição, conexão, memórias que sua família vai lembrar pra sempre.
                            </p>
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