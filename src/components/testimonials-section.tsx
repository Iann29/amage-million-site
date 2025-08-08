'use client';

import { motion } from 'framer-motion';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';

const testimonials = [
  {
    text: 'Nesse pouco tempo que estou com a Million, já dei início aos meus investimentos, consegui uma grande clareza do que é o mercado e como as coisas funcionam e olha que eu não sabia nada. Também achei muito top o grupo das notícias, a todo momento estão enviando novas, sobre o cenário atual do mundo.',
    name: 'Leonardo Santini'
  },
  {
    text: 'Desde que acreditei no projeto, comecei a entender muito mais sobre como funcionam o mundo dos investimentos. As notícias do grupo facilitam bastante, pois o material é apresentado de forma resumida e de fácil entendimento.',
    name: 'Vitor Girardi'
  },
  {
    text: 'Conteúdo fenomenal! Sempre estão atualizando sobre o cenário econômico e me dando dicas essenciais de como alavancar e crescer, não só financeiramente.',
    name: 'Lucas Teixeira'
  },
  {
    text: 'Quando soube dos planos que a Million oferecia, entendi que era a minha chance de dar o pontapé inicial com a segurança que o acompanhamento da equipe me oferecia. O espaço para tirar dúvidas me ajuda a tomar decisões com mais embasamento.',
    name: 'Otávio Carissimi'
  },
  {
    text: 'Desde que iniciei com a Million, tenho notado uma evolução diária. O que antes parecia ser números difíceis ou complicados passou a se tornar rotina! Foi uma evolução incrível e que cresce a cada dia!',
    name: 'Guilherme Negretti'
  },
  {
    text: 'Como alguém que tinha praticamente zero noção, estou curtindo bastante. Principalmente pela parte de ter um acompanhamento bem de perto, mostrando como investir passo a passo, com segurança. Vocês passam muita confiança!',
    name: 'Eduardo Favretto'
  },
  {
    text: 'Eles sempre me atendem com atenção, tiram minhas dúvidas com paciência e explicam tudo de forma clara. No começo fiquei com receio por ser minha primeira vez investindo, mas fui acompanhada de perto e me senti segura.',
    name: 'Suelen Dalpozzo'
  },
  {
    text: 'A Million me ajudou muito no entendimento das maneiras de investir, mostrando que há diversas aplicações e sempre deixando claro os possíveis riscos e retornos. As informações postadas no grupo mantêm a gente sempre atualizado.',
    name: 'Bernardo Zanatta'
  },
  {
    text: 'A Million transformou completamente minha visão sobre investimentos. Hoje tenho uma carteira diversificada e rentável.',
    name: 'Patricia Santos'
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white rounded-2xl md:rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#151515] mb-4 font-[family-name:var(--font-lato)]">
              O que falam da <span className="text-primary">Million</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram sua relação com investimentos através do nosso trabalho.
            </p>
          </motion.div>

          {/* Testimonials Columns with Animation */}
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={30} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={32} />
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              Junte-se a centenas de pessoas que já estão construindo um futuro financeiro sólido
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}