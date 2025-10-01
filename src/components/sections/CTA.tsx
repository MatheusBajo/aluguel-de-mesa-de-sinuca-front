// src/components/sections/CTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Users, Shield } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { STATS } from '@/lib/site-config';

export function CTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-black/10" />
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
                    {/* Badge - MOCK */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-8">
                        <Users className="w-5 h-5 text-yellow-300" />
                        <span className="font-semibold">
                            {STATS.groupsSharing} grupos já dividindo em SP
                        </span>
                        {/* MOCK: Atualizar número real */}
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Pronto para Reunir a Galera?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                        Monte seu grupo, divida o valor e transforme sua casa no point.
                        Comece testando por 6 meses e veja se funciona pra vocês.
                    </p>

                    {/* Benefits List */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            { icon: <Users className="w-5 h-5" />, text: 'R$ 62,50 dividindo por 4' },
                            { icon: <Shield className="w-5 h-5" />, text: 'Manutenção inclusa' },
                            { icon: <MessageCircle className="w-5 h-5" />, text: 'Suporte no WhatsApp' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full"
                            >
                                <span className="text-yellow-300">{item.icon}</span>
                                <span className="text-white font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <WhatsAppButton
                            variant="hero"
                            className="bg-white text-primary-600 hover:bg-gray-100"
                            message="Olá! Quero saber mais sobre como funciona o aluguel e a divisão com amigos."
                        >
                            <span className="flex items-center gap-2">
                                Conversar Agora
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </WhatsAppButton>

                        <a
                            href="tel:+5511999999999"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/20 backdrop-blur text-white font-bold text-lg hover:bg-white/30 transition-all"
                        >
                            📞 Prefiro Ligar
                        </a>
                    </div>

                    {/* Social proof */}
                    <p className="text-white/80 text-sm">
                        😊 Respondemos em minutos durante horário comercial
                    </p>
                </motion.div>
            </div>
        </section>
    );
}