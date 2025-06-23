'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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
  useEffect(() => {
    if (isOpen) {
      // Apenas bloqueia o scroll do body
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura o scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
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

          {/* Modal Container - Centralizado */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#141414] rounded-2xl border border-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content Wrapper com altura máxima */}
              <div className="flex flex-col max-h-[85vh] rounded-2xl overflow-hidden">
                {/* Header - Fixo */}
                <div className="flex-shrink-0 bg-[#141414] border-b border-gray-800 p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{investment.title}</h3>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="Fechar modal"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overscroll-contain">
                  <div className="p-6 space-y-6">
                    {/* Full Description */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">O que é?</h4>
                      <p className="text-gray-300 leading-relaxed">{investment.fullDescription}</p>
                    </div>

                    {/* Example */}
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <h4 className="text-lg font-medium text-primary mb-3">Exemplo prático</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{investment.example}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Principais vantagens</h4>
                      <ul className="space-y-2">
                        {investment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Risks */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Pontos de atenção</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{investment.risks}</p>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button
                        onClick={onClose}
                        className="w-full bg-primary text-background py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        Entendi, quero conhecer mais investimentos
                      </button>
                    </div>
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