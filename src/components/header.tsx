'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useModal } from '@/contexts/modal-context';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Educação', href: '#educacao' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-[10px] border-b border-primary/10'
            : ''
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(21, 21, 21, 0.8)' : 'transparent',
          padding: isScrolled ? '12px 0' : '16px 0',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Million</span>
              <span className="text-xl font-light text-white ml-1">Street</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => openModal('lead-capture')}
                className="bg-primary text-background px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-background hover:shadow-lg text-sm"
              >
                Simular Rendimentos
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-primary transition-colors duration-200"
              aria-label="Menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-background border-l border-primary/20 p-8 pt-24">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl text-white hover:text-primary transition-colors duration-200 block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-6"
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openModal('lead-capture');
                    }}
                    className="bg-primary text-background px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-background inline-block"
                  >
                    Simular Rendimentos
                  </button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}