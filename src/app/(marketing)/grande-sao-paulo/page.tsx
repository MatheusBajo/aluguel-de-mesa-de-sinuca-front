// src/app/(marketing)/grande-sao-paulo/page.tsx
import {Metadata} from 'next';
import {HowItWorks} from '@/components/sections/HowItWorks';
import {Benefits} from '@/components/sections/Benefits';
import {Products} from '@/components/sections/Products';
import {Testimonials} from '@/components/sections/Testimonials';
import {FAQ} from '@/components/sections/FAQ';
import {CTA} from '@/components/sections/CTA';
import {Clock, MapPin, TrendingUp} from 'lucide-react';
import {Card} from '@/components/ui/card';
import {WhatsAppButton} from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
    title: 'Aluguel Mesa Sinuca Grande São Paulo | ABC, Guarulhos, Osasco | R$ 250',
    description: 'Locação de mesa de sinuca na Grande São Paulo. Atendemos ABC Paulista, Guarulhos, Osasco, Barueri. Entrega rápida, montagem inclusa. Sem caução!',
    keywords: 'aluguel mesa sinuca abc, mesa sinuca guarulhos, mesa sinuca osasco, locação bilhar santo andré, mesa sinuca são bernardo',
};

export default function GrandeSaoPauloPage() {
    const cities = [
        { name: 'Santo André', region: 'ABC Paulista' },
        { name: 'São Bernardo do Campo', region: 'ABC Paulista' },
        { name: 'São Caetano do Sul', region: 'ABC Paulista' },
        { name: 'Diadema', region: 'ABC Paulista' },
        { name: 'Mauá', region: 'ABC Paulista' },
        { name: 'Guarulhos', region: 'Zona Norte' },
        { name: 'Osasco', region: 'Zona Oeste' },
        { name: 'Barueri', region: 'Zona Oeste' },
        { name: 'Carapicuíba', region: 'Zona Oeste' },
        { name: 'Cotia', region: 'Zona Oeste' },
        { name: 'Taboão da Serra', region: 'Zona Sul' },
        { name: 'Embu das Artes', region: 'Zona Sul' },
    ];

    return (
        <>
            {/* Local Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Aluguel de Mesa de Sinuca na
                            <span className="text-primary-600"> Grande São Paulo</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Atendemos ABC Paulista, Guarulhos, Osasco e toda região metropolitana.
                            <strong> Mesma qualidade, mesmo preço: R$ 250/mês.</strong>
                        </p>

                        {/* Local Trust Signals */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <Card className="p-4">
                                <MapPin className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <p className="font-bold">39 Cidades</p>
                                <p className="text-sm text-gray-600">Toda região metropolitana</p>
                            </Card>
                            <Card className="p-4">
                                <TrendingUp className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <p className="font-bold">+150 Clientes</p>
                                <p className="text-sm text-gray-600">Na Grande São Paulo</p>
                            </Card>
                            <Card className="p-4">
                                <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <p className="font-bold">Entrega Rápida</p>
                                <p className="text-sm text-gray-600">1-2 dias úteis</p>
                            </Card>
                        </div>

                        <WhatsAppButton
                            variant="hero"
                            message="Olá! Moro na Grande São Paulo e quero alugar uma mesa de sinuca. Vocês atendem minha região?"
                        >
                            Verificar Disponibilidade
                        </WhatsAppButton>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Cidades Atendidas na Grande São Paulo
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-4">
                            {cities.map((city) => (
                                <Card key={city.name} className="p-4 hover:shadow-lg transition-shadow">
                                    <h3 className="font-bold text-gray-900">{city.name}</h3>
                                    <p className="text-sm text-gray-600">{city.region}</p>
                                    <p className="text-xs text-green-600 mt-2">✓ Entrega disponível</p>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-gray-600 mb-4">
                                Não encontrou sua cidade? Entre em contato!
                            </p>
                            <WhatsAppButton variant="inline" type="pf">
                                Consultar Minha Cidade
                            </WhatsAppButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">
                            Locação de Mesa de Sinuca no ABC e Região Metropolitana
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <h3>Atendimento Especializado em Toda Grande São Paulo</h3>
                            <p>
                                A Grande São Paulo merece o mesmo nível de serviço premium que a capital.
                                Por isso, nossa operação está estruturada para atender rapidamente todas as
                                39 cidades da região metropolitana, desde o ABC Paulista até Guarulhos,
                                Osasco e Barueri.
                            </p>

                            <h3>ABC Paulista: Santo André, São Bernardo e São Caetano</h3>
                            <p>
                                O ABC Paulista é uma das nossas principais regiões de atuação. Com muitas
                                residências amplas e condomínios com área de lazer, a demanda por mesas de
                                sinuca de qualidade é alta. Atendemos desde apartamentos em São Caetano até
                                grandes casas em São Bernardo do Campo.
                            </p>

                            <h3>Guarulhos e Zona Norte</h3>
                            <p>
                                Guarulhos, a segunda maior cidade de São Paulo, conta com nosso atendimento
                                express. Seja para residências próximas ao aeroporto ou bairros mais afastados,
                                garantimos entrega e montagem profissional em tempo recorde.
                            </p>

                            <h3>Osasco, Barueri e Zona Oeste</h3>
                            <p>
                                A região oeste, incluindo Osasco, Barueri, Alphaville e Cotia, é conhecida
                                pelos condomínios de alto padrão. Nossas mesas profissionais são perfeitas
                                para essas residências que valorizam qualidade e praticidade.
                            </p>

                            <div className="bg-blue-50 p-6 rounded-lg mt-8">
                                <h4 className="font-bold text-blue-900 mb-3">
                                    💡 Vantagem Exclusiva para Grande São Paulo
                                </h4>
                                <p className="text-blue-800">
                                    Moradores da Grande São Paulo pagam o mesmo valor que a capital: apenas
                                    R$ 250/mês para residências. Sem taxa adicional de deslocamento para
                                    entregas dentro da região metropolitana!
                                </p>
                            </div>
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