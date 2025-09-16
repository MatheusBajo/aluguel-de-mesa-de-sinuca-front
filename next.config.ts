// next.config.js (atualizado com otimizações)
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'seu-dominio.com.br'],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,

    // Otimizações para Core Web Vitals
    experimental: {
        optimizeCss: true,
    },

    // Headers de segurança e cache
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                ],
            },
            {
                source: '/fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

    // Redirects para WWW ou non-WWW
    async redirects() {
        return [
            {
                source: '/whatsapp',
                destination: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
                permanent: false,
            },
        ];
    },
}

module.exports = nextConfig;