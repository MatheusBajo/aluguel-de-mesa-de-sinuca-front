/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true,
    },

    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig;

// // next.config.js
// // CORREÇÃO: Remover swcMinify (não existe mais no Next.js 15)
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//
//     output: 'export', // ← ADICIONA ESSA LINHA (crucial pro export estático)
//
//
//     images: {
//         unoptimized: true, // ← NECESSÁRIO pro export estático
//         domains: ['localhost', 'aluguel-de-mesa-de-sinuca-front.vercel.app'],
//         formats: ['image/avif', 'image/webp'],
//     },
//     compress: true,
//     poweredByHeader: false,
//     reactStrictMode: true,
//     // swcMinify: true, ← REMOVA ESTA LINHA
//
//     // experimental: {
//     //     optimizeCss: true,
//     // },
//     eslint: {
//         ignoreDuringBuilds: true, // ← Ignora ESLint
//     },
//     typescript: {
//         ignoreBuildErrors: true, // ← Ignora TypeScript errors
//     },
//
//     async headers() {
//         return [
//             {
//                 source: '/:path*',
//                 headers: [
//                     {
//                         key: 'X-DNS-Prefetch-Control',
//                         value: 'on'
//                     },
//                     {
//                         key: 'Strict-Transport-Security',
//                         value: 'max-age=63072000; includeSubDomains; preload'
//                     },
//                     {
//                         key: 'X-Content-Type-Options',
//                         value: 'nosniff'
//                     },
//                 ],
//             },
//         ];
//     },
//
//     async redirects() {
//         return [
//             {
//                 source: '/whatsapp',
//                 destination: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}`,
//                 permanent: false,
//             },
//         ];
//     },
// }
//
// module.exports = nextConfig;