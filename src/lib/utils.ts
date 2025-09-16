// ==================================================
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function generateWhatsAppLink(message: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}