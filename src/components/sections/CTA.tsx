// src/components/sections/CTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function CTA() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background com gradiente verde */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-green)] to-[#047857]" />

            {/* Pattern glassmorphism overlay */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center text-white"
                >
                    {/* Headline */}
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Pronto pra Transformar sua Casa?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                        Comece testando por 6 meses. Se não rolar, devolve sem drama.
                        Se virar tradição, vocês renovam e seguem o jogo.
                    </p>

                    {/* Benefits compactos */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            { icon: <Users className="w-5 h-5" />, text: 'R$ 62 dividindo por 4' },
                            { icon: <Shield className="w-5 h-5" />, text: 'Contrato 6 meses' },
                            { icon: <ArrowRight className="w-5 h-5" />, text: 'Montagem inclusa' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 glass-gradient px-4 py-2 rounded-full border-white/20"
                            >
                                <span className="text-[var(--color-brand-yellow)]">{item.icon}</span>
                                <span className="text-white font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA principal */}
                    <div className="mb-8">
                        <WhatsAppButton
                            variant="hero"
                            className="bg-white text-[var(--color-brand-green)] hover:bg-gray-100 shadow-2xl border-0"
                            message="Oi! Quero transformar minha casa no point. Como funciona?"
                        >
                            <span className="flex items-center gap-2">
                                Conversar Agora
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </WhatsAppButton>
                    </div>

                    {/* Social proof final */}
                    <p className="text-white/80 text-sm">
                        🎉 47 grupos já alugando e dividindo em SP
                    </p>
                </motion.div>
            </div>
        </section>
    );
}