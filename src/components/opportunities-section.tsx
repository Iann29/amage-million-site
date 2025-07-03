'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, BookOpen, Users, BarChart3, Building2, Wallet, ArrowRight } from 'lucide-react';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';
import { GlareCard } from '@/components/ui/glare-card';

const solutions = [
  {
    icon: BookOpen,
    title: "Educação Financeira Completa",
    description: "Conteúdo educativo sobre renda fixa, ações e fundos imobiliários para você entender cada modalidade.",
    highlight: "Conhecimento é poder"
  },
  {
    icon: BarChart3,
    title: "Análise de Mercado",
    description: "Estudos aprofundados sobre tendências e oportunidades em diferentes classes de ativos do mercado brasileiro.",
    highlight: "Visão estratégica"
  },
  {
    icon: Shield,
    title: "Gestão de Riscos",
    description: "Orientação sobre como diversificar e proteger seu patrimônio através de diferentes instrumentos financeiros.",
    highlight: "Proteção inteligente"
  },
  {
    icon: Users,
    title: "Acompanhamento Personalizado",
    description: "Suporte contínuo para esclarecer dúvidas e auxiliar na sua jornada de educação financeira.",
    highlight: "Sempre presente"
  }
];

export function OpportunitiesSection() {
  return (
    <section className="relative pt-2 md:pt-3 overflow-hidden">
      {/* Main title with banner */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-0 right-0 h-16 md:h-20 bg-primary/5 backdrop-blur-sm border-y border-primary/20"
        />
        
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10 py-4 md:py-5">
            <div className="text-xl sm:text-2xl md:text-4xl px-4">
              <span className="md:hidden">
                <BlurredStagger text="Mas calma..." />
                <br />
                <BlurredStagger text="a crise esconde oportunidades!" highlightWord="oportunidades" />
              </span>
              <span className="hidden md:inline">
                <BlurredStagger text="Mas calma... a crise esconde oportunidades!" highlightWord="oportunidades" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Golden background section - starts right after the banner */}
      <div className="bg-primary pb-16 md:pb-20">
        <div className="container mx-auto px-4 pt-16">
          {/* Secondary title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl text-background font-semibold">
              E como a Million vai te ajudar?
            </h3>
          </motion.div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto pb-8 place-items-center">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlareCard className="flex flex-col items-start justify-between p-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>
                <span className="text-primary font-semibold text-sm">
                  {solution.highlight}
                </span>
              </GlareCard>
            </motion.div>
          ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6"
          >
            <button className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
              Comece sua jornada agora
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}