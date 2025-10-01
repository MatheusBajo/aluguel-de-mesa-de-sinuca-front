// src/components/sections/FAQ.tsx
'use client';

import {motion} from 'framer-motion';
import {HelpCircle} from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from '@/components/ui/accordion';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {WhatsAppButton} from '@/components/ui/WhatsAppButton';
import {Card} from "@/components/ui/card";

export function FAQ() {
    const faqs = {
        pricing: [
            {
                question: 'Como funciona a divisão entre amigos?',
                answer: 'Você junta a galera e divide do jeito que quiserem. R$ 250 ÷ 4 = R$ 62,50 cada. A gente não se mete em como vocês organizam isso. Só queremos saber quem é o responsável pelo contrato.'
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
                answer: 'Taxa única de entrega + montagem que varia por região (geralmente R$ 150-250). É pago uma vez só. Quando você cancelar, a retirada já tá inclusa nessa taxa.'
            }
        ],
        service: [
            {
                question: 'A mesa é nova ou usada?',
                answer: 'Sinceridade: usada, mas revisada profissionalmente. Trocamos pano se precisar, nivelamos, certificamos. Você recebe uma mesa em perfeito estado de jogo, só não paga preço de nova.'
            },
            {
                question: 'E se a mesa der problema?',
                answer: 'Consertamos ou trocamos. Manutenção tá inclusa no aluguel. Pano rasgou? Mesa empenou? Problema nosso. Em 2-3 dias resolvemos. Se for grave, trocamos a mesa inteira.'
            },
            {
                question: 'Posso trocar de mesa durante o contrato?',
                answer: 'Pode. Se quiser uma maior, menor, ou diferente, a gente conversa e resolve. Pode ter custo adicional dependendo do caso, mas é sempre transparente.'
            },
            {
                question: 'Vocês dão aulas de sinuca?',
                answer: 'Não. Nossos técnicos dão dicas básicas na instalação (como segurar o taco, bater na bola). Pra aulas de verdade, procure um professor especializado.'
            }
        ],
        delivery: [
            {
                question: 'Demora quanto pra entregar?',
                answer: 'Depende da região e estoque. Geralmente 3-7 dias úteis após você assinar o contrato. Sempre agendamos dia e horário que funcionem pra você.'
            },
            {
                question: 'Quem monta a mesa?',
                answer: 'Nossa equipe. Leva 1-2 horas. Deixamos tudo nivelado, pronto pra jogar no mesmo dia. Você não encosta um dedo.'
            },
            {
                question: 'E se eu morar em apartamento?',
                answer: 'A gente avalia antes. Mesa precisa caber no elevador ou subir pela escada (até 3º andar normalmente). Se não der, devolvemos seu dinheiro. Sem pegadinha.'
            },
            {
                question: 'Quanto espaço preciso?',
                answer: 'Ideal: 4m x 3m (1,5m livre de cada lado pra jogar confortável). Mas a gente se adapta. Se o espaço for apertado, recomendamos a mesa menor ou te mostramos como funciona antes de instalar.'
            }
        ]
    };

    const categories = [
        { id: 'pricing', label: 'Dinheiro e Divisão' },
        { id: 'service', label: 'Como Funciona' },
        { id: 'delivery', label: 'Entrega e Espaço' }
    ];

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Perguntas Diretas, Respostas Honestas
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                    <Tabs defaultValue="pricing" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
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
                                            className="bg-white rounded-lg shadow-sm border"
                                        >
                                            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                                                <span className="font-semibold text-gray-900">
                                                    {faq.question}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 text-gray-600 pb-4">
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
                    <Card className="inline-block p-8 bg-gradient-to-r from-primary-50 to-accent-50">
                        <HelpCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Ainda com dúvida?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md">
                            Chama no WhatsApp. Respondemos rápido e sem enrolação.
                        </p>
                        <WhatsAppButton
                            variant="hero"
                            type="custom"
                            message="Oi! Vi o site e tenho algumas dúvidas. Podem me ajudar?"
                        >
                            Chamar no WhatsApp
                        </WhatsAppButton>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}