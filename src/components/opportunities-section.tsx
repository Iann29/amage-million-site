'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, BookOpen, Users } from 'lucide-react';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';

const solutions = [
  {
    icon: TrendingUp,
    title: "Facilitamos a sua entrada no mundo dos investimentos",
    description: "Transformamos conceitos complexos em passos simples e práticos para você começar hoje mesmo."
  },
  {
    icon: Shield,
    title: "Quebramos os mitos do mercado financeiro",
    description: "Desmistificamos as crenças que impedem você de investir e mostrar a verdade sobre o mercado."
  },
  {
    icon: BookOpen,
    title: "Educação financeira personalizada",
    description: "Conteúdo adaptado ao seu nível de conhecimento, do básico ao avançado."
  },
  {
    icon: Users,
    title: "Comunidade de investidores",
    description: "Conecte-se com pessoas que estão na mesma jornada e compartilhe experiências."
  }
];

export function OpportunitiesSection() {
  return (
    <section className="relative pt-2 md:pt-3 pb-12 md:pb-20 bg-background overflow-hidden">
      {/* Main title - Full width background */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 right-0 h-16 md:h-20 bg-primary/5 backdrop-blur-sm border-y border-primary/20"
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10 py-4 md:py-5">
          <div className="text-2xl md:text-4xl">
            <BlurredStagger text="Mas calma... a crise esconde oportunidades!" highlightWord="oportunidades" />
          </div>
        </div>

        {/* Secondary title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-8 text-center"
        >
          <h3 className="text-xl md:text-2xl">
            E como a Million vai te ajudar?
          </h3>
        </motion.div>

        {/* Solution cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}