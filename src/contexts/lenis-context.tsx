'use client';

import { createContext, useContext, useRef, MutableRefObject } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
  lenisRef: MutableRefObject<Lenis | null>;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export function LenisContextProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  return (
    <LenisContext.Provider value={{ lenisRef }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within LenisContextProvider');
  }
  return context;
}