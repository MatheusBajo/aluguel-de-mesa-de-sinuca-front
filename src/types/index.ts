// ==================================================
// src/types/index.ts
export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    location: string;
    type: 'pf' | 'pj';
}

export interface FAQItem {
    question: string;
    answer: string;
    category?: 'pricing' | 'service' | 'delivery' | 'contract';
}

export interface Product {
    id: string;
    name: string;
    size: string;
    image: string;
    features: string[];
    idealFor: string;
}

export interface CalculatorResult {
    buyTotal: number;
    rentTotal: number;
    savings: number;
    savingsPercentage: number;
    breakEvenMonths: number;
}