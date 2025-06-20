'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="iniciar-jornada" ref={ref} className="py-32 bg-primary/5">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Pronto para <span className="font-semibold text-primary">começar</span>?
          </h2>
          
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
            Agende uma conversa sem compromisso e descubra como podemos 
            ajudar você a alcançar seus objetivos financeiros
          </p>

          <a
            href="https://wa.me/5511999999999?text=Olá! Vi o site da Million e quero agendar uma conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary font-medium hover:underline"
          >
            Agendar conversa →
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-12 border-t border-primary/10"
          >
            <p className="text-sm text-secondary">
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}