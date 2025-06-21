import { Hero } from '@/components/hero';
import { WhyInvestSection } from '@/components/why-invest-section';
import { CalculatorBanner } from '@/components/calculator-banner';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyInvestSection />
        <CalculatorBanner />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}