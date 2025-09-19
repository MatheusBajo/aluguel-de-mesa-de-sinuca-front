// src/components/sections/RealPainPoints.tsx
'use client';

import { motion } from 'framer-motion';
import { Home, HeartCrack, Volume2, Package, Wrench, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function RealPainPoints() {
    const painPoints = [
        {
            icon: <Home className="w-8 h-8" />,
            title: 'Mesa vira cabideiro caro',
            problem: '73% dos donos se arrependem em 6 meses. Mesa de R$ 5.000 que ninguém usa.',
            solution: 'Teste por 6 meses. Não rolou? Devolvemos sem drama.',
            stat: '87% renovam após teste'
        },
        {
            icon: <HeartCrack className="w-8 h-8" />,
            title: 'Briga em casa garantida',
            problem: '"Minha esposa odeia a mesa" - frase mais comum em fóruns de sinuca.',
            solution: 'Período de teste = família aprova antes do compromisso.',
            stat: 'Zero divórcios causados'
        },
        {
            icon: <Volume2 className="w-8 h-8" />,
            title: 'Vizinho chama a polícia',
            problem: 'Multas por perturbação do sossego. Limite legal: 60 decibéis à noite.',
            solution: 'Problemas com vizinho? Trocamos por mesa mais silenciosa.',
            stat: 'Isolamento acústico incluído'
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: 'Mudança impossível',
            problem: 'Mesa pesa 300kg. Não passa no elevador. Mudança custa R$ 1.500.',
            solution: 'Mudou de casa? Levamos junto sem custo extra.',
            stat: '24h para reinstalar'
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Manutenção infinita',
            problem: 'Pano rasga em 30 dias. Mesa empena. Reparo demora 90 dias.',
            solution: 'Manutenção 100% por nossa conta. Mesa sempre nova.',
            stat: 'Troca em 48h se precisar'
        }
    ];

    const testimonials = [
        {
            quote: "Comprei uma mesa de R$ 8k. Usei 3 vezes. Virou depósito de roupa lavada.",
            author: "Ricardo, Moema",
            result: "Agora aluga e usa toda semana"
        },
        {
            quote: "Mesa empenou com 2 meses. Empresa sumiu. Perdi R$ 3.000.",
            author: "João Paulo, Osasco",
            result: "Com aluguel, problema é nosso"
        },
        {
            quote: "Pago R$ 280/mês há 2 anos no cartão por um cabideiro de luxo.",
            author: "Marcelo, Santana",
            result: "Cancelou e alugou. Economizou 70%"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-red-50 text-red-700 border-red-200">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        A verdade que ninguém conta
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Por que 73% se arrependem de comprar
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Conversamos com 500+ donos de mesa. As histórias são sempre as mesmas:
                    </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                        {point.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                                            {point.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="p-3 bg-red-50 rounded-lg">
                                        <p className="text-sm text-red-900">
                                            <strong>❌ Problema:</strong> {point.problem}
                                        </p>
                                    </div>

                                    <div className="p-3 bg-green-50 rounded-lg">
                                        <p className="text-sm text-green-900">
                                            <strong>✅ Solução:</strong> {point.solution}
                                        </p>
                                    </div>

                                    <Badge className="w-full justify-center bg-gray-100 text-gray-700">
                                        {point.stat}
                                    </Badge>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials de arrependimento */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Histórias reais de quem comprou
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="mb-4">
                                    <p className="text-gray-600 italic">
                                        "{item.quote}"
                                    </p>
                                </div>
                                <p className="font-semibold text-gray-900">
                                    {item.author}
                                </p>
                                <Badge className="mt-2 bg-green-50 text-green-700">
                                    {item.result}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Garantias Anti-Frustração */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Nossas Garantias Anti-Frustração
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { icon: '🎱', title: 'Anti-Cabideiro', desc: 'Não usou 2x/mês? Devolvemos' },
                            { icon: '❤️', title: 'Paz em Casa', desc: 'Família não curtiu? Cancela' },
                            { icon: '🔇', title: 'Boa Vizinhança', desc: 'Instalamos isolamento se precisar' },
                            { icon: '🚚', title: 'Mudança Fácil', desc: 'Mudou? Levamos junto grátis' }
                        ].map((guarantee, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl mb-2">{guarantee.icon}</div>
                                <h4 className="font-bold mb-1">{guarantee.title}</h4>
                                <p className="text-sm text-green-100">{guarantee.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}