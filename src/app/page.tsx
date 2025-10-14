// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Storytelling } from '@/components/sections/Storytelling';
import { Products } from '@/components/sections/Products';
import { Benefits } from '@/components/sections/Benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Header } from '@/components/layout/Header';
import { HeroHeader } from '@/components/layout/HeroHeader';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
    return (
        <>

            {/* Header principal que aparece ao scrollar */}
            <Header />

            <main className="min-h-screen">
                {/* 1. Hero emocional com GSAP */}
                <Hero />

                {/* 2. Storytelling (3 cenas) */}
                <Storytelling />

                {/* 3. Produto único */}
                <Products />

                {/* 4. Benefícios emocionais */}
                <Benefits />

                {/* 5. Como funciona (simples) */}
                <HowItWorks />

                {/* 6. Depoimentos (formato história) */}
                <Testimonials />

                {/* 7. FAQ (direto e honesto) */}
                <FAQ />

                {/* 8. CTA final */}
                <CTA />
            </main>
            <Footer />

            {/* Floating WhatsApp Button */}
            <WhatsAppButton variant="floating" type="pf" />
        </>
    );
}