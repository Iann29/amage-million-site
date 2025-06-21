'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LeadCaptureModal } from './lead-capture-modal';
import Image from 'next/image';

export function CalculatorBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-6 md:py-8 bg-gradient-to-br from-background via-background to-primary/5 overflow-visible">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        
        {/* Tourinho Bull */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="hidden md:block absolute bottom-4 md:bottom-0 lg:bottom-0 right-5 md:right-20 lg:right-32 w-56 md:w-80 lg:w-96 z-30"
        >
          <Image
            src="/images/Tourinhocalculator.svg"
            alt="Tourinho Bull"
            width={480}
            height={480}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        <div className="container max-w-6xl relative z-10">
          <div className="flex justify-center md:justify-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-light mb-4">
                Descubra o poder dos
                <span className="block text-primary font-semibold">juros compostos</span>
              </h2>
              
              <p className="text-lg md:text-xl text-secondary mb-8">
                Pequenos aportes mensais podem se transformar em uma fortuna
              </p>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Simular rendimentos
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}