'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ebooks = [
  {
    id: 1,
    coverImage: '/images/Ebook-1.png',
    slug: 'economia-sem-complicacao'
  },
  {
    id: 2,
    coverImage: '/images/Ebook-2.png',
    slug: 'entenda-termos-mercado-financeiro'
  },
  {
    id: 3,
    coverImage: '/images/Ebook-2.png',
    slug: 'entenda-termos-mercado-financeiro'
  }
];

export function EbooksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ebooks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ebooks.length) % ebooks.length);
  };

  return (
    <section className="relative pt-16 md:pt-20 pb-8 md:pb-10 bg-[#151515]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Ebooks Carousel */}
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="relative w-[450px] h-[380px]">
                  {ebooks.map((ebook, index) => {
                    const position = (index - currentIndex + ebooks.length) % ebooks.length;
                    return (
                      <motion.div
                        key={ebook.id}
                        className="absolute cursor-pointer"
                        style={{
                          width: '260px',
                          height: '340px',
                          left: '50%',
                          top: '50%',
                        }}
                        initial={false}
                        animate={{
                          x: position === 0 ? '-50%' : position === 1 ? '5%' : '-105%',
                          y: position === 0 ? '-50%' : '-40%',
                          scale: position === 0 ? 1 : 0.8,
                          opacity: position === 0 ? 1 : 0.7,
                          zIndex: position === 0 ? 10 : 1,
                          filter: position === 0 ? 'brightness(1)' : 'brightness(0.7)',
                          rotateZ: position === 0 ? 0 : position === 1 ? 15 : -15,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.32, 0.72, 0, 1]
                        }}
                        onClick={() => {
                          if (position === 0) {
                            router.push(`/ebooks/${ebook.slug}`);
                          } else {
                            setCurrentIndex(index);
                          }
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={ebook.coverImage}
                            alt={`Ebook ${ebook.id}`}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8">
                {/* Indicators */}
                <div className="flex justify-center gap-3">
                  {ebooks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-primary w-12' 
                          : 'bg-white/20 w-6 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Arrow Navigation */}
                <div className="flex justify-center gap-6 mt-6">
                  <button
                    onClick={prevSlide}
                    className="text-white/40 hover:text-white/60 transition-colors p-1"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={1} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="text-white/40 hover:text-white/60 transition-colors p-1"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                O conhecimento é o
                <span className="block text-primary">melhor investimento</span>
              </h2>
              
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Nossos ebooks foram criados para transformar iniciantes em investidores confiantes. 
                Com linguagem simples e exemplos práticos, você aprende no seu ritmo, 
                sem pressa e sem complicação.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Do básico ao avançado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Linguagem simplificada
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Mais barato que um combo do McDonald's
                  </p>
                </div>
              </div>

              <Link href="/ebooks">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  Ver todos os ebooks
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}