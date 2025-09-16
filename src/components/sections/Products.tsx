// src/components/sections/Products.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image'; // ADICIONE ESTE IMPORT NO TOPO
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Users, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function Products() {
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const products = [
        {
            id: '1',
            name: 'Mesa Compacta 1.80',
            size: '1.80m x 1.00m',
            image: '/Mesa de Sinuca.png',
            badge: 'Mais Popular',
            idealFor: 'Apartamentos e espaços menores',
            features: [
                'Tamanho ideal para ambientes compactos',
                'Tecido profissional verde',
                'Estrutura em MDF de alta densidade',
                'Caçapas de precisão',
                'Kit com 2 tacos, bolas e giz'
            ],
            spaces: ['Sala de estar', 'Varanda gourmet', 'Sala de jogos pequena'],
            monthlyPrice: 250
        },
        {
            id: '2',
            name: 'Mesa Padrão 2.00',
            size: '2.00m x 1.10m',
            image: '/Mesa de Sinuca.png',
            badge: 'Melhor Custo-Benefício',
            idealFor: 'Casas e salões de festa',
            features: [
                'Tamanho padrão de bar',
                'Tecido importado de alta durabilidade',
                'Ardósia oficial',
                'Sistema de retorno de bolas',
                'Kit completo de acessórios premium'
            ],
            spaces: ['Garagem', 'Salão de festas', 'Área de lazer'],
            monthlyPrice: 250
        },
        {
            id: '3',
            name: 'Mesa Profissional 2.20',
            size: '2.20m x 1.20m',
            image: '/Mesa de Sinuca.png',
            badge: 'Premium',
            idealFor: 'Empresas e condomínios',
            features: [
                'Tamanho profissional de competição',
                'Tecido Simonis 760 (o melhor do mundo)',
                'Ardósia italiana de 3 peças',
                'Tabelas profissionais',
                'Kit VIP com tacos profissionais'
            ],
            spaces: ['Área corporativa', 'Condomínio de luxo', 'Casa com espaço amplo'],
            monthlyPrice: 350
        }
    ];

    const currentProduct = products[selectedProduct];

    return (
        <section id="mesas" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Mesas <span className="text-primary-600">Certificadas & Revisadas</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Cada mesa passa por rigoroso processo de revisão.
                        <strong> Qualidade de nova, preço de aluguel.</strong>
                    </p>
                </motion.div>

                {/* Product Showcase */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentProduct.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    src={currentProduct.image}
                                    alt={currentProduct.name}
                                    className="w-full h-[400px] object-cover"
                                />
                            </AnimatePresence>

                            {/* Badge */}
                            <Badge className="absolute top-4 left-4 bg-accent-500 text-white border-0 px-4 py-2">
                                {currentProduct.badge}
                            </Badge>

                            {/* Navigation */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedProduct((prev) => (prev - 1 + products.length) % products.length)}
                                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <div className="flex gap-2">
                                    {products.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedProduct(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === selectedProduct ? 'w-8 bg-primary-600' : 'bg-white/60'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProduct((prev) => (prev + 1) % products.length)}
                                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Processo de Certificação */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-[250px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                                    ✓
                                </div>
                                <span className="font-bold text-gray-900">Certificada</span>
                            </div>
                            <p className="text-xs text-gray-600">
                                32 pontos de inspeção • Garantia total • Pronta para uso profissional
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {currentProduct.name}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Maximize2 className="w-4 h-4" />
                    {currentProduct.size}
                </span>
                                <span className="flex items-center gap-1">
                  {currentProduct.monthlyPrice === 250 ? (
                      <Home className="w-4 h-4" />
                  ) : (
                      <Users className="w-4 h-4" />
                  )}
                                    {currentProduct.idealFor}
                </span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-3">O que está incluso:</h4>
                            <ul className="space-y-2">
                                {currentProduct.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs">✓</span>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Ideal Spaces */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-3">Ideal para:</h4>
                            <div className="flex flex-wrap gap-2">
                                {currentProduct.spaces.map((space, index) => (
                                    <Badge key={index} variant="secondary" className="px-3 py-1">
                                        {space}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Pricing */}
                        <Card className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">A partir de</p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        R$ {currentProduct.monthlyPrice}
                                        <span className="text-lg font-normal text-gray-600">/mês</span>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Contratos de 6 meses</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 mb-1">Economia vs compra</p>
                                    <p className="text-2xl font-bold text-green-600">70%</p>
                                </div>
                            </div>
                        </Card>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <WhatsAppButton
                                variant="hero"
                                message={`Olá! Tenho interesse na ${currentProduct.name} (${currentProduct.size}). Poderia me passar mais informações?`}
                                className="flex-1 justify-center"
                            >
                                Quero Esta Mesa
                            </WhatsAppButton>

                            <button
                                onClick={() => setShowDetails(true)}
                                className="flex-1 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-all"
                            >
                                Ver Mais Detalhes
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                        🏆 Processo de Certificação Premium
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Inspeção', desc: 'Verificação de 32 pontos' },
                            { step: '2', title: 'Restauração', desc: 'Troca de peças desgastadas' },
                            { step: '3', title: 'Teste', desc: 'Nivelamento e calibração' },
                            { step: '4', title: 'Certificado', desc: 'Selo de qualidade garantida' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-3">
                                    {item.step}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Details Modal */}
                <Dialog open={showDetails} onOpenChange={setShowDetails}>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">{currentProduct.name} - Especificações Completas</h2>
                            <Image
                                src={currentProduct.image}
                                alt={currentProduct.name}
                                width={800}
                                height={400}
                                className="w-full rounded-lg mb-6"
                            />
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold mb-2">Dimensões e Características</h3>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• Tamanho: {currentProduct.size}</li>
                                        <li>• Peso aproximado: 120-180kg</li>
                                        <li>• Material: MDF naval com revestimento especial</li>
                                        <li>• Cor do tecido: Verde profissional</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">Acessórios Inclusos</h3>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• 2 tacos profissionais</li>
                                        <li>• Jogo de bolas Belga Aramith</li>
                                        <li>• Triângulo para organização</li>
                                        <li>• Giz e porta-giz</li>
                                        <li>• Escova de limpeza</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}