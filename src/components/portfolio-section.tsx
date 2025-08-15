'use client';

import { motion } from 'framer-motion';
import { Calendar, ChartBar, Target, Shield } from 'lucide-react';

const portfolioItems = [
  {
    year: "2023",
    return: "+127%",
    description: "Superamos o Ibovespa em mais de 10x",
    highlight: true,
    details: [
      "Foco em empresas de tecnologia",
      "Diversificação internacional",
      "Gestão ativa de risco"
    ]
  },
  {
    year: "2022",
    return: "+48%",
    description: "Proteção em ano de alta volatilidade",
    details: [
      "Hedge cambial efetivo",
      "Redução de exposição à renda variável",
      "Alocação em ativos defensivos"
    ]
  },
  {
    year: "2021",
    return: "+89%",
    description: "Aproveitamos o boom das commodities",
    details: [
      "Posições em mineradoras",
      "Exposição ao agronegócio",
      "Investimentos em energia"
    ]
  }
];

const strategies = [
  {
    icon: ChartBar,
    title: "Análise Fundamentalista",
    description: "Estudo profundo de balanços e indicadores"
  },
  {
    icon: Shield,
    title: "Gestão de Risco",
    description: "Proteção do capital em momentos de volatilidade"
  },
  {
    icon: Target,
    title: "Foco no Longo Prazo",
    description: "Construção consistente de patrimônio"
  }
];

export function PortfolioSection() {
  return (
    <section className="relative py-20 bg-[#151515] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-lato)]">
              Nossa <span className="text-primary">Performance</span> Comprovada
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Resultados reais de nossa carteira exclusiva, auditados e transparentes
            </p>
          </motion.div>

          {/* Performance Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-6 ${
                  item.highlight 
                    ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30' 
                    : 'bg-white/5 border border-gray-800'
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-3 right-6">
                    <span className="bg-primary text-background px-3 py-1 rounded-full text-xs font-semibold">
                      DESTAQUE
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{item.year}</span>
                  <Calendar className="w-4 h-4 text-gray-500" />
                </div>
                
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {item.return}
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strategy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white/5 to-white/3 rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Nossa Estratégia de Investimento
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      {strategy.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {strategy.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Quer ter acesso à nossa carteira exclusiva e recomendações?
            </p>
            <button className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Conhecer o Plano Start
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}