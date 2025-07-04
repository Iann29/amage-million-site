'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GetStartedButton } from '@/components/ui/get-started-button';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Subtle grain background */}
      <div className="absolute inset-0 z-0">
        {/* Solid background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Subtle grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight font-[family-name:var(--font-lato)]">
              Seu futuro financeiro{' '}
              <span className="text-primary">depende de você.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary font-light mb-10 leading-relaxed font-[family-name:var(--font-lato)]">
              Investir é simples. 
              Nós mostramos o caminho certo para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GetStartedButton href="#iniciar-jornada" />
            </div>
          </div>

          {/* Right side image */}
          <div
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            <Image
              src="/images/Frame 12 (1).png"
              alt="Million Investment Illustration"
              width={400}
              height={400}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Divider at the bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    </section>
  );
}