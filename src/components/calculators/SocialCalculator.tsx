// src/components/calculators/SocialCalculator.tsx
'use client';

import { useState } from 'react';
import { Users, Share2, MessageCircle, TrendingDown, Coffee, Gamepad2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialCalculatorProps {
    onClose?: () => void;
}

export function SocialCalculator({ onClose }: SocialCalculatorProps) {
    const [friends, setFriends] = useState(4);
    const [months, setMonths] = useState(6);

    // Preço base mensal
    const monthlyRent = 250;

    // Cálculos de divisão
    const perPerson = monthlyRent / friends;
    const totalCost = monthlyRent * months;
    const totalPerPerson = perPerson * months;

    // Comparações para contexto
    const comparisons = [
        {
            icon: <Coffee className="w-5 h-5" />,
            label: 'cafés no mês',
            value: Math.floor(perPerson / 6),
            visible: perPerson <= 100
        },
        {
            icon: <Gamepad2 className="w-5 h-5" />,
            label: 'Netflix',
            value: perPerson <= 55 ? 'Menos que' : 'Pouco mais que',
            visible: true
        }
    ];

    // Mensagem para compartilhar
    const shareMessage = `Galera, achei um jeito da gente ter mesa de sinuca por R$ ${perPerson.toFixed(0)}/mês cada (dividindo entre ${friends} pessoas). Bora montar o grupo? 🎱`;

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Users className="w-8 h-8 text-primary-600" />
                        Calculadora Social
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Divida com os amigos e jogue todo dia
                    </p>
                </div>
                {onClose && (
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        ✕
                    </button>
                )}
            </div>

            {/* Slider de amigos */}
            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                    Quantos amigos vão dividir?
                    <span className="text-2xl font-bold text-primary-600 ml-2">{friends} pessoas</span>
                </label>
                <input
                    type="range"
                    min="2"
                    max="8"
                    value={friends}
                    onChange={(e) => setFriends(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>2 pessoas</span>
                    <span>4 pessoas</span>
                    <span>6 pessoas</span>
                    <span>8 pessoas</span>
                </div>
            </div>

            {/* Resultado principal */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={friends}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white mb-6"
                >
                    <div className="text-center">
                        <p className="text-green-100 mb-2">Cada pessoa paga apenas</p>
                        <p className="text-6xl font-bold mb-2">
                            R$ {perPerson.toFixed(0)}
                        </p>
                        <p className="text-green-100">por mês</p>

                        {/* Comparações */}
                        <div className="flex justify-center gap-4 mt-6">
                            {comparisons.filter(c => c.visible).map((comp, idx) => (
                                <Badge key={idx} className="bg-white/20 text-white border-white/30">
                                    {comp.icon}
                                    <span className="ml-2">
                                        {comp.value} {comp.label}
                                    </span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Detalhes da divisão */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-green-600" />
                        Como funciona
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Mesa disponível 30 dias/mês</li>
                        <li>• Dividido por {friends} = {(30/friends).toFixed(1)} dias garantidos cada</li>
                        <li>• Dias de churrasco não contam (uso coletivo)</li>
                        <li>• Flexível pra trocar dias entre vocês</li>
                    </ul>
                </Card>

                <Card className="p-4">
                    <h4 className="font-semibold mb-3">💡 Dica esperta</h4>
                    <p className="text-sm text-gray-600 mb-3">
                        Com {friends} pessoas, vocês podem:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Fazer torneios mensais</li>
                        <li>• Revezar a casa (se quiserem)</li>
                        <li>• Incluir mais gente depois</li>
                        <li>• Cancelar se o grupo rachar</li>
                    </ul>
                </Card>
            </div>

            {/* Score de viabilidade */}
            <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
                <h4 className="font-semibold mb-2 text-blue-900">
                    🎯 Viabilidade do grupo
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white rounded p-2">
                        <p className="text-2xl font-bold text-green-600">✓</p>
                        <p className="text-xs text-gray-600">Valor acessível</p>
                    </div>
                    <div className="bg-white rounded p-2">
                        <p className="text-2xl font-bold text-green-600">✓</p>
                        <p className="text-xs text-gray-600">Uso garantido</p>
                    </div>
                    <div className="bg-white rounded p-2">
                        <p className="text-2xl font-bold text-green-600">✓</p>
                        <p className="text-xs text-gray-600">Sem risco</p>
                    </div>
                </div>
            </Card>

            {/* Período */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Por quanto tempo? <strong>{months} meses</strong>
                </label>
                <div className="flex gap-2">
                    {[3, 6, 12].map((m) => (
                        <button
                            key={m}
                            onClick={() => setMonths(m)}
                            className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                                months === m
                                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            {m} meses
                        </button>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Total por pessoa: <strong>{formatCurrency(totalPerPerson)}</strong> ({months} meses)
                </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={() => {
                        // Criar link do WhatsApp com a mensagem
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
                        window.open(whatsappUrl, '_blank');
                    }}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
                >
                    <Share2 className="w-5 h-5" />
                    Compartilhar com Amigos
                </button>

                <WhatsAppButton
                    message={`Oi! Vi que vocês alugam mesa de sinuca. Somos ${friends} amigos interessados em dividir o aluguel (fica R$ ${perPerson.toFixed(0)} cada). Podemos conversar?`}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
                >
                    <MessageCircle className="w-5 h-5" />
                    Falar com a Empresa
                </WhatsAppButton>
            </div>

            {/* Garantias */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                    ✅ Contratos flexíveis • ✅ Sem multa se o grupo rachar • ✅ Manutenção inclusa
                </p>
            </div>
        </div>
    );
}