'use client';

import { GetStartedButton } from '@/components/ui/get-started-button';
import { motion } from 'framer-motion';
import { MarketData } from '@/components/market-data';

export function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] md:min-h-screen overflow-hidden rounded-t-none md:rounded-t-3xl">
      {/* Background image */}
      <div className="absolute inset-0 z-0 rounded-t-none md:rounded-t-3xl">
        {/* Solid background */}
        <div className="absolute inset-0 bg-background rounded-t-none md:rounded-t-3xl" />
        
        {/* Hero background image */}
        {/* Desktop background */}
        <motion.div 
          className="hidden md:block absolute inset-0 rounded-t-none md:rounded-t-3xl"
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
        {/* Mobile background */}
        <motion.div 
          className="md:hidden absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage: `url('/images/hero-background-mobile.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      </div>
      
      {/* Market Data Sidebar */}
      <MarketData />
      
      <div className="container relative z-10 flex items-center justify-center md:justify-start h-full md:min-h-screen">
        <motion.div 
          className="max-w-2xl text-center md:text-left"
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
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <GetStartedButton href="#contato" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}