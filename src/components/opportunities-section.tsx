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
    <section className="relative overflow-hidden bg-background">
      {/* Glassmorphism card with "Mas calma..." */}
      <div className="container mx-auto px-4 pt-4 md:pt-6 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            <div className="relative z-10 text-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
                <span className="md:hidden">
                  <span className="text-white/90">Mas calma...</span>
                  <br />
                  <span className="text-white/90">a crise esconde </span>
                  <span className="text-primary">oportunidades!</span>
                </span>
                <span className="hidden md:inline">
                  <span className="text-white/90">Mas calma... a crise esconde </span>
                  <span className="text-primary">oportunidades!</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Golden background section */}
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