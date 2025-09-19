// src/components/sections/Hero.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users, Shield, CheckCircle, Volume2, VolumeX } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';
import { ROICalculator } from '@/components/calculators/ROICalculator';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function Hero() {
    const [showCalculator, setShowCalculator] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
            {/* Background com gradiente e bolinhas decorativas */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50">
                {/* Bolinhas decorativas para textura */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-100/20 rounded-full blur-2xl" />

                {/* Pattern dots */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo Principal - SIMPLIFICADO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge simples */}
                        <Badge className="mb-6 bg-orange-50 text-orange-700 border-orange-200">
                            🎱 Aluguel de Mesa de Sinuca
                        </Badge>

                        {/* Headline simplificada */}
                        <h1 className="font-display font-bold text-5xl lg:text-7xl text-gray-900 mb-6">
                            Mesa de Sinuca
                            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                                Na Sua Casa
                            </span>
                        </h1>

                        {/* Subheadline curta e direta */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            <strong>R$ 250/mês.</strong> Teste por 6 meses.<br/>
                            Divida o valor. Cancele quando quiser.
                        </p>

                        {/* Trust badges simples */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm">
                                <Users className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium">Divida o valor</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium">Teste 6 meses</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm">
                                <Shield className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium">Manutenção inclusa</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <WhatsAppButton variant="hero" type="pf">
                                Quero Saber Mais
                            </WhatsAppButton>

                            <button
                                onClick={() => setShowCalculator(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all"
                            >
                                <Users className="w-6 h-6" />
                                Ver Economia
                            </button>
                        </div>

                        {/* Box de preços simplificado */}
                        <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg">
                            <div>
                                <p className="text-2xl font-bold text-gray-900">
                                    R$ 250<span className="text-sm font-normal text-gray-500">/mês</span>
                                </p>
                                <p className="text-xs text-gray-500">Dividindo por 4 = R$ 62,50 cada</p>
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
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                            {/* Vídeo com aspect ratio 16:9 */}
                            <div className="relative aspect-video">
                                <video
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/Billiard_Table_Cinematic_Video_Generation.mp4" type="video/mp4" />
                                    {/* Fallback para browsers que não suportam vídeo */}
                                    Seu navegador não suporta vídeo HTML5.
                                </video>

                                {/* Botão de mute/unmute */}
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="absolute bottom-4 right-4 bg-black/50 backdrop-blur text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Badge flutuante simplificado - posicionado para não sobrepor */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -top-6 -right-6 bg-green-500 text-white rounded-full px-4 py-3 shadow-lg"
                        >
                            <div className="text-center">
                                <p className="font-bold text-lg">R$ 250</p>
                                <p className="text-xs">por mês</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
                </motion.div>
            </div>

            {/* Calculator Dialog */}
            <Dialog open={showCalculator} onOpenChange={setShowCalculator}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <ROICalculator onClose={() => setShowCalculator(false)} />
                </DialogContent>
            </Dialog>
        </section>
    );
}