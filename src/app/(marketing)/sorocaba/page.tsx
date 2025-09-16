// src/app/(marketing)/sorocaba/page.tsx
import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { Products } from '@/components/sections/Products';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { MapPin, Users, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
    title: 'Aluguel Mesa de Sinuca Sorocaba | Locação Mensal | R$ 250/mês',
    description: 'Aluguel de mesa de sinuca em Sorocaba e região. Centro, Campolim, Jardim São Paulo. Entrega rápida, montagem profissional. Contratos flexíveis.',
    keywords: 'aluguel mesa sinuca sorocaba, locação bilhar sorocaba, mesa sinuca campolim, mesa sinuca jardim são paulo sorocaba',
};

export default function SorocabaPage() {
    const neighborhoods = [
        'Centro', 'Campolim', 'Jardim São Paulo', 'Vila Jardini', 'Wanel Ville',
        'Jardim Vergueiro', 'Vila Santana', 'Jardim Europa', 'Parque Campolim',
        'Granja Olga', 'Jardim Betânia', 'Vila Hortência', 'Jardim Paulistano'
    ];

    const nearCities = [
        'Votorantim', 'Itu', 'Porto Feliz', 'Salto', 'Indaiatuba', 'Mairinque'
    ];

    return (
        <>
            {/* Local Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Aluguel de Mesa de Sinuca em
                            <span className="text-primary-600"> Sorocaba</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            A diversão chegou em Sorocaba! Alugue uma mesa profissional
                            por apenas <strong>R$ 250/mês</strong>. Atendemos toda a cidade e região.
                        </p>

                        {/* Local Trust Signals */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <Card className="p-4">
                                <MapPin className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <p className="font-bold">Toda Sorocaba</p>
                                <p className="text-sm text-gray-600">+ Cidades vizinhas</p>
                            </Card>
                            <Card className="p-4">
                                <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <p className="font-bold">Crescimento</p>
                                <p className="text-sm text-gray-600">Nova operação na região</p>
                            </Card>
                            <Card className="p-4">
                                <Award className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <p className="font-bold">Qualidade SP</p>
                                <p className="text-sm text-gray-600">Mesmo padrão da capital</p>
                            </Card>
                        </div>

                        <WhatsAppButton
                            variant="hero"
                            message="Olá! Moro em Sorocaba e tenho interesse em alugar uma mesa de sinuca. Podem me atender?"
                        >
                            Quero Alugar em Sorocaba
                        </WhatsAppButton>
                    </div>
                </div>
            </section>

            {/* Neighborhoods Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Bairros Atendidos em Sorocaba
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {neighborhoods.map((neighborhood) => (
                                <span
                                    key={neighborhood}
                                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                                >
                  {neighborhood}
                </span>
                            ))}
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                            <h3 className="font-bold text-green-900 mb-3">
                                🚚 Também atendemos cidades próximas:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {nearCities.map((city) => (
                                    <span
                                        key={city}
                                        className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-green-700 border border-green-200"
                                    >
                    {city}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">
                            Por que Sorocaba Escolhe Nosso Serviço de Locação
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <h3>Sorocaba: Qualidade de Vida e Lazer em Casa</h3>
                            <p>
                                Sorocaba é conhecida pela excelente qualidade de vida e pelo crescimento
                                acelerado. Com casas amplas e muitos condomínios com área de lazer, a
                                cidade é perfeita para ter uma mesa de sinuca em casa. Nosso serviço
                                chegou para atender essa demanda com a mesma qualidade oferecida na capital.
                            </p>

                            <h3>Do Campolim ao Centro: Atendimento Total</h3>
                            <p>
                                Seja em bairros nobres como Campolim e Jardim São Paulo, ou em regiões
                                centrais, nossa logística está preparada para atender toda Sorocaba.
                                A entrega e montagem são realizadas por profissionais treinados que
                                conhecem bem a cidade.
                            </p>

                            <h3>Vantagens Exclusivas para Sorocaba</h3>
                            <ul>
                                <li><strong>Preço especial de lançamento:</strong> Mesmo valor da capital (R$ 250/mês)</li>
                                <li><strong>Prioridade na entrega:</strong> Como nova operação, garantimos agilidade</li>
                                <li><strong>Suporte regional:</strong> Equipe dedicada para Sorocaba e região</li>
                                <li><strong>Flexibilidade:</strong> Contratos adaptados à realidade local</li>
                            </ul>

                            <div className="bg-blue-50 p-6 rounded-lg mt-8">
                                <h4 className="font-bold text-blue-900 mb-3">
                                    🎯 Oferta de Lançamento em Sorocaba
                                </h4>
                                <p className="text-blue-800">
                                    Primeiros 20 clientes em Sorocaba ganham o primeiro mês com 50% de desconto!
                                    Aproveite para ser um dos primeiros a ter uma mesa profissional em casa.
                                </p>
                            </div>

                            <h3>Ideal para Empresas de Sorocaba</h3>
                            <p>
                                Sorocaba tem um forte polo empresarial e industrial. Nossas mesas são
                                perfeitas para áreas de descompressão e lazer corporativo. Com o plano
                                empresarial a R$ 350/mês, sua empresa oferece mais qualidade de vida
                                aos colaboradores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of sections */}
            <HowItWorks />
            <Benefits />
            <Products />
            <Testimonials />
            <FAQ />
            <CTA />
        </>
    );
}