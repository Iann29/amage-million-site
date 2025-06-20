'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';

interface GetStartedButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function GetStartedButton({ children = "Iniciar Jornada", onClick, href, className }: GetStartedButtonProps) {
  const buttonContent = (
    <>
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {children}
      </span>
      <i className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm z-10 grid w-10 h-10 place-items-center transition-all duration-500 bg-background/20 group-hover:w-[calc(100%-1rem)] group-hover:h-[calc(100%-1rem)] group-hover:top-2 group-hover:translate-y-0 group-active:scale-95">
        <ChevronRight size={20} strokeWidth={2} aria-hidden="true" className="text-background" />
      </i>
    </>
  );
  
  if (href) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        <Link 
          href={href}
          className={`group relative overflow-hidden inline-block bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center font-[family-name:var(--font-lato)] ${className || ''}`}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      onClick={onClick}
      animate={{
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={`group relative overflow-hidden inline-block bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center font-[family-name:var(--font-lato)] ${className || ''}`}
    >
      {buttonContent}
    </motion.button>
  );
}