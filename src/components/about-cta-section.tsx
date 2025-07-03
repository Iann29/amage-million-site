'use client';

import { motion } from 'framer-motion';
import { Users, ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';
import { InstagramGrid } from './instagram-grid';

export function AboutCTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(216,174,99,0.1) 35px, rgba(216,174,99,0.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - About Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8"
              >
                <Users className="w-10 h-10 text-primary" />
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Conheça quem somos e as <br className="md:hidden" />
                <span className="font-bold text-primary">3 cabeças</span> por trás do projeto
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                Descubra a história, os valores e as pessoas que construíram a Million com um único objetivo: facilitar o acesso aos investimentos
              </p>

              {/* CTA Button */}
              <Link href="/sobre">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  Conhecer nossa história
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Side - Instagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div>
                {/* Instagram Title */}
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                    Acompanhe nosso <span className="font-bold text-primary">dia a dia</span>
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Dicas diárias, análises de mercado e conteúdo exclusivo
                  </p>
                  <a 
                    href="https://instagram.com/million" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    <Instagram className="w-5 h-5" />
                    @million
                  </a>
                </div>

                {/* Instagram Grid Container */}
                <div className="bg-gray-900/50 p-4 rounded-2xl backdrop-blur-sm">
                  <InstagramGrid />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}