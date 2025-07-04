'use client';

import Link from 'next/link';
import { GetStartedButton } from '@/components/ui/get-started-button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden rounded-t-2xl md:rounded-t-3xl">
      {/* Background image */}
      <div className="absolute inset-0 z-0 rounded-t-2xl md:rounded-t-3xl">
        {/* Solid background */}
        <div className="absolute inset-0 bg-background rounded-t-2xl md:rounded-t-3xl" />
        
        {/* Hero background image */}
        <motion.div 
          className="absolute inset-0 rounded-t-2xl md:rounded-t-3xl"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage: `url('/images/gostosa-hero.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      </div>
      
      <div className="container relative z-10 flex items-center min-h-screen">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-lato)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seu futuro financeiro{' '}
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              depende de você.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed font-[family-name:var(--font-lato)] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Investir é simples. 
            Nós mostramos o caminho certo para você.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <GetStartedButton href="#iniciar-jornada" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}