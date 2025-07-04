'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const ebooks = [
  {
    id: 1,
    coverImage: '/images/Ebook-2.png',
    slug: 'entenda-termos-mercado-financeiro'
  },
  {
    id: 2,
    coverImage: '/images/Ebook-1.png',
    slug: 'economia-sem-complicacao'
  },
  {
    id: 3,
    coverImage: '/images/Ebook-2.png',
    slug: 'entenda-termos-mercado-financeiro'
  }
];

export function EbooksSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredEbook, setHoveredEbook] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="relative py-20 md:py-28 bg-[#151515]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Ebooks */}
            <motion.div
              className="relative h-[550px] flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {ebooks.map((ebook, index) => (
                <motion.div
                  key={ebook.id}
                  className="absolute cursor-pointer"
                  style={{
                    width: '320px',
                    height: '420px',
                  }}
                  initial={false}
                  animate={{
                    x: isHovered ? (index - 1) * 340 - 170 : (index - 1) * 150 - 75,
                    y: isHovered ? 0 : index === 1 ? -40 : 5,
                    z: isHovered ? 0 : index === 1 ? 50 : -50,
                    rotateY: isHovered ? 0 : index === 0 ? 15 : index === 2 ? -15 : 0,
                    rotateZ: isHovered ? 0 : index === 0 ? -8 : index === 2 ? 8 : 0,
                    scale: isHovered && hoveredEbook === ebook.id ? 1.05 : isHovered ? 1 : index === 1 ? 1.1 : 0.95,
                    opacity: isHovered ? 1 : index === 1 ? 1 : 0.9,
                    filter: isHovered ? 'brightness(1)' : index === 1 ? 'brightness(1)' : 'brightness(0.9)',
                    zIndex: index === 1 ? 10 : hoveredEbook === ebook.id ? 15 : 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  onMouseEnter={() => isHovered && setHoveredEbook(ebook.id)}
                  onMouseLeave={() => setHoveredEbook(null)}
                  onClick={() => isHovered && router.push(`/ebooks/${ebook.slug}`)}
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
              ))}
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                O conhecimento é o
                <span className="block font-bold text-primary">melhor investimento</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Nossos ebooks foram criados para transformar iniciantes em investidores confiantes. 
                Com linguagem simples e exemplos práticos, você aprende no seu ritmo, 
                sem pressa e sem complicação.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Por apenas <span className="text-primary font-semibold">R$ 19,90</span> cada
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Escrito por especialistas do mercado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Do básico ao avançado, passo a passo
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