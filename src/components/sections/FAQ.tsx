// src/components/sections/FAQ.tsx
'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Card } from "@/components/ui/card";

export function FAQ() {
    const faqs = {
        service: [
            {
                question: 'A mesa é nova ou usada?',
                answer: 'Usada, mas revisada profissionalmente. Trocamos pano se necessário, nivelamos e certificamos. Você recebe uma mesa em perfeito estado de jogo, sem pagar preço de nova.'
            },
            {
                question: 'E se a mesa der problema?',
                answer: 'Consertamos ou trocamos. A manutenção está inclusa no aluguel. Qualquer problema que surgir, é nossa responsabilidade resolver. Em caso de mau uso, será cobrado o serviço de reforma.'
            },
            {
                question: 'Posso trocar de mesa durante o contrato?',
                answer: 'Sim. Se quiser uma maior, menor ou diferente, conversamos e resolvemos. Pode ter custo adicional dependendo do caso, mas é sempre transparente.'
            },
            {
                question: 'Vocês dão aulas de sinuca?',
                answer: 'Não. Nossos técnicos dão dicas básicas na instalação (como segurar o taco, bater na bola). Para aulas de verdade, procure um professor especializado.'
            }
        ],
        delivery: [
            {
                question: 'Demora quanto pra entregar?',
                answer: 'Depende da região e estoque. Sempre confirmamos dia e horário que funcionem para você após a confirmação do contrato.'
            },
            {
                question: 'Quem monta a mesa?',
                answer: 'Nossa equipe. Deixamos tudo nivelado, pronto para jogar no mesmo dia. Você não precisa fazer nada.'
            },
            {
                question: 'E se eu morar em apartamento?',
                answer: 'Avaliamos antes. A mesa precisa caber no elevador ou subir pela escada. Se não for viável, devolvemos seu dinheiro.'
            },
            {
                question: 'Quanto espaço preciso?',
                answer: 'Ideal: 4m x 3m (1,5m livre de cada lado para jogar confortável). Mas nos adaptamos. Se o espaço for apertado, recomendamos a mesa menor ou mostramos como funciona antes de instalar.'
            }
        ],
        pricing: [
            {
                question: 'Como funciona a divisão entre amigos?',
                answer: 'Você junta a galera e divide do jeito que quiserem. R$ 295 ÷ 4 = R$ 73,75 cada. A gente não se mete em como vocês organizam isso. Só queremos saber quem é o responsável pelo contrato.'
            },
            {
                question: 'E se meus amigos desistirem no meio?',
                answer: 'Você pode continuar sozinho, encontrar outros amigos pra dividir, ou cancelar avisando 30 dias antes. Sem multa, sem burocracia. A vida muda, a gente entende.'
            },
            {
                question: 'Tem que pagar tudo de uma vez?',
                answer: 'Não. Você paga por mês. Primeiro pagamento na contratação, depois mensalmente. Sem entrada alta, sem parcelamento no cartão cheio de juros.'
            },
            {
                question: 'Quanto custa a entrega?',
                answer: 'Taxa de frete e montagem/nivelamento que varia por região (geralmente R$ 150-250). É pago uma vez só. Quando você cancelar, a retirada já tá inclusa nessa taxa.'
            }
        ]
    };

    const categories = [
        { id: 'service', label: 'Como Funciona' },
        { id: 'delivery', label: 'Entrega e Espaço' },
        { id: 'pricing', label: 'Dinheiro e Divisão' }
    ];

    return (
        <section id="faq" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Perguntas Diretas, Respostas Honestas
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Zero enrolação. Se não tiver aqui, manda no WhatsApp que a gente responde na hora.
                    </p>
                </motion.div>

                {/* FAQ Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Tabs defaultValue="service" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8 glass-gradient border-border">
                            {categories.map(category => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="text-sm sm:text-base"
                                >
                                    {category.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {Object.entries(faqs).map(([key, items]) => (
                            <TabsContent key={key} value={key}>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {items.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="glass-gradient rounded-lg shadow-sm border-border"
                                        >
                                            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                                                <span className="font-semibold text-foreground">
                                                    {faq.question}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 text-muted-foreground pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        ))}
                    </Tabs>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Card className="inline-block p-8 glass-gradient border-border">
                        <HelpCircle className="w-12 h-12 text-[var(--color-brand-green)] mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Ainda com dúvida?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            Chama no WhatsApp. Respondemos rápido e sem enrolação.
                        </p>
                        <WhatsAppButton
                            variant="hero"
                            type="custom"
                            message="Oi! Vi o site e tenho algumas dúvidas. Podem me ajudar?"
                            className="bg-[var(--color-brand-green)] hover:bg-[#047857]"
                        >
                            Chamar no WhatsApp
                        </WhatsAppButton>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}