// src/components/calculators/ROICalculator.tsx
// CORREÇÃO: Remover chartData não usado (linha 46)
'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency } from '@/lib/utils';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';

interface ROICalculatorProps {
    onClose?: () => void;
}

export function ROICalculator({ onClose }: ROICalculatorProps) {
    const [months, setMonths] = useState(12);
    const [tablePrice, setTablePrice] = useState(5000);
    const [customerType, setCustomerType] = useState<'pf' | 'pj'>('pf');

    // Preços de aluguel
    const monthlyRent = customerType === 'pf' ? 250 : 350;

    // Cálculos de custos
    const buyingCosts = {
        table: tablePrice,
        delivery: 350,
        accessories: 300,
        maintenance: Math.round((months / 12) * 200),
        total: 0
    };
    buyingCosts.total = Object.values(buyingCosts).reduce((a, b) => a + b, 0);

    const rentalCosts = {
        monthly: monthlyRent,
        total: monthlyRent * months,
        delivery: 150, // Taxa única
        totalWithDelivery: 0
    };
    rentalCosts.totalWithDelivery = rentalCosts.total + rentalCosts.delivery;

    const savings = buyingCosts.total - rentalCosts.totalWithDelivery;
    const savingsPercentage = Math.round((savings / buyingCosts.total) * 100);

    // REMOVIDO: chartData que não estava sendo usado

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Calculator className="w-8 h-8 text-primary-600" />
                        Calculadora de Economia
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Compare o custo de alugar vs comprar uma mesa de sinuca
                    </p>
                </div>
            </div>

            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Cliente
                    </label>
                    <Tabs value={customerType} onValueChange={(v) => setCustomerType(v as 'pf' | 'pj')}>
                        <TabsList className="w-full">
                            <TabsTrigger value="pf" className="flex-1">Residencial</TabsTrigger>
                            <TabsTrigger value="pj" className="flex-1">Empresarial</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Período (meses)
                    </label>
                    <input
                        type="range"
                        min="6"
                        max="24"
                        step="6"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>6 meses</span>
                        <span className="font-bold text-primary-600">{months} meses</span>
                        <span>24 meses</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Valor da Mesa Nova
                    </label>
                    <select
                        value={tablePrice}
                        onChange={(e) => setTablePrice(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                        <option value={3000}>R$ 3.000 (Básica)</option>
                        <option value={5000}>R$ 5.000 (Intermediária)</option>
                        <option value={8000}>R$ 8.000 (Premium)</option>
                        <option value={12000}>R$ 12.000 (Profissional)</option>
                    </select>
                </div>
            </div>

            {/* Resultados */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Custo de Compra */}
                <Card className="p-6 border-2 border-red-200 bg-red-50">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">
                        💸 Custo de Comprar
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Mesa de sinuca</span>
                            <span className="font-medium">{formatCurrency(buyingCosts.table)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Entrega e montagem</span>
                            <span className="font-medium">{formatCurrency(buyingCosts.delivery)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Acessórios</span>
                            <span className="font-medium">{formatCurrency(buyingCosts.accessories)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Manutenção ({months} meses)</span>
                            <span className="font-medium">{formatCurrency(buyingCosts.maintenance)}</span>
                        </div>
                        <div className="pt-3 border-t-2 border-red-300">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-bold text-2xl text-red-600">
                  {formatCurrency(buyingCosts.total)}
                </span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Custo de Alugar */}
                <Card className="p-6 border-2 border-green-200 bg-green-50">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">
                        ✅ Custo de Alugar
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Aluguel mensal</span>
                            <span className="font-medium">{formatCurrency(monthlyRent)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Total {months} meses</span>
                            <span className="font-medium">{formatCurrency(rentalCosts.total)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Taxa de entrega (única)</span>
                            <span className="font-medium">{formatCurrency(rentalCosts.delivery)}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                            <span className="text-sm">✓ Manutenção inclusa</span>
                            <span className="font-medium">R$ 0</span>
                        </div>
                        <div className="pt-3 border-t-2 border-green-300">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-bold text-2xl text-green-600">
                  {formatCurrency(rentalCosts.totalWithDelivery)}
                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Resumo da Economia */}
            <AnimatePresence mode="wait">
                {savings > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-6"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100 mb-1">Você economiza</p>
                                <p className="text-4xl font-bold">{formatCurrency(savings)}</p>
                                <p className="text-green-100 mt-2">
                                    Isso é <strong>{savingsPercentage}% mais barato</strong> que comprar!
                                </p>
                            </div>
                            <TrendingUp className="w-16 h-16 text-white/20" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Benefícios Adicionais */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Vantagens Exclusivas do Aluguel
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        '🚚 Entrega e montagem profissional incluída',
                        '🔧 Manutenção preventiva sem custo',
                        '🔄 Troca de mesa se necessário',
                        '❌ Sem preocupação com revenda',
                        '✅ Cancele quando quiser (aviso 30 dias)',
                        '💰 Sem investimento inicial alto'
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton
                    variant="hero"
                    message={`Olá! Vi na calculadora que posso economizar ${formatCurrency(savings)} alugando uma mesa de sinuca por ${months} meses. Gostaria de saber mais!`}
                >
                    Quero Economizar {formatCurrency(savings)}
                </WhatsAppButton>

                {onClose && (
                    <button
                        onClick={onClose}
                        className="px-8 py-4 rounded-xl bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-200 transition-all"
                    >
                        Fechar Calculadora
                    </button>
                )}
            </div>
        </div>
    );
}