// src/components/sections/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import {Card} from "@/components/ui/card";

export function FAQ() {
    const faqs = {
        pricing: [
            {
                question: 'Qual o valor do aluguel mensal?',
                answer: 'Para pessoa física (residências) o valor é R$ 250/mês. Para pessoa jurídica (empresas e condomínios) é R$ 350/mês. Ambos com contratos mínimos de 6 meses.'
            },
            {
                question: 'Preciso pagar caução ou seguro?',
                answer: 'Não! Não cobramos caução, seguro ou qualquer taxa adicional além do aluguel mensal e da taxa única de entrega/retirada. Simples assim.'
            },
            {
                question: 'Como funciona o pagamento?',
                answer: 'Você paga o primeiro mês na contratação via PIX ou cartão. Após a entrega, os próximos pagamentos são sempre 30 dias depois. Enviamos lembrete no WhatsApp.'
            },
            {
                question: 'Tem multa se eu cancelar?',
                answer: 'Não cobramos multas abusivas! Você pode cancelar a qualquer momento com aviso de 30 dias. Totalmente flexível.'
            }
        ],
        service: [
            {
                question: 'As mesas são novas?',
                answer: 'Nossas mesas são certificadas e revisadas, passando por 32 pontos de inspeção. Elas têm qualidade de mesa nova, com a vantagem de já estarem testadas e aprovadas. Garantimos desempenho profissional!'
            },
            {
                question: 'O que está incluso no aluguel?',
                answer: 'Mesa completa, kit de acessórios (tacos, bolas, giz, triângulo), entrega, montagem profissional, manutenção preventiva e suporte técnico sempre que precisar.'
            },
            {
                question: 'E se a mesa apresentar algum problema?',
                answer: 'Fazemos manutenção gratuita e, se necessário, trocamos a mesa sem custo adicional. Você nunca fica na mão. Suporte via WhatsApp em horário comercial.'
            },
            {
                question: 'Vocês fazem manutenção periódica?',
                answer: 'Sim! Agendamos manutenções preventivas para garantir que a mesa esteja sempre em perfeitas condições. Tudo incluso no aluguel.'
            }
        ],
        delivery: [
            {
                question: 'Em quanto tempo vocês entregam?',
                answer: 'Entregamos e montamos em até 24 horas após a aprovação do contrato, dependendo da disponibilidade na sua região. Agendamos o melhor horário para você.'
            },
            {
                question: 'Vocês montam a mesa?',
                answer: 'Sim! Nossa equipe especializada faz toda a montagem, nivelamento e deixa a mesa pronta para uso. Você não precisa se preocupar com nada.'
            },
            {
                question: 'E se tiver escada ou elevador?',
                answer: 'Conseguimos entregar na maioria dos casos! Se houver obstáculos como escadas estreitas ou elevadores pequenos, pode haver uma taxa adicional pela dificuldade de acesso.'
            },
            {
                question: 'Atendem quais regiões?',
                answer: 'Atendemos São Paulo capital, Grande São Paulo (ABC, Guarulhos, Osasco, etc.) e Sorocaba e região. Consulte disponibilidade para sua cidade.'
            }
        ]
    };

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Perguntas <span className="text-primary-600">Frequentes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tire todas as suas dúvidas. Se precisar de mais informações,
                        estamos no WhatsApp!
                    </p>
                </motion.div>

                {/* FAQ Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Tabs defaultValue="pricing" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="pricing" className="flex items-center gap-2">
                                💰 Preços e Pagamento
                            </TabsTrigger>
                            <TabsTrigger value="service" className="flex items-center gap-2">
                                🎱 Serviço e Mesas
                            </TabsTrigger>
                            <TabsTrigger value="delivery" className="flex items-center gap-2">
                                🚚 Entrega e Regiões
                            </TabsTrigger>
                        </TabsList>

                        {Object.entries(faqs).map(([key, questions]) => (
                            <TabsContent key={key} value={key}>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {questions.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="bg-white rounded-lg px-6 border"
                                        >
                                            <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-left font-medium text-gray-900">
                          {faq.question}
                        </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-600 pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        ))}
                    </Tabs>
                </motion.div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Card className="inline-block p-8 bg-gradient-to-r from-primary-50 to-accent-50">
                        <HelpCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Ainda tem dúvidas?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md">
                            Nossa equipe está pronta para esclarecer qualquer questão.
                            Fale conosco agora mesmo!
                        </p>
                        <WhatsAppButton variant="hero" type="custom" message="Olá! Vi o FAQ mas ainda tenho algumas dúvidas sobre o aluguel de mesa de sinuca.">
                            Tirar Dúvidas no WhatsApp
                        </WhatsAppButton>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}