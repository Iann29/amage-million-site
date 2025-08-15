import { Metadata } from 'next';
import { Hero } from '@/components/hero';
// import { WhyInvestSection } from '@/components/why-invest-section';
// import { ProblemsTimelineNew } from '@/components/problems-timeline-new';
// import { ProblemSection } from '@/components/problem-section'; // Lazy load apenas quando necessário
import { ProblemsScrollSection } from '@/components/problems-scroll-section';
import { OpportunitiesSection } from '@/components/opportunities-section';
import { PopularInvestmentsSection } from '@/components/popular-investments-section';
import { CalculatorBanner } from '@/components/calculator-banner';
import { AboutCTASection } from '@/components/about-cta-section';
import { EbooksSection } from '@/components/ebooks-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'Million Capital | Finanças sem complicação',
  description: 'Democratizando o acesso a investimentos inteligentes. Consultoria especializada, educação financeira descomplicada e resultados comprovados. +127% em 2023.',
  keywords: 'educação financeira, investimentos, consultoria financeira, bolsa de valores, renda fixa, fundos imobiliários, million capital, tapejara rs',
  openGraph: {
    title: 'Million Capital | Educação Financeira e Investimentos',
    description: 'Democratizando o acesso a investimentos inteligentes. Consultoria especializada e educação financeira descomplicada.',
    url: 'https://capitalmillion.com',
    siteName: 'Million Capital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Million Capital | Educação Financeira',
    description: 'Democratizando o acesso a investimentos inteligentes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://capitalmillion.com',
  },
};
export default function Home() {
  return (
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
  );
}