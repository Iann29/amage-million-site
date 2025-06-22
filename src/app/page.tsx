import { Hero } from '@/components/hero';
import { WhyInvestSection } from '@/components/why-invest-section';
import { OpportunitiesSection } from '@/components/opportunities-section';
import { CalculatorBanner } from '@/components/calculator-banner';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyInvestSection />
        <OpportunitiesSection />
        <CalculatorBanner />
      </main>
      <Footer />
    </>
  );
}