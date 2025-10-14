// src/components/sections/SeeInAction.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const contextImages = [
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background.jpeg', alt: 'Mesa em uso - ambiente 1' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background-01.jpeg', alt: 'Mesa em uso - ambiente 2' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background-04.jpeg', alt: 'Mesa em uso - ambiente 3' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/fotos-background/16x9-mesa-de-sinuca-background-05.jpeg', alt: 'Mesa em uso - ambiente 4' }
];

export function SeeInAction() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number>();
    const scrollPositionRef = useRef(0);
    const isPausedRef = useRef(false);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const longPressTimerRef = useRef<NodeJS.Timeout>();
    const hasMovedRef = useRef(false);
    const wasLongPressRef = useRef(false);

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(0);

    const scrollSpeed = 0.5;

    // Gerenciar histórico do navegador
    useEffect(() => {
        if (isLightboxOpen) {
            window.history.pushState({ lightbox: true }, '');

            const handlePopState = () => {
                setIsLightboxOpen(false);
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [isLightboxOpen]);

    // Prevenir scroll quando lightbox aberto
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLightboxOpen]);

    const closeLightbox = () => {
        if (window.history.state?.lightbox) {
            window.history.back();
        } else {
            setIsLightboxOpen(false);
        }
    };

    const openLightbox = (index: number) => {
        setLightboxImage(index % contextImages.length);
        setIsLightboxOpen(true);
    };

    // Auto scroll
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            if (!isPausedRef.current && !isDraggingRef.current) {
                scrollPositionRef.current += scrollSpeed;

                const maxScroll = scrollContainer.scrollWidth / 2;

                if (scrollPositionRef.current >= maxScroll) {
                    scrollPositionRef.current = 0;
                }

                scrollContainer.scrollLeft = scrollPositionRef.current;
            }

            animationFrameRef.current = requestAnimationFrame(scroll);
        };

        animationFrameRef.current = requestAnimationFrame(scroll);

        // Pausa no hover (desktop)
        const handleMouseEnter = () => {
            isPausedRef.current = true;
        };

        const handleMouseLeave = () => {
            isPausedRef.current = false;
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Drag handlers (desktop e mobile)
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        isDraggingRef.current = true;
        hasMovedRef.current = false;
        wasLongPressRef.current = false;

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        startXRef.current = pageX - scrollContainer.offsetLeft;
        scrollLeftRef.current = scrollContainer.scrollLeft;

        // Long press no mobile
        if ('touches' in e) {
            longPressTimerRef.current = setTimeout(() => {
                isPausedRef.current = true;
                wasLongPressRef.current = true;
            }, 500); // 500ms = long press
        }
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDraggingRef.current) return;

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        const x = pageX - scrollContainer.offsetLeft;
        const distance = Math.abs(x - startXRef.current);

        // Se mexeu mais de 5px, considera como drag
        if (distance > 5) {
            hasMovedRef.current = true;

            // Prevenir scroll do body
            e.preventDefault();

            const walk = (x - startXRef.current) * 1;
            scrollContainer.scrollLeft = scrollLeftRef.current - walk;
            scrollPositionRef.current = scrollContainer.scrollLeft;

            // Cancelar long press se arrastar
            if (longPressTimerRef.current) {
                clearTimeout(longPressTimerRef.current);
                wasLongPressRef.current = false;
            }
        }
    };

    const handleDragEnd = () => {
        isDraggingRef.current = false;

        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
        }

        // Reset após um delay pra não conflitar com click
        setTimeout(() => {
            hasMovedRef.current = false;
            wasLongPressRef.current = false;
        }, 100);
    };

    const handleImageClick = (index: number, e: React.MouseEvent) => {
        // Só abre se não foi drag nem long press
        if (!hasMovedRef.current && !wasLongPressRef.current) {
            e.stopPropagation();
            openLightbox(index);
        }
    };

    // Click fora retoma (mobile)
    const handleClickOutside = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            isPausedRef.current = false;
        }
    };

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
                className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-y' // Só permite scroll vertical, previne horizontal do body
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onClick={handleClickOutside}
            >
                {/* Duplicamos as imagens pra criar efeito infinito sem gaps */}
                {[...contextImages, ...contextImages].map((img, idx) => (
                    <motion.button
                        key={idx}
                        onClick={(e) => handleImageClick(idx, e)}
                        className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover pointer-events-none"
                            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1280px) 45vw, 35vw"
                            draggable={false}
                        />

                        {/* Overlay com hint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                Clique para ampliar
                            </span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Dica */}
            <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                    💡 Arraste pra controlar • Pressione e segure pra pausar (mobile)
                </p>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Botão fechar */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
                            aria-label="Fechar"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Imagem */}
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full h-full max-w-6xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={contextImages[lightboxImage].src}
                                alt={contextImages[lightboxImage].alt}
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>

                        {/* Label */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm backdrop-blur-sm bg-black/50 px-4 py-2 rounded-full">
                            {contextImages[lightboxImage].alt}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                /* Remove scrollbar em todos browsers */
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <style jsx global>{`
                /* Previne scroll horizontal no body (iOS fix) */
                html, body {
                    overflow-x: hidden;
                    overscroll-behavior-x: none;
                }
            `}</style>
        </section>
    );
}