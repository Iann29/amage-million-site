import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { LenisProvider } from "@/providers/lenis-provider";
import { ModernHeader } from "@/components/modern-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";
import { ModalProvider } from "@/contexts/modal-context";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://capitalmillion.com'),
  title: "Million Capital | Finanças sem complicação",
  description: "Democratizando o acesso a investimentos inteligentes. Educação financeira descomplicada para construir o futuro que você merece.",
  keywords: "investimentos, consultoria financeira, educação financeira, Million",
  openGraph: {
    title: "Million - Consultoria de Investimentos",
    description: "Democratizando o acesso a investimentos inteligentes",
    url: "https://capitalmillion.com",
    siteName: "Million",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="apple-mobile-web-app-title" content="Million" />
        <link rel="preload" href="/imgOtimized/mulher-hero.webp" as="image" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" href="/imgOtimized/hero-background-mobile.webp" as="image" type="image/webp" media="(max-width: 767px)" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.variable} ${lato.variable} font-sans antialiased`}>
        <StructuredData />
        <div style={{ overflowX: 'clip', width: '100%' }}>
          <ModalProvider>
            <LenisProvider>
              <ModernHeader />
              {children}
              <Footer />
              <WhatsAppButton />
            </LenisProvider>
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
