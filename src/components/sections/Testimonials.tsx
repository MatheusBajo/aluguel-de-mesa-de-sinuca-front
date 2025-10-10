// src/components/sections/Testimonials.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS } from '@/lib/site-config';

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentTouch = e.targetTouches[0].clientX;
        setTouchEnd(currentTouch);

        let offset = currentTouch - touchStart;

        // Resistência nas bordas
        if ((currentIndex === 0 && offset > 0) ||
            (currentIndex === TESTIMONIALS.length - 1 && offset < 0)) {
            offset = offset * 0.3;
        }

        setDragOffset(offset);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setIsDragging(false);
            setDragOffset(0);
            return;
        }

        const distance = touchStart - touchEnd;
        const threshold = 75;

        if (Math.abs(distance) > threshold) {
            if (distance > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        }

        setIsDragging(false);
        setDragOffset(0);
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section id="depoimentos" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        O Que Nossos <span className="text-[var(--color-brand-green)]">Clientes</span> Falam
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Depoimentos reais de quem alugou e não se arrepende
                    </p>
                </motion.div>

                {/* Main Carousel */}
                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        className="relative"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        animate={{
                            x: isDragging ? dragOffset * 0.8 : 0,
                            scale: isDragging ? 0.98 : 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        <Card className="glass-gradient relative overflow-hidden border-border">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={TESTIMONIALS[currentIndex].id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="p-8 md:p-12"
                                >
                                    {/* Quote icon */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-full bg-[var(--color-brand-green)]/10">
                                            <Quote className="w-8 h-8 text-[var(--color-brand-green)]" />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)]" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                                        "{TESTIMONIALS[currentIndex].content}"
                                    </p>

                                    {/* Author info */}
                                    <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border">
                                        <div className="flex items-center gap-4">
                                            {/* Avatar placeholder */}
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-brand-green)] to-[var(--color-brand-yellow)] flex items-center justify-center text-white font-bold text-lg">
                                                {TESTIMONIALS[currentIndex].name.charAt(0)}
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-foreground text-lg">
                                                    {TESTIMONIALS[currentIndex].name}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {TESTIMONIALS[currentIndex].location}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-2">
                                            <Badge className="backdrop-blur-[2px] bg-[var(--color-brand-green)]/20 dark:bg-[var(--color-brand-green)]/30 text-[var(--color-brand-green)] border border-[var(--color-brand-green)]/30">
                                                ✓ {TESTIMONIALS[currentIndex].highlight}
                                            </Badge>
                                            <p className="text-xs text-muted-foreground">
                                                {TESTIMONIALS[currentIndex].months}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation buttons */}
                            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                                <motion.button
                                    onClick={prevTestimonial}
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-all border-border"
                                    aria-label="Depoimento anterior"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        opacity: isDragging && dragOffset > 20 ? 1 : 0.7
                                    }}
                                >
                                    <ChevronLeft className="w-5 h-5 text-foreground" />
                                </motion.button>
                                <motion.button
                                    onClick={nextTestimonial}
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-all border-border"
                                    aria-label="Próximo depoimento"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        opacity: isDragging && dragOffset < -20 ? 1 : 0.7
                                    }}
                                >
                                    <ChevronRight className="w-5 h-5 text-foreground" />
                                </motion.button>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {TESTIMONIALS.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentIndex
                                        ? 'w-8 bg-[var(--color-brand-green)]'
                                        : 'w-2 bg-muted'
                                }`}
                                aria-label={`Ver depoimento ${index + 1}`}
                                animate={{
                                    scale: index === currentIndex ? [1, 1.2, 1] : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}