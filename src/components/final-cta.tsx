'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#151515] mb-4">
                Pronto para transformar seu futuro?
              </h2>
              <p className="text-gray-600 mb-8">
                O primeiro passo é sempre o mais importante. Comece sua jornada para a liberdade financeira agora.
              </p>

              <button
                onClick={() => window.location.href = '#contato'}
                className="px-8 py-4 bg-[#151515] text-white rounded-lg font-medium hover:bg-[#151515]/90 transition-all duration-300 flex items-center gap-2 group"
              >
                Começar agora
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Right side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-8"
            >
              <h3 className="text-xl font-bold text-[#151515] mb-6">
                Por que começar hoje?
              </h3>
              
              <div className="space-y-3">
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