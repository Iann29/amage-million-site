'use client';

import { GetStartedButton } from '@/components/ui/get-started-button';
import { motion } from 'framer-motion';
import { MarketData } from '@/components/market-data';
import Image from 'next/image';

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
          className="hidden md:block absolute inset-0 rounded-t-none md:rounded-t-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/imgOtimized/mulher-hero.webp"
            alt="Mulher investidora - Hero background"
            fill
            priority
            unoptimized={true}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        {/* Mobile background */}
        <motion.div 
          className="md:hidden absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/imgOtimized/hero-background-mobile.webp"
            alt="Hero background mobile"
            fill
            priority
            unoptimized={true}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>
      
      {/* Market Data Sidebar */}
      <MarketData />
      
      <div className="container relative z-10 flex items-center justify-center md:justify-start h-full md:min-h-screen">
        <motion.div 
          className="max-w-2xl text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-lato)]">
            Seu futuro financeiro{' '}
            <span className="text-primary">
              depende de você.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed font-[family-name:var(--font-lato)] max-w-xl">
            Investir é simples. 
            Nós mostramos o caminho certo para você.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <GetStartedButton href="#contato" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}