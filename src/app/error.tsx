// ==================================================
// src/app/error.tsx - CORRIGIDO (faltava 'use client')
'use client'; // ← ESTA LINHA ESTAVA FALTANDO!

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ops! Algo deu errado
                </h2>
                <p className="text-gray-600 mb-6">
                    Encontramos um problema ao carregar a página.
                    Por favor, tente novamente ou entre em contato.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Tentar Novamente
                    </button>
                    <WhatsAppButton variant="inline" type="custom" message="Olá! Estou tendo problemas para acessar o site.">
                        Falar no WhatsApp
                    </WhatsAppButton>
                </div>
            </div>
        </div>
    );
}