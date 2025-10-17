// src/components/seo/SchemaOrg.tsx
'use client';

export function SchemaOrg() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alugueldemesadesinuca.com.br';
    const phone = process.env.NEXT_PUBLIC_PHONE || '5511920060589';
    const email = process.env.NEXT_PUBLIC_EMAIL || 'contato@alugueldemesadesinuca.com.br';

    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Aluguel de Mesa de Sinuca",
        "description": "Aluguel de mesas de sinuca profissionais em São Paulo, Grande SP e Sorocaba. Contratos flexíveis a partir de 6 meses.",
        "url": siteUrl,
        "telephone": `+${phone}`,
        "email": email,
        "priceRange": "R$ 295 - R$ 350",
        "image": `${siteUrl}/images/produtos/mesa-de-sinuca-padrao/16x09-01-frontal-mesa-de-sinuca.png`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5505,
            "longitude": -46.6333
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "São Paulo"
            },
            {
                "@type": "City",
                "name": "Grande São Paulo"
            },
            {
                "@type": "City",
                "name": "Sorocaba"
            }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ]
    };

    // Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Aluguel de Mesa de Sinuca",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Aluguel de Mesa de Sinuca"
        },
        "areaServed": {
            "@type": "State",
            "name": "São Paulo"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Aluguel",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Aluguel Residencial",
                        "description": "Mesa profissional para residências com entrega e montagem"
                    },
                    "price": "295",
                    "priceCurrency": "BRL"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Aluguel Empresarial",
                        "description": "Mesa profissional para empresas e condomínios"
                    },
                    "price": "350",
                    "priceCurrency": "BRL"
                }
            ]
        }
    };

    // Product Schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Mesa de Sinuca Profissional",
        "description": "Mesa de sinuca 1,90m x 1,20m com kit completo",
        "image": `${siteUrl}/images/produtos/mesa-de-sinuca-padrao/16x09-01-frontal-mesa-de-sinuca.png`,
        "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "295",
            "highPrice": "350",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
        }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto custa alugar uma mesa de sinuca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "R$ 295/mês para residências e R$ 350/mês para empresas. Contratos a partir de 6 meses com entrega e montagem inclusos."
                }
            },
            {
                "@type": "Question",
                "name": "Quais regiões vocês atendem?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Atendemos São Paulo capital, Grande São Paulo (ABC, Guarulhos, Osasco) e Sorocaba e região."
                }
            },
            {
                "@type": "Question",
                "name": "A manutenção está inclusa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, a manutenção preventiva está inclusa no valor do aluguel sem custo adicional."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}