// src/components/layout/TopBanner.tsx
'use client';

export function TopBanner() {
    const text = "🎉 Procura para festa ou evento? Clique aqui e conheça nosso serviço especializado!";

    return (
        <div className="fixed top-0 left-0 right-0 bg-black text-white py-2 overflow-hidden z-[60]">
            <a
                href="https://alugueldegames.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition-colors"
            >
                <div className="flex animate-scroll">
                    {/* Duplica o texto 8 vezes pra garantir loop perfeito */}
                    {[...Array(8)].map((_, i) => (
                        <span key={i} className="inline-flex items-center whitespace-nowrap text-sm font-medium px-8">
                            {text}
                        </span>
                    ))}
                </div>
            </a>

            <style jsx>{`
                @keyframes scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    will-change: transform;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}