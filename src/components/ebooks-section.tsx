'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Star } from 'lucide-react';
import Image from 'next/image';

export function EbooksSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Material exclusivo para <span className="font-bold text-primary">acelerar</span> sua jornada
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ebooks Preview - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] flex items-center justify-center"
            >
              {/* Ebook 3 - Back */}
              <motion.div
                initial={{ rotate: -15, x: 60, y: 40 }}
                whileInView={{ rotate: -8, x: 60, y: 40 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute w-[240px] h-[320px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl"
              >
                <div className="p-6 flex flex-col h-full">
                  <BookOpen className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-white font-bold text-lg mb-2">Guia Fundos Imobiliários</h4>
                  <p className="text-gray-400 text-sm">O passo a passo completo</p>
                </div>
              </motion.div>

              {/* Ebook 2 - Middle */}
              <motion.div
                initial={{ rotate: 10, x: -30, y: 20 }}
                whileInView={{ rotate: 5, x: -30, y: 20 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute w-[240px] h-[320px] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-2xl backdrop-blur-sm border border-primary/20"
              >
                <div className="p-6 flex flex-col h-full">
                  <BookOpen className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-white font-bold text-lg mb-2">Ações para Iniciantes</h4>
                  <p className="text-gray-300 text-sm">Comece com segurança</p>
                </div>
              </motion.div>

              {/* Ebook 1 - Front */}
              <motion.div
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: -2, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute w-[260px] h-[340px] bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6 flex flex-col h-full relative">
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">MAIS VENDIDO</span>
                  </div>
                  <BookOpen className="w-10 h-10 text-background mb-4" />
                  <h4 className="text-background font-bold text-xl mb-2">Renda Fixa Descomplicada</h4>
                  <p className="text-background/80 text-sm mb-4">Seu primeiro investimento seguro</p>
                  <div className="mt-auto">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-background text-background" />
                      ))}
                    </div>
                    <p className="text-background/70 text-xs">+2.500 downloads</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Por que nossos ebooks são diferentes?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Enquanto outros te bombardeiam com termos técnicos e teorias complexas, nós criamos um 
                  caminho <span className="text-primary font-semibold">claro e direto</span> para você 
                  começar a investir ainda hoje. Cada página foi pensada para quem tem pressa de ver 
                  resultados, mas não quer correr riscos desnecessários.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Linguagem simples e objetiva</h4>
                    <p className="text-gray-400 text-sm">Sem jargões financeiros que mais confundem do que ajudam</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Exemplos práticos do dia a dia</h4>
                    <p className="text-gray-400 text-sm">Com valores reais e cenários que você vai enfrentar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Atualizações vitalícias</h4>
                    <p className="text-gray-400 text-sm">Comprou uma vez? Receba atualizações para sempre</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3 group mt-8"
              >
                <Download className="w-5 h-5" />
                Quero meu ebook agora
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}