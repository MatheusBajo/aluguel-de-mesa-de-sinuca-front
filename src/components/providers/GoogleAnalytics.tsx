// src/components/providers/GoogleAnalytics.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/analytics';

export function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();
        pageview(url);
    }, [pathname, searchParams]);

    if (!process.env.NEXT_PUBLIC_GTM_ID) {
        return null;
    }

    return (
        <>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}