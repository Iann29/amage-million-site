import { Hero } from '@/components/hero';
import { WhyInvestSection } from '@/components/why-invest-section';
import { TransitionAboutSection } from '@/components/transition-about-section';
import { QuizBanner } from '@/components/quiz-banner';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyInvestSection />
        <TransitionAboutSection />
        <QuizBanner />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}