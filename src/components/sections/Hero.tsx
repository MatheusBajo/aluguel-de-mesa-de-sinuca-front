// src/components/sections/Hero.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, TrendingUp, Clock, Shield, Volume2, VolumeX } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';
import { ROICalculator } from '@/components/calculators/ROICalculator';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function Hero() {
    const [showCalculator, setShowCalculator] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Vídeo mudo por padrão (melhor UX)

    const trustBadges = [
        { icon: <Star className="w-4 h-4" />, text: '4.9/5 Avaliação' },
        { icon: <Clock className="w-4 h-4" />, text: 'Entrega em 24h' },
        { icon: <Shield className="w-4 h-4" />, text: 'Garantia Total' },
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
            {/* Background com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo Principal */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge de destaque */}
                        <Badge className="mb-6 bg-orange-50 text-orange-700 border-orange-200">
                            🎯 #1 em Locação de Mesa de Sinuca em SP
                        </Badge>

                        {/* Headline principal - Corrigido o gradiente */}
                        <h1 className="font-display font-bold text-5xl lg:text-7xl text-gray-900 mb-6">
                            Mesa de Sinuca
                            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Profissional
              </span>
                            na Sua Casa
                        </h1>

                        {/* Subheadline focada em benefícios */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            <strong>Economize até 70%</strong> comparado à compra.
                            Mesas certificadas e revisadas, entrega em 24h,
                            sem burocracia ou caução. Cancele quando quiser.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {trustBadges.map((badge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-100"
                                >
                                    <span className="text-blue-600">{badge.icon}</span>
                                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <WhatsAppButton variant="hero" type="pf">
                                Quero Alugar Agora
                            </WhatsAppButton>

                            <button
                                onClick={() => setShowCalculator(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all"
                            >
                                <TrendingUp className="w-6 h-6" />
                                Ver Economia
                            </button>
                        </div>

                        {/* Preços destacados */}
                        <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <div className="flex-1">
                                <p className="text-sm text-gray-500 mb-1">Residencial</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    R$ 250<span className="text-lg font-normal text-gray-500">/mês</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Contratos de 6 meses</p>
                            </div>
                            <div className="w-px h-16 bg-gray-200" />
                            <div className="flex-1">
                                <p className="text-sm text-gray-500 mb-1">Empresarial</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    R$ 350<span className="text-lg font-normal text-gray-500">/mês</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Área de jogos corporativa</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vídeo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                            {/* Vídeo */}
                            <video
                                className="w-full h-auto"
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline // Importante para mobile
                                poster="/Mesa de Sinuca.png" // Imagem de fallback
                            >
                                <source src="/Billiard_Table_Cinematic_Video_Generation.mp4" type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>

                            {/* Botão de Mute/Unmute */}
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>

                            {/* Overlay com garantias */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="flex items-center justify-between text-white">
                                    <div>
                                        <p className="font-bold text-lg">Certificada & Revisada</p>
                                        <p className="text-sm opacity-90">Garantia de qualidade profissional</p>
                                    </div>
                                    <Badge className="bg-green-500 text-white border-0">
                                        ✓ Disponível
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Card flutuante com social proof */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">+247 clientes</p>
                                    <p className="text-xs text-gray-500">em São Paulo</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Seta indicando scroll */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-gray-400" />
                </motion.div>
            </div>

            {/* Modal da Calculadora */}
            <Dialog open={showCalculator} onOpenChange={setShowCalculator}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <ROICalculator onClose={() => setShowCalculator(false)} />
                </DialogContent>
            </Dialog>
        </section>
    );
}