'use client';

import { Component } from "@/components/ui/etheral-shadow";

export function HeroShadow() {
  return (
    <Component
      color="rgba(216, 174, 99, 0.8)" // Cor dourada da Million com transparência
      animation={{ scale: 80, speed: 70 }}
      noise={{ opacity: 0.3, scale: 1.5 }}
      sizing="fill"
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(216, 174, 99, 0.15) 0%, rgba(21, 21, 21, 0.95) 50%, #151515 100%)'
      }}
    />
  );
}