'use client';

import { useEffect } from 'react';
import { useLenis } from '@/contexts/lenis-context';

/**
 * Hook customizado para gerenciar o scroll quando um modal está aberto
 * Desabilita o Lenis e o scroll do body quando o modal está aberto
 * Reabilita quando o modal é fechado
 */
export function useModalScroll(isOpen: boolean) {
  const { lenisRef } = useLenis();

  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;
      
      // Desabilita o scroll do body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Para o Lenis
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
    } else {
      // Recupera a posição do scroll
      const scrollY = document.body.style.top;
      
      // Reabilita o scroll do body
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restaura a posição do scroll
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      
      // Reinicia o Lenis
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };
  }, [isOpen, lenisRef]);
}