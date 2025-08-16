'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/contexts/modal-context';
import { GetStartedButton } from './ui/get-started-button';
import Image from 'next/image';

export function CalculatorBanner() {
  const { openModal } = useModal();

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
          transition={{ duration: 0.4, type: "spring" }}
          className="hidden md:block absolute bottom-0 right-5 md:right-20 lg:right-5 w-64 md:w-80 lg:w-[450px] z-30"
        >
          <Image
            src="/imgOtimized/Tourinhocalculator.webp"
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
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-lato)]">
                Descubra o poder dos
                <span className="block text-primary">juros compostos</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg">
                Pequenos aportes mensais podem se transformar em uma fortuna
              </p>

              <GetStartedButton onClick={() => openModal('lead-capture')}>
                Simular rendimentos
              </GetStartedButton>
            </motion.div>
            
            {/* Spacer for tourinho */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>
    </>
  );
}