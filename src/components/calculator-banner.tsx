'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LeadCaptureModal } from './lead-capture-modal';
import Image from 'next/image';

export function CalculatorBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      
      <section className="relative py-16 md:py-20 -mt-8 md:-mt-16 bg-gradient-to-br from-background via-background to-primary/5 overflow-visible">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
            }}
          />
        </div>
        
        {/* Tourinho Bull - Na divisória das seções */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="hidden md:block absolute bottom-0 right-5 md:right-20 lg:right-32 w-64 md:w-80 lg:w-[450px] z-30"
        >
          <Image
            src="/images/Tourinhocalculator.svg"
            alt="Tourinho Bull"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Descubra o poder dos
                <span className="block text-primary font-bold">juros compostos</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg">
                Pequenos aportes mensais podem se transformar em uma fortuna
              </p>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Simular rendimentos
              </motion.button>
            </motion.div>
            
            {/* Spacer for tourinho */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}