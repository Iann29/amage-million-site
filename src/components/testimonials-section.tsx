'use client';

import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "A Million mudou minha vida financeira! Comecei sem saber nada sobre investimentos e hoje tenho uma carteira diversificada. O suporte é incrível e a didática é perfeita para iniciantes.",
    name: "Lucas Teixeira",
    designation: "Desenvolvedor, 21 anos",
    src: "/images/Lucas Teixeira.jpg",
  },
  {
    quote: "Finalmente entendi que investir não é para ricos. Com o acompanhamento da Million, consegui sair das dívidas e hoje invisto mensalmente. A consultoria vale cada centavo!",
    name: "Otávio Carissimi",
    designation: "Estudante, 23 anos",
    src: "/images/Otavio .jpg",
  },
  {
    quote: "O que mais me impressionou foi a paciência e clareza nas explicações. Hoje consigo tomar decisões financeiras com confiança. Recomendo para todos que querem começar a investir!",
    name: "Vitor Girardi",
    designation: "Desenvolvedor, 22 anos",
    src: "/images/Vitor Girardi.png",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#D8AE63",
              designation: "#C5C5C5",
              testimony: "#FFFFFF",
              arrowBackground: "#1A1A1A",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#D8AE63",
            }}
            fontSizes={{
              name: "24px",
              designation: "16px",
              quote: "18px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}