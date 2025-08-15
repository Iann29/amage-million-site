'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface GetStartedButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  scrollToTop?: boolean;
}

export function GetStartedButton({ children = "Quero começar", onClick, href, className, scrollToTop = false }: GetStartedButtonProps) {
  const router = useRouter();
  const baseClasses = `inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 text-center font-[family-name:var(--font-lato)] hover:scale-105 ${className || 'bg-primary text-background hover:bg-primary/90'}`;
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href && scrollToTop) {
      router.push(href);
      // Aguardar a navegação e então rolar para o topo
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };
  
  if (href && scrollToTop) {
    return (
      <button onClick={handleClick} className={baseClasses}>
        {children}
      </button>
    );
  }
  
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}