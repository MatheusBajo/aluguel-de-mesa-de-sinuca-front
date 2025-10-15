// src/components/sections/HowItWorks.tsx
'use client';

import { motion } from 'framer-motion';
import { Phone, Truck, Gamepad2, CheckCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Fale Conosco',
            description: 'WhatsApp. Explicamos tudo sem pressa.',
            icon: <Phone className="w-8 h-8" />,
            color: 'from-blue-500 to-blue-600',
            details: ['Contrato simples', 'Pagamento mensal', 'Tire todas as dúvidas']
        },
        {
            number: '02',
            title: 'Entrega e Montagem',
            description: 'Entregamos e montamos tudo.',
            icon: <Truck className="w-8 h-8" />,
            color: 'from-[var(--color-brand-green)] to-[#047857]',
            details: ['Montagem profissional', 'Mesa nivelada', 'Kit completo']
        },
        {
            number: '03',
            title: 'Aproveite',
            description: 'Pronto! Mesa funcionando. Suporte quando precisar.',
            icon: <Gamepad2 className="w-8 h-8" />,
            color: 'from-purple-500 to-purple-600',
            details: ['Manutenção inclusa', 'WhatsApp direto', 'Cancele quando quiser']
        }
    ];

    return (
        <section id="como-funciona" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Simples assim
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Sem burocracia. Sem complicação.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Connector line - sólida sem transparência */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-muted-foreground/30 z-0" />
                            )}

                            <div className="glass-gradient relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-border backdrop-blur-md">
                                {/* Step number */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-4`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground mb-4">{step.description}</p>

                                {/* Details */}
                                <ul className="space-y-2">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[var(--color-brand-green)] mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <WhatsAppButton
                        variant="hero"
                        type="pf"
                        className="bg-[var(--color-brand-green)] hover:bg-[#047857]"
                    >
                        Começar Agora
                    </WhatsAppButton>
                </motion.div>
            </div>
        </section>
    );
}