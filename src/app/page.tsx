import { ModernHeader } from '@/components/modern-header';
import { Hero } from '@/components/hero';
import { WhyInvestSection } from '@/components/why-invest-section';
import { QuizBanner } from '@/components/quiz-banner';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <ModernHeader />
      <main>
        <Hero />
        <WhyInvestSection />
        <QuizBanner />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}