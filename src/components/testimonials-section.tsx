'use client';

import { motion } from 'framer-motion';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';

const testimonials = [
  {
    text: 'A Million transformou completamente minha visão sobre investimentos. Hoje tenho uma carteira diversificada e rentável.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    name: 'Carlos Mendes',
    role: 'Empresário'
  },
  {
    text: 'Sempre tive medo de investir, mas com a Million aprendi que é possível fazer meu dinheiro trabalhar por mim.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    name: 'Ana Silva',
    role: 'Médica'
  },
  {
    text: 'O que mais me impressionou foi a transparência e o cuidado em explicar cada investimento.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    name: 'Roberto Oliveira',
    role: 'Engenheiro'
  },
  {
    text: 'Excelente assessoria! Em poucos meses já consigo ver meu patrimônio crescendo de forma consistente.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    name: 'Mariana Costa',
    role: 'Advogada'
  },
  {
    text: 'A equipe da Million é extremamente profissional. Me sinto seguro com minhas decisões de investimento.',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop',
    name: 'João Paulo Ferreira',
    role: 'Diretor de TI'
  },
  {
    text: 'Finalmente entendi como fazer meu dinheiro render. A Million simplificou tudo para mim.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    name: 'Patrícia Almeida',
    role: 'Professora'
  },
  {
    text: 'Recomendo para todos! O atendimento personalizado faz toda a diferença nos resultados.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    name: 'Ricardo Santos',
    role: 'Empresário'
  },
  {
    text: 'Meus investimentos nunca renderam tanto. A Million mudou minha vida financeira.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop',
    name: 'Fernanda Lima',
    role: 'Designer'
  },
  {
    text: 'Transparência e resultados reais. É isso que encontrei na Million Capital.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    name: 'Bruno Rodrigues',
    role: 'Consultor'
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#151515] mb-4">
              O que falam da <span className="text-primary">Million</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram sua relação com investimentos através do nosso trabalho.
            </p>
          </motion.div>

          {/* Testimonials Columns with Animation */}
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
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