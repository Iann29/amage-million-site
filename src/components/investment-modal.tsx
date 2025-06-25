'use client';

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModalScroll } from '@/hooks/use-modal-scroll';
import { useRouter } from 'next/navigation';

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  investment: {
    title: string;
    fullDescription: string;
    example: string;
    risks: string;
    benefits: string[];
  } | null;
}

export function InvestmentModal({ isOpen, onClose, investment }: InvestmentModalProps) {
  const router = useRouter();
  // Usa o hook que gerencia o Lenis e o scroll
  useModalScroll(isOpen);
  
  const scrollContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen && scrollContentRef.current) {
      const handleWheel = (e: WheelEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (scrollContentRef.current) {
          // Reduz a sensibilidade do scroll multiplicando por 0.5
          scrollContentRef.current.scrollTop += e.deltaY * 0.5;
        }
      };
      
      const element = scrollContentRef.current;
      element.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isOpen]);

  if (!investment) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div 
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#141414] rounded-2xl border border-gray-800 shadow-2xl"
              style={{ 
                maxHeight: '90vh',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-[#141414] border-b border-gray-800 p-4 md:p-6 flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{investment.title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div ref={scrollContentRef} className="flex-1 overflow-y-scroll p-4 md:p-6" style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
                <div className="space-y-4 md:space-y-6">
                    {/* Full Description */}
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">O que é?</h4>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{investment.fullDescription}</p>
                    </div>

                    {/* Example */}
                    <div className="bg-primary/10 rounded-lg p-3 md:p-4 border border-primary/20">
                      <h4 className="text-base md:text-lg font-medium text-primary mb-2 md:mb-3">Exemplo prático</h4>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{investment.example}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">Principais vantagens</h4>
                      <ul className="space-y-2">
                        {investment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-xs md:text-sm text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Risks */}
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">Pontos de atenção</h4>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{investment.risks}</p>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          onClose();
                          router.push('/ebooks');
                        }}
                        className="w-full bg-primary text-background py-2.5 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-primary/90 transition-colors"
                      >
                        Quero aprender mais
                      </button>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}