import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plano Start | Million Capital - Consultoria de Investimentos',
  description: 'Plano Start Million Capital: R$ 149,90 setup + R$ 69,90/mês. Acompanhamento personalizado, carteira exclusiva, grupo VIP. Resultados comprovados +127% em 2023.',
  keywords: 'plano start, consultoria investimentos, acompanhamento personalizado, carteira exclusiva million, grupo vip investimentos, abertura conta corretora',
  openGraph: {
    title: 'Plano Start | Million Capital',
    description: 'Seu primeiro passo rumo à liberdade financeira. Acompanhamento personalizado e carteira exclusiva com resultados comprovados.',
    url: 'https://capitalmillion.com/planos',
    siteName: 'Million Capital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano Start | Million Capital',
    description: 'Consultoria de investimentos com acompanhamento personalizado',
  },
  alternates: {
    canonical: 'https://capitalmillion.com/planos',
  },
};

export default function PlanosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}