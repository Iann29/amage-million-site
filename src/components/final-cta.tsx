'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="iniciar-jornada" ref={ref} className="py-24 bg-[#1a1a1a]">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">
            Pronto para <span className="font-bold text-primary">começar</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Agende uma conversa sem compromisso e descubra como podemos ajudar
            <br />
            você a alcançar seus objetivos financeiros
          </p>

          <a
            href="https://wa.me/5511999999999?text=Olá! Vi o site da Million e quero agendar uma conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary text-lg md:text-xl font-medium hover:underline transition-all hover:text-primary/80"
          >
            Agendar conversa →
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-sm text-gray-500">
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}