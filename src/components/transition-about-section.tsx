'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';

export function TransitionAboutSection() {
  return (
    <section className="relative -mt-20 md:-mt-32 pt-24 md:pt-36 pb-10 md:pb-14 bg-background overflow-hidden">
      {/* Diagonal grid pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 2px, transparent 2px)`,
            backgroundSize: '120px 120px',
            backgroundPosition: '0 0'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ei, antes de continuar...
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                que tal conhecer quem já está resolvendo esses problemas?
              </p>
            </div>

            <GetStartedButton 
              href="/sobre"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm md:text-base hover:bg-primary/90 hover:scale-105 group whitespace-nowrap"
            >
              Conheça a Million
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </GetStartedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}