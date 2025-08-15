'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';

export function FinalCTA() {

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#151515] mb-4 font-[family-name:var(--font-lato)]">
                Pronto para transformar seu futuro?
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                O primeiro passo é sempre o mais importante. Comece sua jornada para a liberdade financeira agora.
              </p>

              <div className="flex justify-center md:justify-start">
                <GetStartedButton 
                  onClick={() => window.open('https://wa.me/5554996578874?text=Olá!%20Gostaria%20de%20começar%20minha%20jornada%20de%20investimentos%20com%20a%20Million%20Capital.', '_blank')}
                  className="py-4 bg-[#151515] text-white hover:bg-[#151515]/90 flex items-center gap-2 group"
                >
                  Começar agora
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </GetStartedButton>
              </div>
            </motion.div>

            {/* Right side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#151515] mb-6 text-center md:text-left">
                Por que começar hoje?
              </h3>
              
              <div className="space-y-3 max-w-sm md:mx-0 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold text-sm">1</span>
                  <p className="text-gray-700 text-sm">
                    Cada dia perdido é dinheiro que deixa de render
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold text-sm">2</span>
                  <p className="text-gray-700 text-sm">
                    A inflação não espera você se preparar
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold text-sm">3</span>
                  <p className="text-gray-700 text-sm">
                    Quanto antes começar, maior será seu patrimônio
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold text-sm">4</span>
                  <p className="text-gray-700 text-sm">
                    Sua aposentadoria depende das decisões de hoje
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}