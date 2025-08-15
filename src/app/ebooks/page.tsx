'use client';

import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react';

export default function EbooksPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-primary/10 rounded-full"
          >
            <BookOpen className="w-12 h-12 text-primary" />
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ebooks <span className="text-primary">em breve</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estamos preparando conteúdos exclusivos para transformar sua jornada financeira. 
            Material de qualidade, direto ao ponto e com linguagem simples.
          </p>


          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold"
          >
            <Clock className="w-5 h-5" />
            Lançamento em breve
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}