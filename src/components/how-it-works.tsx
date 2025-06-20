'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCheck, FileText, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    title: 'Conheça seu perfil',
    description: 'Análise completa e gratuita para entender seus objetivos, medos e situação atual.',
  },
  {
    icon: FileText,
    title: 'Receba seu plano personalizado',
    description: 'Estratégia sob medida considerando sua realidade, sem fórmulas prontas ou genéricas.',
  },
  {
    icon: TrendingUp,
    title: 'Evolua com suporte contínuo',
    description: 'Acompanhamento próximo, ajustes quando necessário e educação constante.',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" ref={ref} className="py-24 bg-background">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Como <span className="font-semibold text-primary">funciona</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl">
            Não somos uma corretora. Somos seus mentores na jornada para a liberdade financeira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <div className="text-6xl font-light text-primary/20 mb-6">{index + 1}</div>
                
                {/* Icon */}
                <div className="w-12 h-12 mb-6">
                  <Icon className="w-full h-full text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.description}</p>
                
                {/* Subtle connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/20 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="border-t border-primary/10 pt-8 mt-16"
        >
          <p className="text-sm text-secondary text-center">
            Orientamos você sobre as melhores opções de investimento disponíveis em corretoras regulamentadas pela CVM.
          </p>
        </motion.div>
      </div>
    </section>
  );
}