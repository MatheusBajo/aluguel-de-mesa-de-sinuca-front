// src/app/layout.tsx - COM SEO COMPLETO
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeColorMeta } from "@/components/ui/ThemeColorMeta";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alugueldemesadesinuca.com.br';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Aluguel de Mesa de Sinuca';

export const metadata: Metadata = {
    title: {
        default: "Aluguel de Mesa de Sinuca SP | R$ 295/mês | Contratos 6 meses",
        template: `%s | ${siteName}`
    },
    description: "Alugue mesa de sinuca profissional em São Paulo, Grande SP e Sorocaba. R$ 295/mês para residências. Entrega, montagem e manutenção inclusos. Contratos flexíveis de 6 meses.",
    keywords: [
        "aluguel mesa sinuca",
        "mesa sinuca são paulo",
        "locação mesa bilhar",
        "aluguel mesa sinuca sp",
        "mesa sinuca residencial",
        "aluguel mesa sinuca grande sp",
        "mesa sinuca sorocaba",
        "locação mesa sinuca",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteUrl,
        siteName: siteName,
        title: "Aluguel de Mesa de Sinuca SP | R$ 295/mês",
        description: "Transforme sua casa no point da galera. Alugue mesa de sinuca profissional por R$ 295/mês. Entrega, montagem e manutenção inclusos.",
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'Aluguel de Mesa de Sinuca em São Paulo',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Aluguel de Mesa de Sinuca SP | R$ 295/mês",
        description: "Transforme sua casa no point. Mesa de sinuca profissional por R$ 295/mês.",
        images: [`${siteUrl}/og-image.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/images/logo/logo-01-white.ico',
        shortcut: '/images/logo/logo-01-white.ico',
        apple: '/images/logo/logo-01-white.ico',
    },
    verification: {
        // google: 'seu-codigo-google-search-console',
        // yandex: 'seu-codigo-yandex',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
        { media: '(prefers-color-scheme: dark)', color: '#252525' }
    ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            <ThemeColorMeta />
            <SchemaOrg />
            {/* Preconnect para melhor performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        </body>
        </html>
    );
}