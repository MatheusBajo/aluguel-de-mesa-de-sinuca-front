// src/components/sections/Benefits.tsx
'use client';

import { motion } from 'framer-motion';
import {
    TrendingDown,
    Shield,
    Zap,
    HeartHandshake,
    Calendar,
    Wrench
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Benefits() {
    const benefits = [
        {
            icon: <TrendingDown className="w-8 h-8" />,
            title: 'Economia Garantida',
            description: 'Até 70% mais barato que comprar. Sem investimento inicial alto.',
            highlight: '70% de economia',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Zero Burocracia',
            description: 'Sem consulta SPC, sem fiador, sem caução. Contrato 100% digital.',
            highlight: 'Aprovação imediata',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Entrega Relâmpago',
            description: 'Mesa montada e pronta em até 24h após aprovação.',
            highlight: 'Em 24 horas',
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-50'
        },
        {
            icon: <HeartHandshake className="w-8 h-8" />,
            title: 'Suporte Vitalício',
            description: 'Manutenção, ajustes e trocas inclusos. Você só se preocupa em jogar.',
            highlight: 'Suporte total',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: 'Flexibilidade Total',
            description: 'Cancele quando quiser com 30 dias de aviso. Sem multas abusivas.',
            highlight: 'Sem amarras',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Qualidade Certificada',
            description: 'Mesas profissionais revisadas e certificadas. Garantia de desempenho.',
            highlight: 'Certificadas',
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50'
        }
    ];

    return (
        <section id="beneficios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Por que <span className="text-primary-600">Alugar</span> é Melhor?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comparamos com a compra e não tem discussão:
                        alugar é mais inteligente em todos os aspectos.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className={`w-16 h-16 rounded-xl ${benefit.bgColor} ${benefit.color} flex items-center justify-center mb-4`}>
                                    {benefit.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {benefit.description}
                                </p>

                                <div className={`inline-flex items-center px-3 py-1 rounded-full ${benefit.bgColor}`}>
                  <span className={`text-sm font-bold ${benefit.color}`}>
                    {benefit.highlight}
                  </span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Card className="overflow-hidden">
                        <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                            {/* Header */}
                            <div className="p-6 bg-gray-50">
                                <h3 className="font-bold text-lg text-gray-900">Compare e Decida</h3>
                            </div>
                            <div className="p-6 bg-red-50 text-center">
                                <h4 className="font-bold text-lg text-red-600">❌ Comprar</h4>
                            </div>
                            <div className="p-6 bg-green-50 text-center">
                                <h4 className="font-bold text-lg text-green-600">✅ Alugar Conosco</h4>
                            </div>

                            {/* Rows */}
                            {[
                                { label: 'Investimento inicial', buy: 'R$ 3.000 - R$ 15.000', rent: 'R$ 250/mês' },
                                { label: 'Entrega e montagem', buy: 'R$ 300 - R$ 500', rent: 'Incluso' },
                                { label: 'Manutenção', buy: 'R$ 200-400/ano', rent: 'Grátis sempre' },
                                { label: 'Garantia', buy: '6 meses - 1 ano', rent: 'Enquanto alugar' },
                                { label: 'Flexibilidade', buy: 'Vender é difícil', rent: 'Cancele quando quiser' },
                                { label: 'Risco', buy: 'Mesa pode estragar', rent: 'Trocamos se precisar' },
                            ].map((row, i) => (
                                <div key={i} className="contents">
                                    <div className="p-4 border-t">
                                        <span className="text-sm font-medium text-gray-700">{row.label}</span>
                                    </div>
                                    <div className="p-4 border-t text-center">
                                        <span className="text-sm text-gray-600">{row.buy}</span>
                                    </div>
                                    <div className="p-4 border-t text-center bg-green-50/50">
                                        <span className="text-sm font-medium text-green-700">{row.rent}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}