// src/app/sitemap.ts - CORRIGIDO (sem export *)
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aluguel-de-mesa-de-sinuca-front.vercel.app';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/sao-paulo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/grande-sao-paulo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/sorocaba`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];
}