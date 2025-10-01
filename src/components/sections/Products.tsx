// src/components/sections/Products.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Users, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { getEnabledProducts } from '@/lib/site-config';

export function Products() {
    const products = getEnabledProducts(); // ← Puxa só produtos habilitados
    const [selectedProduct, setSelectedProduct] = useState(0);

    // Se não tem produtos habilitados, não renderiza nada
    if (products.length === 0) {
        return null;
    }

    const currentProduct = products[selectedProduct];

    return (
        <section id="mesas" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {products.length > 1 ? 'Escolha sua ' : 'Nossa '}
                        <span className="text-primary-600">Mesa Ideal</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {products.length > 1
                            ? 'Temos o tamanho certo pro seu espaço.'
                            : 'Mesa profissional em perfeito estado.'
                        } Todas revisadas e certificadas.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Product Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentProduct.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="aspect-video relative"
                                >
                                    <Image
                                        src={currentProduct.image}
                                        alt={currentProduct.name}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                        priority={selectedProduct === 0}
                                    />

                                    {/* Badge */}
                                    <Badge className="absolute top-4 left-4 bg-blue-500 text-white">
                                        {currentProduct.badge}
                                    </Badge>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation - só aparece se tiver mais de 1 produto */}
                            {products.length > 1 && (
                                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4">
                                    <button
                                        onClick={() => setSelectedProduct((prev) => (prev - 1 + products.length) % products.length)}
                                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    {/* Dots */}
                                    <div className="flex gap-2">
                                        {products.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-2 rounded-full transition-all ${
                                                    i === selectedProduct ? 'w-8 bg-primary-600' : 'w-2 bg-white/60'
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedProduct((prev) => (prev + 1) % products.length)}
                                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Details */}
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
                                    {currentProduct.type === 'pf' ?
                                        <Home className="w-4 h-4" /> :
                                        <Users className="w-4 h-4" />
                                    }
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

                        {/* Ideal Spaces */}
                        <div className="mb-8">
                            <h4 className="font-bold text-gray-900 mb-3">Ideal para:</h4>
                            <div className="flex flex-wrap gap-2">
                                {currentProduct.spaces.map((space, i) => (
                                    <Badge key={i} variant="secondary">
                                        {space}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Price */}
                        <Card className="p-6 bg-gradient-to-r from-blue-50 to-orange-50 mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Aluguel mensal</p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        R$ {currentProduct.monthlyPrice}
                                        <span className="text-lg font-normal text-gray-600">/mês</span>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Contrato mínimo 6 meses + Taxa de Entrega</p>
                                </div>
                            </div>
                        </Card>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <WhatsAppButton
                                variant="hero"
                                message={`Olá! Tenho interesse na ${currentProduct.name} (${currentProduct.size}). Pode me passar mais informações?`}
                                className="flex-1 justify-center"
                            >
                                Quero Esta Mesa
                            </WhatsAppButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}