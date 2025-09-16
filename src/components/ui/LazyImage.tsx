// src/components/ui/LazyImage.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface LazyImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

export function LazyImage({
                              src,
                              alt,
                              width = 800,
                              height = 600,
                              className,
                              priority = false
                          }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { elementRef, isVisible } = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true,
    });

    return (
        <div ref={elementRef} className={cn('relative overflow-hidden', className)}>
            {(!isVisible && !priority) ? (
                <div className="w-full h-full bg-gray-200 animate-pulse" />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={cn(
                        'transition-opacity duration-500',
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    )}
                    onLoad={() => setIsLoaded(true)}
                    priority={priority}
                />
            )}
        </div>
    );
}
