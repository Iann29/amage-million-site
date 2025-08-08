'use client';

import React from 'react';
import Link from 'next/link';

interface GetStartedButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function GetStartedButton({ children = "Quero começar", onClick, href, className }: GetStartedButtonProps) {
  const baseClasses = `inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 text-center font-[family-name:var(--font-lato)] hover:scale-105 ${className || 'bg-primary text-background hover:bg-primary/90'}`;
  
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