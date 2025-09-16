// src/app/not-found.tsx
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Página não encontrada
                </h2>
                <p className="text-gray-600 mb-6">
                    A página que você está procurando não existe ou foi movida.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                    <Home className="w-5 h-5" />
                    Voltar ao Início
                </Link>
            </div>
        </div>
    );
}