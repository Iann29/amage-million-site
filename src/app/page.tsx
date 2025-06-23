import { Hero } from '@/components/hero';
import { WhyInvestSection } from '@/components/why-invest-section';
import { OpportunitiesSection } from '@/components/opportunities-section';
import { PopularInvestmentsSection } from '@/components/popular-investments-section';
import { CalculatorBanner } from '@/components/calculator-banner';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyInvestSection />
        <OpportunitiesSection />
        <PopularInvestmentsSection />
        <CalculatorBanner />
      </main>
      <Footer />
    </>
  );
}