// src/components/sections/Hero.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users, Shield, CheckCircle, Volume2, VolumeX, Play } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/badge';
import { ROICalculator } from '@/components/calculators/ROICalculator';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function Hero() {
    const [showCalculator, setShowCalculator] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Vídeo Background Fullscreen */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/Billiard_Table_Cinematic_Video_Generation.mp4" type="video/mp4" />
                </video>

                {/* Overlay escuro para dar contraste */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Gradiente adicional de baixo pra cima */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Botão de Mute flutuante */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-24 right-4 z-20 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/20"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Conteúdo Principal */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <Badge className="mb-6 bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-2">
                        🎱 Aluguel de Mesa de Sinuca em SP
                    </Badge>

                    {/* Headline */}
                    <h1 className="font-display font-bold text-5xl lg:text-7xl xl:text-8xl text-white mb-6 leading-tight">
                        Mesa de Sinuca
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            Na Sua Casa
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        <strong>R$ 250/mês.</strong> Teste por 6 meses.
                        <br className="hidden sm:block" />
                        Divida o valor com amigos. Cancele quando quiser.
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                        >
                            <Users className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium text-white">Divida o valor</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                        >
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-white">Teste 6 meses</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                        >
                            <Shield className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-white">Manutenção inclusa</span>
                        </motion.div>
                    </div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    >
                        <WhatsAppButton
                            variant="hero"
                            type="pf"
                            className="bg-green-500 hover:bg-green-600 text-white border-0"
                        >
                            <span className="flex items-center gap-2">
                                💬 Quero Saber Mais
                            </span>
                        </WhatsAppButton>

                        <button
                            onClick={() => setShowCalculator(true)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            <Users className="w-6 h-6" />
                            Ver Economia
                        </button>
                    </motion.div>

                    {/* Box de preço simplificado */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
                    >
                        <div className="text-left">
                            <p className="text-3xl font-bold text-white">
                                R$ 250<span className="text-sm font-normal text-gray-300">/mês</span>
                            </p>
                            <p className="text-xs text-gray-300">Dividindo por 4 = R$ 62,50 cada</p>
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
                <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
            </motion.div>

            {/* Calculator Dialog */}
            <Dialog open={showCalculator} onOpenChange={setShowCalculator}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <ROICalculator onClose={() => setShowCalculator(false)} />
                </DialogContent>
            </Dialog>
        </section>
    );
}