'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Rocket, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function QuizBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left side - Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary text-sm font-medium mb-2 uppercase tracking-wider">
              Análise gratuita
            </p>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
              Descubra seu perfil de investidor
            </h3>
            <p className="text-secondary">
              Responda 8 perguntas simples e receba uma estratégia personalizada
            </p>
          </div>

          {/* Right side - CTA */}
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="text-primary font-medium flex items-center gap-2 group"
          >
            Fazer análise agora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}