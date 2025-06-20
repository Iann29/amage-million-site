'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const withoutConsultancy = [
  'Perdido entre milhares de opções',
  'Decisões baseadas em emoção',
  'Seguindo dicas de influencers',
  'Sem estratégia clara',
  'Aprendendo com erros caros',
];

const withConsultancy = [
  'Estratégia clara e personalizada',
  'Decisões fundamentadas em análise',
  'Educação financeira de verdade',
  'Acompanhamento profissional',
  'Evolução consistente e segura',
];

export function WhyConsultancy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Investir sozinho vs. investir com orientação
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Consultancy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-[#1F1515] border border-destructive/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-destructive">Sem consultoria</h3>
            <ul className="space-y-4">
              {withoutConsultancy.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-secondary">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Consultancy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1815] border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Com a Million Street</h3>
            <ul className="space-y-4">
              {withConsultancy.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="relative">
            <motion.div
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="w-12 h-12 text-primary" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-primary/20 blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}