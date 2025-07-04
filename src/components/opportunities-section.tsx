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
    <div className="relative -mt-20">
        {/* Golden Circle Divider */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="w-36 h-36 bg-primary rounded-full flex items-center justify-center">
            <img 
              src="/images/divisória.svg" 
              alt="Million Logo" 
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>
        
        <section className="bg-primary pt-20 pb-20 md:pt-24 md:pb-24 rounded-t-2xl md:rounded-t-3xl rounded-b-2xl md:rounded-b-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
          
          {/* Dots pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl text-background font-bold">
              E como a <span className="text-background">Million</span> vai te ajudar?
            </h2>
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
      </section>
    </div>
  );
}