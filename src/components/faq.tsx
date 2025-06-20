'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Vocês são uma corretora?',
    answer: 'Não, somos uma consultoria de educação financeira. Nosso papel é orientar e educar você sobre as melhores opções de investimento disponíveis em corretoras regulamentadas. Não custodiamos valores nem realizamos operações em seu nome.',
  },
  {
    question: 'Preciso ter muito dinheiro para começar?',
    answer: 'Absolutamente não! Trabalhamos com pessoas em qualquer situação financeira. Você pode começar a investir com valores a partir de R$ 30 por mês. O importante é começar, não importa o valor.',
  },
  {
    question: 'Como funciona a consultoria na prática?',
    answer: 'Após assinar um dos nossos planos, você passa por uma análise completa de perfil. Com base nisso, criamos uma estratégia personalizada e te acompanhamos através de reuniões periódicas (a frequência depende do plano escolhido), além de suporte contínuo para dúvidas e ajustes na estratégia.',
  },
  {
    question: 'Vocês indicam onde investir?',
    answer: 'Sim, mas de forma educativa. Mostramos as opções disponíveis no mercado, explicamos os prós e contras de cada investimento, e te ensinamos a tomar decisões conscientes. A decisão final sempre será sua, mas você terá todo o conhecimento necessário para escolher.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais. Acreditamos que você deve permanecer conosco porque está satisfeito com os resultados, não por obrigação.',
  },
  {
    question: 'Preciso saber algo sobre investimentos?',
    answer: 'Não precisa saber nada! Começamos do absoluto zero. Nossa metodologia é desenvolvida para pessoas que nunca investiram e não sabem por onde começar. Vamos te ensinar tudo, passo a passo, no seu ritmo.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os primeiros resultados aparecem já no primeiro mês: você terá clareza sobre sua situação financeira e um plano de ação. Resultados financeiros dependem de vários fatores, mas o mais importante é a mudança de mentalidade e hábitos, que começam imediatamente.',
  },
  {
    question: 'E se eu tiver dívidas?',
    answer: 'Perfeito! Um dos nossos focos é ajudar pessoas a se organizarem financeiramente. Vamos criar uma estratégia para você quitar suas dívidas de forma inteligente enquanto já começa a construir seu futuro financeiro.',
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Tire suas dúvidas sobre a consultoria
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-muted hover:bg-muted/80 rounded-lg p-6 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre a consultoria da Million Street."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Fale conosco no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}