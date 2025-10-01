// src/components/sections/Products.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { getEnabledProducts } from '@/lib/site-config';

const productImages = [
    { src: '/01-frontal-mesa-de-sinuca.png', alt: 'Vista frontal' },
    { src: '/02-lateral-01-mesa-de-sinuca.png', alt: 'Vista lateral' },
    { src: '/04-diagonal-45-mesa-de-sinuca.png', alt: 'Vista diagonal' },
    { src: '/mesa-de-sinuca-fundo.png', alt: 'Mesa completa', is9x16: true }
];

export function Products() {
    const products = getEnabledProducts();
    const [currentImage, setCurrentImage] = useState(0);

    if (products.length === 0) {
        return null;
    }

    const currentProduct = products[0];
    const currentImg = productImages[currentImage];

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % productImages.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);

    return (
        <section id="mesas" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Nossa <span className="text-primary-600">Mesa</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tamanho ideal pra maioria das casas. Profissional, revisada, pronta pra usar.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Carrossel de Imagens */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
                            <div className="aspect-video relative">
                                {/* Se for 9:16, adiciona blur de fundo */}
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

                                {/* Imagem principal */}
                                <Image
                                    src={currentImg.src}
                                    alt={currentImg.alt}
                                    fill
                                    className={`relative z-10 ${currentImg.is9x16 ? 'object-contain' : 'object-cover'}`}
                                    priority={currentImage === 0}
                                />

                                <Badge className="absolute top-4 left-4 bg-blue-500 text-white z-20">
                                    {currentProduct.badge}
                                </Badge>
                            </div>

                            {/* Navegação */}
                            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 z-20">
                                <button
                                    onClick={prevImage}
                                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all"
                                    aria-label="Imagem anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {productImages.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImage(i)}
                                            className={`h-2 rounded-full transition-all ${
                                                i === currentImage ? 'w-8 bg-primary-600' : 'w-2 bg-white/60'
                                            }`}
                                            aria-label={`Ver imagem ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextImage}
                                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all"
                                    aria-label="Próxima imagem"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
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
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {currentProduct.name}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600">
                                <span className="flex items-center gap-1">
                                    <Maximize2 className="w-4 h-4" />
                                    {currentProduct.size}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Home className="w-4 h-4" />
                                    {currentProduct.idealFor}
                                </span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-3">O que inclui:</h4>
                            <ul className="space-y-2">
                                {currentProduct.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Espaços ideais */}
                        <div className="mb-8">
                            <h4 className="font-bold text-gray-900 mb-3">Onde fica bem:</h4>
                            <div className="flex flex-wrap gap-2">
                                {currentProduct.spaces.map((space, i) => (
                                    <Badge key={i} variant="secondary">
                                        {space}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Preço */}
                        <Card className="p-6 bg-gradient-to-r from-blue-50 to-orange-50 mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Aluguel mensal</p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        R$ {currentProduct.monthlyPrice}
                                        <span className="text-lg font-normal text-gray-600">/mês</span>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Contrato mínimo 6 meses
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* CTA */}
                        <WhatsAppButton
                            variant="hero"
                            message={`Oi! Quero alugar a mesa de sinuca. Pode me passar mais detalhes?`}
                            className="w-full justify-center"
                        >
                            Quero Alugar
                        </WhatsAppButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}