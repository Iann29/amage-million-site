'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { LenisContextProvider, useLenis } from '@/contexts/lenis-context';

function LenisScroll({ children }: { children: React.ReactNode }) {
  const { lenisRef } = useLenis();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lenisRef]);

  return <>{children}</>;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <LenisContextProvider>
      <LenisScroll>{children}</LenisScroll>
    </LenisContextProvider>
  );
}