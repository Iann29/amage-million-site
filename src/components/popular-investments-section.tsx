'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const investments = [
  {
    category: "Renda Fixa",
    description: "Investimentos com rentabilidade previsível e menor risco",
    products: [
      {
        name: "CDB, LCI e LCA",
        description: "Certificados de Depósito Bancário e Letras de Crédito isentas de IR para pessoa física"
      },
      {
        name: "CRI e CRA",
        description: "Certificados de Recebíveis Imobiliários e do Agronegócio, também isentos de IR"
      },
      {
        name: "Debêntures",
        description: "Títulos de dívida emitidos por empresas para captar recursos"
      },
      {
        name: "Letra de Câmbio",
        description: "Título de crédito emitido por financeiras com rentabilidade atrativa"
      },
      {
        name: "Letra Financeira",
        description: "Título de renda fixa para investimentos acima de R$ 150 mil"
      }
    ]
  },
  {
    category: "Renda Variável",
    description: "Investimentos com potencial de maior retorno e volatilidade",
    products: [
      {
        name: "Ações",
        description: "Participação no capital de empresas listadas na bolsa"
      },
      {
        name: "Fundos Imobiliários",
        description: "Investimento em imóveis através de cotas negociadas na bolsa"
      },
      {
        name: "ETFs",
        description: "Fundos que replicam índices e são negociados como ações"
      },
      {
        name: "BDRs",
        description: "Certificados de ações estrangeiras negociados no Brasil"
      },
      {
        name: "Fiagro",
        description: "Fundos de investimento nas cadeias produtivas do agronegócio"
      },
      {
        name: "Mercado Futuro",
        description: "Contratos de compra e venda futura de ativos"
      },
      {
        name: "Produtos Estruturados",
        description: "Combinação de ativos para estratégias personalizadas"
      }
    ]
  },
  {
    category: "Previdência Privada",
    description: "Planejamento de longo prazo com benefícios fiscais",
    products: [
      {
        name: "PGBL",
        description: "Plano Gerador de Benefício Livre, ideal para quem faz declaração completa do IR"
      },
      {
        name: "VGBL",
        description: "Vida Gerador de Benefício Livre, indicado para declaração simplificada"
      }
    ]
  }
];

export function PopularInvestmentsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl">
            Conheça os <span className="text-primary">investimentos</span><br className="md:hidden" /> mais populares do mercado
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {investments.map((investment, index) => (
            <motion.div
              key={investment.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(investment.category)}
                className="w-full px-6 py-5 flex items-center justify-between bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-200"
              >
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {investment.category}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {investment.description}
                  </p>
                </div>
                <div className="text-primary">
                  {expandedCategory === investment.category ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === investment.category ? "auto" : 0,
                  opacity: expandedCategory === investment.category ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-[#0d0d0d] grid grid-cols-1 md:grid-cols-2 gap-4">
                  {investment.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: expandedCategory === investment.category ? 1 : 0,
                        x: expandedCategory === investment.category ? 0 : -20
                      }}
                      transition={{ duration: 0.3, delay: productIndex * 0.05 }}
                      className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
                    >
                      <h4 className="text-primary font-semibold mb-2">
                        {product.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}