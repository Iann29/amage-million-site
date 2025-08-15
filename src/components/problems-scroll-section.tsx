'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingDown, GraduationCap, ShoppingCart, Brain } from 'lucide-react';
import Image from 'next/image';

const problems = [
  {
    id: 1,
    title: "Crise Histórica",
    subtitle: "A economia do Brasil sempre foi caracterizada por instabilidade",
    description: "Desde 1822, o Brasil já nasceu em crise econômica. São mais de 200 anos alternando entre recessões e crescimento insuficiente.",
    stat: "82%",
    statLabel: "dos países cresceram mais que o Brasil",
    image: "/imgOtimized/problema-1.webp",
    icon: TrendingDown,
    color: "from-red-500/20",
    borderColor: "border-gray-700"
  },
  {
    id: 2,
    title: "Inflação",
    subtitle: "Seu dinheiro perde valor todo dia",
    description: "Com inflação acima de 5% ao ano, guardar dinheiro embaixo do colchão ou na poupança significa perder poder de compra constantemente.",
    stat: "-3,5%",
    statLabel: "ao ano a poupança perde para inflação",
    image: "/imgOtimized/problema-5.webp",
    icon: GraduationCap,
    color: "from-orange-500/20",
    borderColor: "border-gray-700"
  },
  {
    id: 3,
    title: "Imediatismo",
    subtitle: "77% das famílias estão endividadas",
    description: "61% não conseguem poupar. 55% não controlam gastos. A mentalidade do 'aproveitar agora' cria uma geração sem patrimônio.",
    stat: "77%",
    statLabel: "das famílias brasileiras endividadas",
    image: "/imgOtimized/problema-3.webp",
    icon: ShoppingCart,
    color: "from-yellow-500/20",
    borderColor: "border-gray-700"
  },
  {
    id: 4,
    title: "Medo",
    subtitle: "90% reconhecem necessidade de educação financeira",
    description: "Mas o medo paralisa. Décadas de planos fracassados criaram trauma. A maioria prefere perder na poupança do que aprender.",
    stat: "-3,5%",
    statLabel: "ao ano a poupança perde para inflação",
    image: "/imgOtimized/problema-4.webp",
    icon: Brain,
    color: "from-purple-500/20",
    borderColor: "border-gray-700"
  }
];

function ProblemCard({ problem }: { problem: typeof problems[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  // Animações simples e visíveis
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.8], [40, 20, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="w-full"
    >
      <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d] border border-gray-800 rounded-xl overflow-hidden h-full">
        <div className="p-6 pb-0">
          {/* Título */}
          <h3 className="text-2xl font-bold text-white mb-3">
            {problem.title}
          </h3>
          
          {/* Texto corrido */}
          <p className="text-gray-300 text-base leading-relaxed mb-3">
            {problem.subtitle}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {problem.description}
          </p>
        </div>

        {/* Imagem com estatística sobreposta */}
        <div className="relative h-56 overflow-hidden">
          {problem.image && (
            <Image 
              src={problem.image}
              alt={`Ilustração do problema: ${problem.title}`}
              fill
              unoptimized={true}
              quality={100}
              className={`object-cover ${problem.id === 2 ? 'object-[center_10%] scale-125' : ''}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          )}
          {/* Overlay para escurecer a imagem */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Gradiente de baixo para cima */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
          
          {/* Estatística sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="text-4xl font-bold text-red-400 mb-2">
              {problem.stat}
            </div>
            <p className="text-sm text-gray-300">
              {problem.statLabel}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProblemsScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.1], [20, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-lato)]">
            O que realmente <span className="text-red-500">trava</span> o crescimento do Brasil?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </div>
    </section>
  );
}