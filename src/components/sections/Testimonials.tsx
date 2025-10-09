// src/components/sections/Testimonials.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TESTIMONIALS = [
    {
        id: '1',
        name: 'Carlos Eduardo',
        location: 'Vila Mariana',
        months: '8 meses',
        text: 'Minha esposa zuava que ia virar cabideiro. Hoje ela joga melhor que eu e fica pistola quando perco de propósito kkkk',
        highlight: 'Família jogando junto',
        rating: 5
    },
    {
        id: '2',
        name: 'Marcão',
        location: 'Santo André',
        months: '1 ano',
        text: 'Todo final de semana tem torneio aqui em casa. Virei o salão oficial da turma. Melhor investimento que já fiz',
        highlight: 'Casa virou point',
        rating: 5
    },
    {
        id: '3',
        name: 'Fernando',
        location: 'Pinheiros',
        months: '4 meses',
        text: 'Pensei que ia usar 3x no máximo. Uso todo dia antes do trampo pra relaxar. Virou terapia',
        highlight: 'Uso diário',
        rating: 5
    },
    {
        id: '4',
        name: 'Junior',
        location: 'Guarulhos',
        months: '6 meses',
        text: 'Meu sogro era contra a mesa. Agora ele vem aqui direto com os amigos dele jogar kkkkkk',
        highlight: 'Convenceu até o sogro',
        rating: 5
    },
    {
        id: '5',
        name: 'Rodrigo',
        location: 'São Bernardo',
        months: '10 meses',
        text: 'Achei que ia enjoar rápido. Criei um grupo no zap só pra marcar as partidas. Tem fila de espera',
        highlight: 'Grupo dedicado',
        rating: 5
    },
    {
        id: '6',
        name: 'Thiago',
        location: 'Moema',
        months: '5 meses',
        text: 'Antes o churrasco acabava cedo e todo mundo ia embora. Agora o pessoal fica jogando até dar horário. Ninguém quer ir embora',
        highlight: 'Churrasco épico',
        rating: 5
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
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
                        O Que Nossos <span className="text-primary-600">Clientes</span> Falam
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Depoimentos reais de quem alugou e não se arrepende
                    </p>
                </motion.div>

                {/* Main Carousel */}
                <div className="max-w-4xl mx-auto mb-16">
                    <Card className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={TESTIMONIALS[currentIndex].id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="p-8 md:p-12"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                                    "{TESTIMONIALS[currentIndex].text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">
                                            {TESTIMONIALS[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {TESTIMONIALS[currentIndex].location}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {TESTIMONIALS[currentIndex].months}
                                        </p>
                                    </div>

                                    <Badge className="bg-green-100 text-green-700 border-green-200">
                                        ✓ {TESTIMONIALS[currentIndex].highlight}
                                    </Badge>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                aria-label="Depoimento anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                aria-label="Próximo depoimento"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </Card>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentIndex ? 'w-8 bg-primary-600' : 'bg-gray-300'
                                }`}
                                aria-label={`Ver depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}