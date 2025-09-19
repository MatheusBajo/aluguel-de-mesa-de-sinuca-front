// src/components/sections/Testimonials.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Home, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: '1',
            name: 'Carlos Eduardo',
            role: 'Morador Vila Mariana',
            content: 'Melhor decisão! Dividi com 3 amigos, fica R$ 62 cada. Mesa chegou rápido, montaram tudo certinho. Toda sexta a galera vem aqui pra casa jogar.',
            rating: 5,
            location: 'São Paulo - SP',
            type: 'pf' as const,
            highlight: 'Dividindo com amigos',
            months: '8 meses alugando'
        },
        {
            id: '2',
            name: 'Patricia Santos',
            role: 'Síndica Condomínio Jardins',
            content: 'Transformou nossa área de lazer! Os moradores usam todos os dias. A manutenção que eles fazem mantém a mesa sempre em ordem. Vale cada centavo.',
            rating: 5,
            location: 'São Paulo - SP',
            type: 'pj' as const,
            highlight: 'Manutenção inclusa',
            months: '1 ano e 3 meses'
        },
        {
            id: '3',
            name: 'Roberto Lima',
            role: 'Empresário',
            content: 'Instalei na área de descompressão da empresa. O pessoal adora, melhorou o clima. Quando precisamos trocar por uma maior, foi super tranquilo.',
            rating: 5,
            location: 'Sorocaba - SP',
            type: 'pj' as const,
            highlight: 'Flexibilidade pra trocar',
            months: '6 meses alugando'
        },
        {
            id: '4',
            name: 'Ana Clara',
            role: 'Moradora Brooklin',
            content: 'Meu marido sempre quis uma mesa mas eu tinha medo do investimento. Com o aluguel, testamos e adoramos! Agora é o point da família nos finais de semana.',
            rating: 5,
            location: 'São Paulo - SP',
            type: 'pf' as const,
            highlight: 'Teste antes de comprar',
            months: '4 meses alugando'
        },
        {
            id: '5',
            name: 'Fernando Oliveira',
            role: 'Dono de Bar',
            content: 'Alugo 3 mesas para meu bar. Muito melhor que comprar! Eles cuidam de toda manutenção, e se uma mesa dá problema, resolvem rápido. Excelente!',
            rating: 5,
            location: 'Grande São Paulo',
            type: 'pj' as const,
            highlight: 'Suporte comercial',
            months: '2 anos alugando'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Clientes <span className="text-primary-600">Satisfeitos</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Veja o que nossos clientes têm a dizer sobre a experiência
                        de alugar uma mesa de sinuca conosco.
                    </p>
                </motion.div>

                {/* Main Testimonial Carousel */}
                <div className="max-w-4xl mx-auto mb-16">
                    <Card className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[currentIndex].id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="p-8 md:p-12"
                            >
                                {/* Quote Icon */}
                                <div className="text-6xl text-primary-100 mb-4">&ldquo;</div>

                                {/* Content */}
                                <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                                    {testimonials[currentIndex].content}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl">
                                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                {testimonials[currentIndex].role}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge variant="secondary" className="text-xs">
                                                    {testimonials[currentIndex].type === 'pf' ? (
                                                        <><Home className="w-3 h-3 mr-1" /> Residencial</>
                                                    ) : (
                                                        <><Building className="w-3 h-3 mr-1" /> Empresarial</>
                                                    )}
                                                </Badge>
                                                <span className="text-xs text-gray-500">
                                                    {testimonials[currentIndex].months}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        {/* Highlight */}
                                        <Badge className="bg-green-100 text-green-700 border-green-200">
                                            ✓ {testimonials[currentIndex].highlight}
                                        </Badge>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation - POSIÇÃO ORIGINAL */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </Card>

                    {/* Dots Indicator - FORA DO CARD */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentIndex ? 'w-8 bg-primary-600' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}