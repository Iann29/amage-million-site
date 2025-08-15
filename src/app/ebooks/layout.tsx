import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ebooks Financeiros | Million Capital - Em Breve',
  description: 'Ebooks Million Capital em breve. Conteúdo exclusivo sobre educação financeira: Economia Sem Complicação e Termos do Mercado Financeiro. Material de qualidade.',
  keywords: 'ebooks financeiros, educação financeira, economia sem complicação, termos mercado financeiro, material educativo investimentos, million capital',
  openGraph: {
    title: 'Ebooks Financeiros | Million Capital',
    description: 'Conteúdos exclusivos para transformar sua jornada financeira. Material de qualidade, direto ao ponto e com linguagem simples.',
    url: 'https://capitalmillion.com/ebooks',
    siteName: 'Million Capital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebooks Financeiros | Million Capital',
    description: 'Conteúdo exclusivo sobre educação financeira em breve',
  },
  alternates: {
    canonical: 'https://capitalmillion.com/ebooks',
  },
};

export default function EbooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}