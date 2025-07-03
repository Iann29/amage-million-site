'use client';

import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Preciso de muito dinheiro para começar a investir?",
    answer: "Não! Você pode começar com valores a partir de R$ 30. O importante é criar o hábito e ir aumentando os aportes conforme sua renda permitir. Muitos grandes investidores começaram com pouco."
  },
  {
    question: "E se eu perder todo meu dinheiro?",
    answer: "Com educação adequada e diversificação, o risco é minimizado. Ensinamos você a investir de forma segura, começando por renda fixa (baixo risco) e evoluindo gradualmente. Nunca coloque todos os ovos na mesma cesta."
  },
  {
    question: "Não entendo nada de economia, consigo aprender?",
    answer: "Com certeza! Nosso conteúdo é feito para iniciantes. Explicamos tudo em linguagem simples, sem jargões complicados. Se você sabe fazer contas básicas, consegue aprender a investir."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Investimento é uma maratona, não uma corrida de 100m. Com disciplina e aportes regulares, você pode ver resultados significativos em 2-3 anos. O poder dos juros compostos trabalha a seu favor no longo prazo."
  },
  {
    question: "É seguro investir no Brasil com a situação econômica atual?",
    answer: "Crises geram oportunidades! Os maiores patrimônios foram construídos em momentos de incerteza. O importante é ter conhecimento para identificar as oportunidades e se proteger dos riscos."
  },
  {
    question: "Preciso de tempo para acompanhar o mercado todo dia?",
    answer: "Não necessariamente. Existem estratégias de longo prazo que exigem apenas algumas horas por mês. Ensinamos você a criar uma carteira que trabalha no piloto automático."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Ainda tem <span className="font-bold text-primary">dúvidas</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Respondemos as principais objeções de quem está começando
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-primary/50 bg-primary/5' 
                    : 'border-gray-800 bg-muted/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}