// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeColorMeta } from "@/components/ui/ThemeColorMeta";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Aluguel de Mesa de Sinuca",
    description: "Alugue mesa de sinuca profissional em São Paulo",
    icons: {
        icon: '/images/logo/logo-01-white.ico',
        shortcut: '/images/logo/logo-01-white.ico',
        apple: '/images/logo/logo-01-white.ico',
    },
};

// Viewport com safe-area para iOS
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // viewport-fit=cover garante que funciona com notch/dynamic island
    viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            {/* Meta theme-color inicial (será atualizado pelo ThemeColorMeta) */}
            <meta name="theme-color" content="#FFFFFF" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeColorMeta />
        {children}
        </body>
        </html>
    );
}