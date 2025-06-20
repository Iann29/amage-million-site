'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    age: 28,
    avatar: '👩',
    quote: 'Finalmente entendi que investir não é para ricos. Com apenas R$ 50 por mês, já tenho minha reserva crescendo!',
    story: 'Professora que sempre achou investimentos complicados demais. Após 6 meses de consultoria, já tem sua primeira reserva de emergência e investe mensalmente.',
    achievements: ['Criou primeira reserva de emergência', 'Investe R$ 200/mês', 'Quitou cartão de crédito'],
  },
  {
    name: 'Carlos Mendes',
    age: 35,
    avatar: '👨',
    quote: 'Saí das dívidas e hoje invisto o que antes pagava de juros. A diferença na minha vida é absurda!',
    story: 'Endividado há anos, achava impossível investir. Com orientação adequada, organizou as finanças e hoje constrói patrimônio.',
    achievements: ['Saiu das dívidas em 8 meses', 'Economiza 20% da renda', 'Planeja aposentadoria'],
  },
  {
    name: 'Mariana Costa',
    age: 42,
    avatar: '👩',
    quote: 'Meu maior arrependimento é não ter começado antes. Mas agora estou no caminho certo!',
    story: 'Empreendedora que sempre "deixava para depois". Descobriu que nunca é tarde para começar e hoje diversifica seus investimentos.',
    achievements: ['Começou a investir aos 40', 'Diversificou investimentos', 'Meta: liberdade aos 55'],
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias reais de transformação
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Veja como pessoas comuns mudaram sua relação com dinheiro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-background rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-secondary">{testimonial.age} anos</p>
                </div>
              </div>

              <p className="text-lg mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>

              <p className="text-secondary mb-6 text-sm">
                {testimonial.story}
              </p>

              <div className="border-t border-primary/10 pt-4">
                <p className="text-sm font-semibold mb-2 text-primary">Conquistas:</p>
                <ul className="space-y-1">
                  {testimonial.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 bg-background/50 border border-primary/10 rounded-lg text-center"
        >
          <p className="text-sm text-secondary italic">
            * Resultados variam conforme dedicação e situação individual. Não garantimos retornos específicos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}