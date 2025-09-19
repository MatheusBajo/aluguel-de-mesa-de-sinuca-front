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
                answer: 'Super simples! O aluguel de R$ 250/mês pode ser dividido entre vocês. Com 4 amigos fica R$ 62,50 cada, com 6 amigos só R$ 42 cada. Vocês decidem entre si como organizar os pagamentos e uso. A maioria dos grupos faz um rodízio ou deixa na casa de quem tem mais espaço.'
            },
            {
                question: 'E se meus amigos desistirem?',
                answer: 'Sem problema! Você pode continuar sozinho, encontrar novos amigos para dividir, ou cancelar o contrato com 30 dias de aviso. Não travamos você em contratos longos se a situação mudar.'
            },
            {
                question: 'Preciso pagar tudo de uma vez?',
                answer: 'Não! Você paga mensalmente. O primeiro pagamento é feito na contratação e depois sempre 30 dias após. Sem entrada alta, sem parcelas no cartão. Pague conforme usa.'
            },
            {
                question: 'Tem taxa de entrega?',
                answer: 'Sim, cobramos uma taxa única de entrega e montagem que varia conforme sua região. Mas é pago uma vez só. A retirada, quando você cancelar, também está incluída nessa taxa.'
            }
        ],
        service: [
            {
                question: 'As mesas são novas ou usadas?',
                answer: 'Nossas mesas são profissionais revisadas e certificadas. Passam por inspeção completa antes de cada locação. Você recebe uma mesa em perfeito estado, com qualidade de jogo profissional, mas sem pagar o preço de uma nova.'
            },
            {
                question: 'O que acontece se a mesa der problema?',
                answer: 'A gente resolve! Manutenção está inclusa no aluguel. Se o pano rasgar, a mesa desnivelou ou qualquer problema técnico, nossa equipe vai até você consertar. Em casos extremos, trocamos a mesa. Você nunca fica na mão.'
            },
            {
                question: 'Posso trocar de mesa durante o contrato?',
                answer: 'Sim! Se você quiser um modelo maior, menor, ou diferente, conversamos sobre a troca. Queremos que você tenha a mesa ideal para seu espaço e necessidade.'
            },
            {
                question: 'Vocês ensinam a jogar?',
                answer: 'Nossos técnicos dão dicas básicas na instalação, mas não oferecemos aulas formais. Porém, temos um grupo no WhatsApp onde clientes trocam dicas e até marcam jogos entre si!'
            }
        ],
        delivery: [
            {
                question: 'Em quanto tempo vocês entregam?',
                answer: 'Depende da sua região e disponibilidade de estoque. Normalmente entre 3 a 7 dias úteis após aprovação do contrato. Agendamos o melhor dia e horário para você receber.'
            },
            {
                question: 'Como funciona a montagem?',
                answer: 'Nossa equipe especializada faz toda a montagem. Leva cerca de 1-2 horas, dependendo do modelo. Deixamos tudo pronto, nivelado e você já pode jogar no mesmo dia.'
            },
            {
                question: 'E se eu morar em apartamento?',
                answer: 'Avaliamos o acesso antes da entrega. A mesa precisa caber no elevador ou vamos pela escada (até 3º andar geralmente). Se não for possível, devolvemos qualquer valor pago. Sem risco para você.'
            },
            {
                question: 'Preciso de quanto espaço?',
                answer: 'Ideal é ter uma área de 4m x 3m (1,5m livre de cada lado da mesa). Mas temos mesas menores para espaços reduzidos. Na visita técnica, medimos e recomendamos o melhor tamanho.'
            }
        ]
    };

    const categories = [
        { id: 'pricing', label: 'Valores e Divisão' },
        { id: 'service', label: 'Sobre o Serviço' },
        { id: 'delivery', label: 'Entrega e Espaço' }
    ];

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header - MUDADO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Dúvidas? A Gente Responde
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transparência total. Sem letras miúdas.
                        Se não encontrar sua dúvida aqui, chama no WhatsApp.
                    </p>
                </motion.div>

                {/* FAQ Tabs - MANTIDO ESTRUTURA */}
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

                {/* CTA - MUDADO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Card className="inline-block p-8 bg-gradient-to-r from-primary-50 to-accent-50">
                        <HelpCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Quer conversar sem compromisso?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md">
                            Tire todas as suas dúvidas direto no WhatsApp.
                            Respondemos rápido e com total transparência.
                        </p>
                        <WhatsAppButton
                            variant="hero"
                            type="custom"
                            message="Oi! Vi o site e tenho algumas dúvidas sobre o aluguel de mesa de sinuca. Podem me ajudar?"
                        >
                            Chamar no WhatsApp
                        </WhatsAppButton>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}