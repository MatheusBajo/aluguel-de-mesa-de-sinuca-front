// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    // Variáveis do .env
    const logoPath = process.env.NEXT_PUBLIC_LOGO_PATH || '/images/logo/logo-01.png';
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Aluguel de Mesa de Sinuca';
    const phone = process.env.NEXT_PUBLIC_PHONE || '5511999999999';
    const email = process.env.NEXT_PUBLIC_EMAIL || 'contato@alugueldemesadesinuca.com.br';

    // Formata telefone pra exibição
    const phoneFormatted = phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Image
                                src={logoPath}
                                alt="Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-400 mb-4">
                            Líder em locação de mesas de sinuca em São Paulo.
                            Qualidade profissional, preço justo.
                        </p>
                        {/* Social Links - DESABILITADO
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                        */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                                    Como Funciona
                                </a>
                            </li>
                            <li>
                                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                                    Vantagens
                                </a>
                            </li>
                            <li>
                                <a href="#mesas" className="text-gray-400 hover:text-white transition-colors">
                                    Nossas Mesas
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                                    Perguntas Frequentes
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Regions */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Regiões Atendidas</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/sao-paulo" className="text-gray-400 hover:text-white transition-colors">
                                    São Paulo Capital
                                </Link>
                            </li>
                            <li>
                                <Link href="/grande-sao-paulo" className="text-gray-400 hover:text-white transition-colors">
                                    Grande São Paulo
                                </Link>
                            </li>
                            <li>
                                <Link href="/sorocaba" className="text-gray-400 hover:text-white transition-colors">
                                    Sorocaba e Região
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-400" />
                                <a
                                    href={`tel:+${phone}`}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {phoneFormatted}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-400" />
                                <a
                                    href={`mailto:${email}`}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary-400" />
                                <span className="text-gray-400">Seg-Sex 9h às 18h</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                                <span className="text-gray-400">
                                    Atendemos SP, Grande SP e Sorocaba
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {siteName}. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6">
                            <a href="/termos" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Termos de Uso
                            </a>
                            <a href="/privacidade" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}