import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | Million Capital - Nossa História',
  description: 'Conheça a história da Million Capital. Três jovens de Tapejara, RS, democratizando investimentos. Mais de 3 anos criando conteúdo sobre educação financeira.',
  keywords: 'million capital história, equipe million, tapejara rs, consultoria financeira, educação financeira, matheus gonçalves, nicolas cauduro, gabriel boff',
  openGraph: {
    title: 'Sobre a Million Capital | Nossa História',
    description: 'Três jovens de Tapejara, RS, que decidiram compartilhar conhecimento sobre investimentos. Mais de 3 anos criando conteúdo sobre educação financeira.',
    url: 'https://capitalmillion.com/sobre',
    siteName: 'Million Capital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre a Million Capital',
    description: 'Três jovens democratizando investimentos desde Tapejara, RS',
  },
  alternates: {
    canonical: 'https://capitalmillion.com/sobre',
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}