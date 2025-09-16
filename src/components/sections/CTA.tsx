// src/components/sections/CTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Gift, Shield } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';

export function CTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Limited Time Badge */}
                    <Badge className="mb-6 bg-yellow-400 text-gray-900 border-0 px-4 py-2 text-sm">
                        🎁 Oferta Limitada - Taxa de Entrega Grátis este Mês!
                    </Badge>

                    {/* Main Headline */}
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Transforme Sua Casa em um
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Point de Diversão
            </span>
                    </h2>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Junte a família, chame os amigos. Com apenas R$ 250/mês,
                        você tem uma mesa profissional sem se preocupar com nada.
                    </p>

                    {/* Benefits List */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            { icon: <Clock className="w-5 h-5" />, text: 'Entrega em 24h' },
                            { icon: <Gift className="w-5 h-5" />, text: 'Primeiro Mês com Desconto' },
                            { icon: <Shield className="w-5 h-5" />, text: 'Cancele Quando Quiser' }
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
                            message="Olá! Vi a oferta de taxa de entrega grátis. Quero aproveitar!"
                        >
              <span className="flex items-center gap-2">
                Aproveitar Oferta
                <ArrowRight className="w-5 h-5" />
              </span>
                        </WhatsAppButton>

                        <a
                            href="tel:+5511999999999"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/20 backdrop-blur text-white font-bold text-lg hover:bg-white/30 transition-all"
                        >
                            📞 Ligar Agora
                        </a>
                    </div>

                    {/* Urgency */}
                    <p className="text-white/80 text-sm">
                        ⏰ Oferta válida apenas para os próximos <strong>10 clientes</strong>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}