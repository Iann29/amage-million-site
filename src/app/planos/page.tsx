'use client';

import { motion } from 'framer-motion';
import { PricingSection } from '@/components/pricing-section';

export default function PlanosPage() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Faixa preta no topo da página */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-[#151515]" />
      
      <section className="relative pt-24 pb-0">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
          </motion.div>
        </div>
      </section>
      
      <div className="relative">
        <PricingSection />
      </div>
    </main>
  );
}