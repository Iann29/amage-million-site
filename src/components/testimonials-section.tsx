'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  // Estrutura básica - será preenchida depois
  const testimonials = [
    {
      id: 1,
      name: "Cliente 1",
      role: "Investidor",
      content: "Depoimento será adicionado aqui",
      rating: 5,
      image: ""
    },
    {
      id: 2,
      name: "Cliente 2",
      role: "Investidor",
      content: "Depoimento será adicionado aqui",
      rating: 5,
      image: ""
    },
    {
      id: 3,
      name: "Cliente 3",
      role: "Investidor",
      content: "Depoimento será adicionado aqui",
      rating: 5,
      image: ""
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-primary/5">
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
            O que dizem nossos <span className="font-bold text-primary">investidores</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Histórias reais de quem já está trilhando o caminho do sucesso financeiro
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-muted/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          * Seção em construção - Depoimentos reais serão adicionados em breve
        </motion.p>
      </div>
    </section>
  );
}