'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-primary mb-16"
          >
            Parabéns
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 mb-16"
          >
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              Você acaba de dar o primeiro e mais importante passo 
              para transformar sua vida financeira.
            </p>

            <div className="w-24 h-1 bg-primary mx-auto my-8"></div>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Enquanto 89% dos brasileiros continuam perdendo dinheiro para a inflação, 
              você escolheu fazer diferente. Escolheu tomar o controle.
            </p>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Em breve, nossa equipe entrará em contato com um plano personalizado 
              baseado no seu perfil. Prepare-se para descobrir como multiplicar 
              seu patrimônio de forma inteligente e segura.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-xl text-primary font-medium">
              Sua jornada para a liberdade financeira começa agora.
            </p>

            <Link href="/">
              <button className="px-12 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-300 text-lg">
                Voltar ao início
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}