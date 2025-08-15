'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useModal } from '@/contexts/modal-context';

const menuItems = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Plano', href: '/planos' },
];

export function ModernHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const { isModalOpen } = useModal();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className={isMobile && isModalOpen ? "hidden" : ""}>
      <nav
        data-state={menuState ? 'active' : 'inactive'}
        className="fixed z-50 w-full px-2"
      >
        <motion.div 
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 outline-none ring-0',
            isScrolled && 'bg-background/80 max-w-5xl rounded-2xl backdrop-blur-lg lg:px-8 outline-none ring-0'
          )}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ outline: 'none' }}
        >
          <div className={cn(
            "relative flex flex-wrap items-center justify-between gap-6 transition-all duration-300",
            isScrolled ? "py-4 lg:py-5" : "py-3 lg:py-4"
          )}>
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Million - Home"
                className="flex items-center"
              >
                <Image
                  src="/images/logo-million.svg"
                  alt="Million"
                  width={200}
                  height={50}
                  priority
                  quality={100}
                  unoptimized
                  className="h-12 w-auto"
                />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 flex flex-col justify-center items-center w-8 h-8 cursor-pointer lg:hidden"
              >
                <span className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300 ease-out",
                  menuState ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                )} />
                <span className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300 ease-out my-1",
                  menuState && "opacity-0"
                )} />
                <span className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300 ease-out",
                  menuState ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                )} />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-secondary hover:text-primary duration-150 relative group inline-block py-1"
                    >
                      <span>{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn("bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl p-6 shadow-2xl shadow-black/10 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent", menuState && "block lg:flex")}>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-secondary hover:text-primary duration-150 relative group inline-block py-1"
                      >
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full items-center gap-6 sm:w-fit">
                <Button
                  asChild
                  className="bg-primary text-background hover:bg-primary/90 w-full lg:w-auto"
                >
                  <Link 
                    href="https://wa.me/5554996578874?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20investimentos%20da%20Million%20Capital."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Fale conosco</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}