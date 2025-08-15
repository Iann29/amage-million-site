export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Million Capital",
    "description": "Democratizando o acesso a investimentos inteligentes. Educação financeira descomplicada para construir o futuro que você merece.",
    "url": "https://capitalmillion.com",
    "logo": "https://capitalmillion.com/images/logo-million.svg",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tapejara",
        "addressRegion": "RS",
        "addressCountry": "BR"
      }
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Matheus Gonçalves"
      },
      {
        "@type": "Person",
        "name": "Nicolas Cauduro"
      },
      {
        "@type": "Person",
        "name": "Gabriel Boff"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/million.capital"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5554996578874",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Consultoria de Investimentos - Plano Start",
    "description": "Acompanhamento personalizado para iniciantes em investimentos. Setup completo, carteira exclusiva e grupo VIP.",
    "provider": {
      "@type": "Organization",
      "name": "Million Capital"
    },
    "areaServed": "BR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Consultoria",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Start"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o Plano Start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Plano Start inclui acompanhamento personalizado, abertura de conta em corretora, definição do perfil de investidor, composição de carteira ideal e acesso à Carteira Exclusiva Million."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o valor do Plano Start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Plano Start tem taxa única de R$ 149,90 para setup inicial e mensalidade de R$ 69,90 para acompanhamento contínuo."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}