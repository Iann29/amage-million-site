'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X } from 'lucide-react';
import { useModalScroll } from '@/hooks/use-modal-scroll';
import { useRouter } from 'next/navigation';
import { useModal } from '@/contexts/modal-context';
import { ModalPortal } from '@/components/modal-portal';
import { GetStartedButton } from '@/components/ui/get-started-button';

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
  const [isMobile, setIsMobile] = useState(false);
  const { setIsModalOpen } = useModal();
  
  // Usa o hook que gerencia o Lenis e o scroll
  useModalScroll(isOpen);
  
  const scrollContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update modal context when modal state changes
  useEffect(() => {
    setIsModalOpen(isOpen);
    
    // Prevent body scroll on mobile when modal is open
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
    
    return () => {
      if (isMobile) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };
  }, [isOpen, setIsModalOpen, isMobile]);
  
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
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            style={{ zIndex: 9998, isolation: 'isolate' }}
          />

          {/* Modal Container */}
          <div 
            className="fixed inset-0 flex items-end md:items-center justify-center md:p-4"
            style={{ zIndex: 9999, isolation: 'isolate' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: '100%' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              drag={isMobile ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info: PanInfo) => {
                if (info.offset.y > 100 && isMobile) {
                  onClose();
                }
              }}
              className="relative w-full md:max-w-2xl bg-[#141414] rounded-t-2xl md:rounded-2xl border-t md:border border-gray-800 shadow-2xl 
                        fixed md:relative bottom-0 md:bottom-auto h-[90vh] md:h-auto md:max-h-[85vh] flex flex-col overflow-hidden"
              style={{ zIndex: isMobile ? 9999 : 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Swipe Indicator */}
              <div className="md:hidden flex justify-center py-3 cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1 bg-gray-600 rounded-full" />
              </div>
              
              {/* Header */}
              <div className="flex-shrink-0 bg-[#141414] border-b border-gray-800 px-4 pb-4 md:p-6 flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{investment.title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 md:p-2 -mr-2 md:mr-0 rounded-lg hover:bg-gray-800 active:bg-gray-700 transition-colors"
                  aria-label="Fechar modal"
                >
                  <X className="w-6 h-6 md:w-5 md:h-5 text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div 
                ref={scrollContentRef} 
                className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent overscroll-contain touch-pan-y" 
                style={{ 
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'thin',
                  touchAction: 'pan-y'
                }}
              >
                <div className="space-y-4 md:space-y-6 pb-6 md:pb-6 pb-safe">
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
                      <GetStartedButton
                        onClick={() => {
                          onClose();
                          router.push('/ebooks');
                        }}
                        className="w-full py-2.5 md:py-3 text-sm md:text-base"
                      >
                        Quero aprender mais
                      </GetStartedButton>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
    </ModalPortal>
  );
}