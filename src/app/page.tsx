import { Hero } from '@/components/hero';
// import { WhyInvestSection } from '@/components/why-invest-section';
// import { ProblemsTimelineNew } from '@/components/problems-timeline-new';
import { ProblemsScrollSection } from '@/components/problems-scroll-section';
import { ProblemsVisualTimeline } from '@/components/problems-visual-timeline';
import { OpportunitiesSection } from '@/components/opportunities-section';
import { PopularInvestmentsSection } from '@/components/popular-investments-section';
import { CalculatorBanner } from '@/components/calculator-banner';
import { AboutCTASection } from '@/components/about-cta-section';
import { EbooksSection } from '@/components/ebooks-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProblemsScrollSection />
        <OpportunitiesSection />
        <PopularInvestmentsSection />
        <CalculatorBanner />
        <AboutCTASection />
        <EbooksSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}