'use client';

import { motion } from 'framer-motion';
import { Phone, Truck, Gamepad2, CheckCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Escolha e Contrate',
            description: 'Selecione o modelo ideal e fale conosco pelo WhatsApp. Aprovação instantânea, sem burocracia.',
            icon: <Phone className="w-8 h-8" />,
            color: 'from-blue-500 to-blue-600',
            details: ['Sem consulta SPC/Serasa', 'Contrato digital', 'Pagamento PIX ou cartão']
        },
        {
            number: '02',
            title: 'Entrega Expressa',
            description: 'Agendamos a entrega em até 24h. Nossa equipe monta tudo no local escolhido.',
            icon: <Truck className="w-8 h-8" />,
            color: 'from-green-500 to-green-600',
            details: ['Montagem profissional', 'Teste de nivelamento', 'Kit de acessórios incluso']
        },
        {
            number: '03',
            title: 'Aproveite!',
            description: 'Mesa pronta para uso imediato. Suporte técnico sempre que precisar.',
            icon: <Gamepad2 className="w-8 h-8" />,
            color: 'from-purple-500 to-purple-600',
            details: ['Manutenção preventiva', 'Suporte via WhatsApp', 'Garantia total']
        }
    ];

    return (
        <section id="como-funciona" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Simples em <span className="text-primary-600">3 Passos</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Do contato à primeira partida em menos de 48 horas.
                        Sem complicação, sem surpresas.
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
                            {/* Connector line (escondido no mobile e no último item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0" />
                            )}

                            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                {/* Step number */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-4`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 mb-4">{step.description}</p>

                                {/* Details */}
                                <ul className="space-y-2">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{detail}</span>
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
                    <WhatsAppButton variant="hero" type="pf">
                        Começar Agora - É Rápido!
                    </WhatsAppButton>
                </motion.div>
            </div>
        </section>
    );
}