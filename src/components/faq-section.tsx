'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Preciso de muito dinheiro para começar a investir?",
    answer: "Não! Você pode começar com valores a partir de R$ 30. O importante é criar o hábito e ir aumentando os aportes conforme sua renda permitir."
  },
  {
    question: "Tenho que mandar meu dinheiro para vocês?",
    answer: "Não! Seu dinheiro fica sempre sob seu controle. Nós oferecemos educação financeira para que você aprenda a investir por conta própria, com autonomia e segurança."
  },
  {
    question: "Não entendo nada de economia, consigo aprender?",
    answer: "Com certeza! Nosso conteúdo é feito para iniciantes. Explicamos tudo em linguagem simples, sem jargões complicados."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Investimento é uma maratona, não uma corrida de 100m. Com disciplina e aportes regulares, você pode ver resultados significativos em 2-3 anos."
  },
  {
    question: "É seguro investir no Brasil?",
    answer: "Crises geram oportunidades! Os maiores patrimônios foram construídos em momentos de incerteza. O importante é ter conhecimento para identificar as oportunidades."
  },
  {
    question: "Preciso acompanhar o mercado todo dia?",
    answer: "Não necessariamente. Existem estratégias de longo prazo que exigem apenas algumas horas por mês. Ensinamos você a criar uma carteira que trabalha no piloto automático."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <section className="relative py-12 md:py-16 bg-[#151515] overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Dúvidas
                <span className="block text-primary">frequentes</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Aqui estão as respostas para as principais questões de quem está começando sua jornada de investimentos.
              </p>
            </motion.div>

            {/* Right Side - Questions */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-700 last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-4 flex items-start justify-between text-left group"
                  >
                    <h3 className="text-base font-medium text-white pr-8 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      {openIndex === index ? (
                        <Minus className="w-3 h-3 text-primary" />
                      ) : (
                        <Plus className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}