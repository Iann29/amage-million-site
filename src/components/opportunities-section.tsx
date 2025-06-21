'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, BookOpen, Users } from 'lucide-react';

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
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Mas calma... a crise esconde <span className="text-primary">oportunidades!</span>
          </h2>
        </motion.div>

        {/* Secondary title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-left">
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
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3">
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