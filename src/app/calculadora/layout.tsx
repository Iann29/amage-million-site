import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Investimentos | Million Capital',
  description: 'Calculadora gratuita de investimentos Million Capital. Simule rendimentos, compare cenários e projete seu futuro financeiro. Ferramenta completa para planejar investimentos.',
  keywords: 'calculadora investimentos, simulador rendimentos, projeção investimentos, calculadora financeira, planejamento financeiro, rentabilidade investimentos',
  openGraph: {
    title: 'Calculadora de Investimentos | Million Capital',
    description: 'Simule seus investimentos e projete seu futuro financeiro com nossa calculadora gratuita. Ferramenta completa para planejar seus investimentos.',
    url: 'https://capitalmillion.com/calculadora',
    siteName: 'Million Capital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Investimentos | Million Capital',
    description: 'Simule seus investimentos e projete seu futuro financeiro',
  },
  alternates: {
    canonical: 'https://capitalmillion.com/calculadora',
  },
};

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}