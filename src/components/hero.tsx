'use client';

import Link from 'next/link';
import { GetStartedButton } from '@/components/ui/get-started-button';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden rounded-t-2xl md:rounded-t-3xl">
      {/* Background image */}
      <div className="absolute inset-0 z-0 rounded-t-2xl md:rounded-t-3xl">
        {/* Solid background */}
        <div className="absolute inset-0 bg-background rounded-t-2xl md:rounded-t-3xl" />
        
        {/* Hero background image */}
        <div 
          className="absolute inset-0 rounded-t-2xl md:rounded-t-3xl"
          style={{
            backgroundImage: `url('/images/gostosa-hero.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      </div>
      
      <div className="container relative z-10 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-lato)]">
            Seu futuro financeiro{' '}
            <span className="text-primary">depende de você.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed font-[family-name:var(--font-lato)] max-w-xl">
            Investir é simples. 
            Nós mostramos o caminho certo para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <GetStartedButton href="#iniciar-jornada" />
          </div>
        </div>
      </div>
    </section>
  );
}