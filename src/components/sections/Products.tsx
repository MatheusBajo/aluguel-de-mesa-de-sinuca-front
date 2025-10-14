// src/components/sections/Products.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { getEnabledProducts } from '@/lib/site-config';

const productImages = [
    { src: '/images/produtos/mesa-de-sinuca-padrao/16x09-01-frontal-mesa-de-sinuca.png', alt: 'Vista frontal' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/16x09-02-lateral-01-mesa-de-sinuca.png', alt: 'Vista lateral' },
    { src: '/images/produtos/mesa-de-sinuca-padrao/16x09-04-diagonal-45-mesa-de-sinuca.png', alt: 'Vista diagonal' }
];

export function Products() {
    const products = getEnabledProducts();
    const [currentImage, setCurrentImage] = useState(0);

    if (products.length === 0) return null;

    const currentProduct = products[0];

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
                    {/* Galeria com Thumbnails */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Imagem Principal */}
                        <div className="glass relative rounded-2xl overflow-hidden shadow-xl mb-4">
                            <div className="aspect-video relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImage}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={productImages[currentImage].src}
                                            alt={productImages[currentImage].alt}
                                            fill
                                            className="object-cover"
                                            priority={currentImage === 0}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                <Badge className="absolute top-4 left-4 bg-[var(--color-brand-green)] text-white z-10 border-0 backdrop-blur-md">
                                    {currentProduct.badge}
                                </Badge>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-3 gap-3">
                            {productImages.map((img, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${
                                        idx === currentImage
                                            ? 'ring-4 ring-[var(--color-brand-green)] scale-105'
                                            : 'ring-2 ring-muted hover:ring-muted-foreground/50'
                                    }`}
                                    whileHover={{ scale: idx === currentImage ? 1.05 : 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className={`object-cover transition-all ${
                                            idx === currentImage ? '' : 'opacity-60 hover:opacity-100'
                                        }`}
                                    />

                                    {/* Overlay quando não selecionado */}
                                    {idx !== currentImage && (
                                        <div className="absolute inset-0 bg-black/20" />
                                    )}

                                    {/* Label */}
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <span className="text-xs font-medium text-white drop-shadow-lg">
                                            {img.alt}
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
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