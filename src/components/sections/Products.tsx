// src/components/sections/Products.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { getEnabledProducts } from '@/lib/site-config';

const productImages = [
    { src: '/produto/01-frontal-mesa-de-sinuca.png', alt: 'Vista frontal' },
    { src: '/produto/02-lateral-01-mesa-de-sinuca.png', alt: 'Vista lateral' },
    { src: '/produto/04-diagonal-45-mesa-de-sinuca.png', alt: 'Vista diagonal' },
    { src: '/produto/mesa-de-sinuca-fundo.png', alt: 'Mesa completa', is9x16: true }
];

export function Products() {
    const products = getEnabledProducts();
    const [currentImage, setCurrentImage] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);

    if (products.length === 0) return null;

    const currentProduct = products[0];
    const currentImg = productImages[currentImage];

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % productImages.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);

    // Swipe handlers para mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentTouch = e.targetTouches[0].clientX;
        setTouchEnd(currentTouch);

        // Calcula offset do arrasto com resistance nas bordas
        let offset = currentTouch - touchStart;

        // Adiciona resistência quando tenta arrastar além dos limites
        if ((currentImage === 0 && offset > 0) ||
            (currentImage === productImages.length - 1 && offset < 0)) {
            offset = offset * 0.3; // 30% de resistência
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
                nextImage();
            } else {
                prevImage();
            }
        }

        // Reset
        setIsDragging(false);
        setDragOffset(0);
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section id="mesas" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Nossa <span className="text-[var(--color-brand-green)]">Mesa</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tamanho ideal pra maioria das casas. Profissional, revisada, pronta pra usar.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Carrossel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass relative rounded-2xl overflow-hidden shadow-xl">
                            {/* Container com animação de arrasto */}
                            <motion.div
                                className="aspect-video relative cursor-grab active:cursor-grabbing select-none"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                animate={{
                                    x: isDragging ? dragOffset * 0.8 : 0, // Arrasto suavizado
                                    scale: isDragging ? 0.98 : 1, // Scale leve ao arrastar
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                {/* AnimatePresence para transição suave entre imagens */}
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={currentImage}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        {currentImg.is9x16 && (
                                            <div className="absolute inset-0">
                                                <Image
                                                    src={currentImg.src}
                                                    alt="Background blur"
                                                    fill
                                                    className="object-cover blur-xl scale-110 opacity-50"
                                                />
                                            </div>
                                        )}
                                        <Image
                                            src={currentImg.src}
                                            alt={currentImg.alt}
                                            fill
                                            className={`relative z-10 ${currentImg.is9x16 ? 'object-contain' : 'object-cover'}`}
                                            priority={currentImage === 0}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                <Badge className="absolute top-4 left-4 bg-[var(--color-brand-green)] text-white z-20 border-0 backdrop-blur-md">
                                    {currentProduct.badge}
                                </Badge>
                            </motion.div>

                            {/* Navegação */}
                            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 z-20">
                                <motion.button
                                    onClick={prevImage}
                                    className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                                    aria-label="Imagem anterior"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        opacity: isDragging && dragOffset > 20 ? 1 : 0.7
                                    }}
                                >
                                    <ChevronLeft className="w-6 h-6 text-foreground" />
                                </motion.button>

                                {/* Dots com animação */}
                                <div className="flex gap-2">
                                    {productImages.map((_, i) => (
                                        <motion.button
                                            key={i}
                                            onClick={() => setCurrentImage(i)}
                                            className={`h-2 rounded-full transition-all ${
                                                i === currentImage
                                                    ? 'w-8 bg-[var(--color-brand-green)]'
                                                    : 'w-2 bg-muted'
                                            }`}
                                            aria-label={`Ver imagem ${i + 1}`}
                                            animate={{
                                                scale: i === currentImage ? [1, 1.2, 1] : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ))}
                                </div>

                                <motion.button
                                    onClick={nextImage}
                                    className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                                    aria-label="Próxima imagem"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        opacity: isDragging && dragOffset < -20 ? 1 : 0.7
                                    }}
                                >
                                    <ChevronRight className="w-6 h-6 text-foreground" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Detalhes */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-foreground mb-4">
                                {currentProduct.name}
                            </h3>

                            {/* Badges coloridos com glassmorphism */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                {/* Badge de dimensões - Azul pastel */}
                                <div className="backdrop-blur-[2px] inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-400/40 dark:bg-blue-500/40 border border-blue-400/50 dark:border-blue-500/50">
                                    <Maximize2 className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                                    <span className="font-bold text-foreground">{currentProduct.size}</span>
                                </div>

                                {/* Badge de uso - Verde pastel */}
                                <div className="backdrop-blur-[2px] inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400/40 dark:bg-emerald-500/40 border border-emerald-400/50 dark:border-emerald-500/50">
                                    <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-300" />
                                    <span className="font-medium text-foreground">{currentProduct.idealFor}</span>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="font-bold text-foreground mb-3">O que inclui:</h4>
                            <ul className="space-y-2">
                                {currentProduct.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[var(--color-brand-green)] mt-1">✓</span>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Espaços com badges coloridos */}
                        <div className="mb-8">
                            <h4 className="font-bold text-foreground mb-3">Onde fica bem:</h4>
                            <div className="flex flex-wrap gap-2">
                                {currentProduct.spaces.map((space, i) => {
                                    // Cores pastel diferentes para cada espaço
                                    const colors = [
                                        'backdrop-blur-[2px] bg-purple-400/40 dark:bg-purple-500/40 border border-purple-400/50 dark:border-purple-500/50 text-purple-700 dark:text-purple-300',
                                        'backdrop-blur-[2px] bg-orange-400/40 dark:bg-orange-500/40 border border-orange-400/50 dark:border-orange-500/50 text-orange-700 dark:text-orange-300',
                                        'backdrop-blur-[2px] bg-pink-400/40 dark:bg-pink-500/40 border border-pink-400/50 dark:border-pink-500/50 text-pink-700 dark:text-pink-300'
                                    ];
                                    return (
                                        <div
                                            key={i}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${colors[i % colors.length]}`}
                                        >
                                            {space}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Preço */}
                        <Card className="glass-gradient p-6 mb-6 border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Aluguel mensal</p>
                                    <p className="text-3xl font-bold text-foreground">
                                        R$ {currentProduct.monthlyPrice}
                                        <span className="text-lg font-normal text-muted-foreground">/mês</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Contrato mínimo 6 meses
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* CTA */}
                        <WhatsAppButton
                            variant="hero"
                            message="Oi! Quero alugar a mesa de sinuca. Pode me passar mais detalhes?"
                            className="w-full justify-center bg-[var(--color-brand-green)] hover:bg-[#047857]"
                        >
                            Quero Alugar
                        </WhatsAppButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}