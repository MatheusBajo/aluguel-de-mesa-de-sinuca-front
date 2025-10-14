// src/components/sections/SeeInAction.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const contextImages = [
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background.jpeg', alt: 'Mesa em uso - ambiente 1' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background-01.jpeg', alt: 'Mesa em uso - ambiente 2' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background-04.jpeg', alt: 'Mesa em uso - ambiente 3' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background-05.jpeg', alt: 'Mesa em uso - ambiente 4' }
];

export function SeeInAction() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = 0;
        const scrollSpeed = 0.5; // pixels por frame (ajuste pra mais rápido/devagar)

        const scroll = () => {
            scrollPosition += scrollSpeed;

            // Quando scrollar o width de todas as imagens, volta pro início
            // Duplicamos as imagens no JSX, então quando chegar na metade, reseta
            const maxScroll = scrollContainer.scrollWidth / 2;

            if (scrollPosition >= maxScroll) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        // Pausa no hover
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationFrameId);
        };

        const handleMouseLeave = () => {
            animationFrameId = requestAnimationFrame(scroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="py-20 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Veja a Mesa <span className="text-[var(--color-brand-green)]">em Ação</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Como a mesa transforma os espaços e cria momentos inesquecíveis
                    </p>
                </motion.div>
            </div>

            {/* Slider Infinito */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {/* Duplicamos as imagens pra criar efeito infinito sem gaps */}
                {[...contextImages, ...contextImages].map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] aspect-video rounded-2xl overflow-hidden shadow-xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1280px) 45vw, 35vw"
                        />

                        {/* Overlay suave */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>

            {/* Dica de hover (opcional) */}
            <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                    💡 Passe o mouse pra pausar o carrossel
                </p>
            </div>

            <style jsx>{`
                /* Remove scrollbar em todos browsers */
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}