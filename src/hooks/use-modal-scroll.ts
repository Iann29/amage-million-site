'use client';

import { useEffect, useRef } from 'react';
import { useLenis } from '@/contexts/lenis-context';

/**
 * Hook customizado para gerenciar o scroll quando um modal está aberto
 * Desabilita o Lenis e o scroll do body quando o modal está aberto
 * Reabilita quando o modal é fechado
 */
export function useModalScroll(isOpen: boolean) {
  const { lenisRef } = useLenis();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      scrollPositionRef.current = window.scrollY;
      
      // Para o Lenis
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
      
      // Desabilita o scroll do body sem usar position fixed
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      
    } else if (scrollPositionRef.current !== undefined) {
      // Reabilita o scroll
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      
      // Restaura a posição do scroll
      window.scrollTo(0, scrollPositionRef.current);
      
      // Reinicia o Lenis e restaura a posição
      if (lenisRef.current) {
        lenisRef.current.start();
        // Garante que o Lenis também volte para a posição correta
        requestAnimationFrame(() => {
          lenisRef.current?.scrollTo(scrollPositionRef.current, { immediate: true });
        });
      }
    }

    // Cleanup function
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };
  }, [isOpen, lenisRef]);
}