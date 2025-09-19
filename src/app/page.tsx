// src/app/page.tsx
// Este arquivo substitui o template padrão do Next.js
// Delete todo o conteúdo original e cole este código

import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { Products } from '@/components/sections/Products';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
      <>
        <Header />
        <main className="min-h-screen">
            <Hero />
            <Products />
            <HowItWorks />
            <Benefits />
            <Testimonials />
            <FAQ />
            <CTA />
        </main>
        <Footer />
        {/* Floating WhatsApp Button */}
        <WhatsAppButton variant="floating" type="pf" />
      </>
  );
}
