'use client';

import { motion } from 'framer-motion';
import { PricingSection } from '@/components/pricing-section';

export default function PlanosPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Nosso <span className="text-primary font-bold">Plano</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Investimento que transforma sua relação com o dinheiro
            </p>
          </motion.div>
        </div>
      </section>
      
      <PricingSection />
    </main>
  );
}