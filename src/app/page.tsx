// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Storytelling } from '@/components/sections/Storytelling';
import { Products } from '@/components/sections/Products';
import { SeeInAction } from '@/components/sections/SeeInAction';
import { Benefits } from '@/components/sections/Benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
    return (
        <>
            {/* Header principal que aparece ao scrollar */}
            <Header />

            <main className="min-h-screen">
                {/* 1. Hero com vídeo */}
                <Hero />

                {/* 2. Storytelling (3 cenas) */}
                <Storytelling />

                {/* 3. Produto com thumbnails */}
                <Products />

                {/* 4. NOVA: Veja em Ação - Slider infinito */}
                <SeeInAction />

                {/* 5. Benefícios emocionais */}
                <Benefits />

                {/* 6. Como funciona (simples) */}
                <HowItWorks />

                {/* 7. Depoimentos (formato história) */}
                <Testimonials />

                {/* 8. FAQ (direto e honesto) */}
                <FAQ />

                {/* 9. CTA final */}
                <CTA />
            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <WhatsAppButton variant="floating" type="pf" />
        </>
    );
}