// src/components/sections/Benefits.tsx
'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Home,
    TestTube,
    Wrench,
    Calendar,
    Heart
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Benefits() {
    const benefits = [
        {
            icon: <TestTube className="w-8 h-8" />,
            title: 'Teste Antes de Comprar',
            description: 'Descubra se você e sua família vão realmente usar. Sem gastar R$ 5.000+ para descobrir.',
            highlight: 'Teste por 6 meses',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Divida com os Amigos',
            description: 'R$ 250 dividido por 4 = R$ 62,50 cada. Menos que uma mensalidade de Netflix.',
            highlight: 'R$ 62/cada',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: 'Sua Casa Vira o Point',
            description: 'Transforme sua casa no lugar onde todos querem se reunir. O rolê sempre vai ser na sua casa.',
            highlight: 'Point garantido',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },

        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Zero Dor de Cabeça',
            description: 'Mesa desnivelou? Pano rasgou? Problema nosso. Você só joga, a gente cuida do resto.',
            highlight: 'Manutenção inclusa',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: 'Flexibilidade Real',
            description: 'Vai mudar? A gente leva. Galera sumiu? Cancele sem drama. Sua vida muda, o contrato também.',
            highlight: 'Cancele quando quiser',
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Sem Peso na Consciência',
            description: 'Sem investimento de R$ 5.000+. Sem mesa virando cabideiro. Sem briga com a esposa.',
            highlight: 'Consciência limpa',
            color: 'text-red-600',
            bgColor: 'bg-red-50'
        }
    ];

    return (
        <section id="beneficios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header - MUDADO COPY */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Por que <span className="text-primary-600">Alugar</span> Faz Sentido?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Não é sobre economia. É sobre ter a experiência
                        sem o compromisso, o peso e os problemas de ser dono.
                    </p>
                </motion.div>

                {/* Benefits Grid - MANTIDO DESIGN */}
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

                {/* Bottom CTA - MUDADO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-12"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Perfeito para quem quer testar a experiência
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Descubra se ter uma mesa em casa vale a pena para você e sua família.
                        Sem o risco de um investimento alto que pode virar arrependimento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o aluguel de mesa de sinuca."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all"
                        >
                            💬 Conversar no WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}