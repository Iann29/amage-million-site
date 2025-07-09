import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { LenisProvider } from "@/providers/lenis-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { ModernHeader } from "@/components/modern-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
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
  title: "Million Capital | Finanças sem complicação",
  description: "Democratizando o acesso a investimentos inteligentes. Educação financeira descomplicada para construir o futuro que você merece.",
  keywords: "investimentos, consultoria financeira, educação financeira, Million",
  openGraph: {
    title: "Million - Consultoria de Investimentos",
    description: "Democratizando o acesso a investimentos inteligentes",
    url: "https://million.com.br",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="Million" />
      </head>
      <body className={`${inter.variable} ${lato.variable} font-sans antialiased`}>
        <AuthProvider>
          <LenisProvider>
            <ModernHeader />
            {children}
            <WhatsAppButton />
          </LenisProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
