// src/components/sections/Benefits.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Home, TestTube, Wrench, Calendar, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BENEFITS } from '@/lib/site-config';

export function Benefits() {
    const iconMap: Record<string, React.ReactNode> = {
        '🎱': <TestTube className="w-8 h-8" />,
        '👥': <Users className="w-8 h-8" />,
        '🏠': <Home className="w-8 h-8" />,
        '🔧': <Wrench className="w-8 h-8" />,
        '📅': <Calendar className="w-8 h-8" />,
        '💚': <Heart className="w-8 h-8" />
    };

    return (
        <section id="beneficios" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Por que <span className="text-[var(--color-brand-green)]">Alugar</span> Faz Sentido?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Não é sobre economia. É sobre ter a experiência sem o compromisso, o peso e os problemas de ser dono.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass-gradient h-full p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-border flex flex-col">
                                <div className={`w-16 h-16 rounded-xl ${benefit.bgColor} dark:bg-opacity-20 ${benefit.color} flex items-center justify-center mb-4`}>
                                    {iconMap[benefit.icon] || benefit.icon}
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {benefit.title}
                                </h3>

                                <p className="text-muted-foreground mb-4 flex-grow">
                                    {benefit.description}
                                </p>

                                {/* Badge sempre no bottom */}
                                <div className={`backdrop-blur-[2px] inline-flex items-center px-3 py-1 rounded-full border border-current/20 self-start mt-auto
                                    ${benefit.bgColor}
                                    ${benefit.color.includes('purple') ? 'dark:bg-purple-900/30' : ''}
                                    ${benefit.color.includes('orange') ? 'dark:bg-orange-900/30' : ''}
                                    ${benefit.color.includes('blue') ? 'dark:bg-blue-900/30' : ''}
                                    ${benefit.color.includes('green') ? 'dark:bg-green-900/30' : ''}
                                    ${benefit.color.includes('indigo') ? 'dark:bg-indigo-900/30' : ''}
                                    ${benefit.color.includes('red') ? 'dark:bg-red-900/30' : ''}
                                `}>
                                    <span className={`text-sm font-bold ${benefit.color}`}>
                                        {benefit.highlight}
                                    </span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center glass-gradient rounded-2xl p-12 border-border"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Perfeito para quem quer testar a experiência
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Descubra se ter uma mesa em casa vale a pena para você e sua família.
                        Sem o risco de um investimento alto que pode virar arrependimento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o aluguel de mesa de sinuca."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-brand-green)] text-white font-bold text-lg hover:bg-[#047857] transition-all"
                        >
                            💬 Conversar no WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}