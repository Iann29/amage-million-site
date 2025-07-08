'use client';

import { motion } from 'framer-motion';
import { Users, ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';
import { InstagramGrid } from './instagram-grid';

export function AboutCTASection() {
  return (
    <section className="relative py-10 md:py-12 bg-white overflow-hidden rounded-t-2xl md:rounded-t-3xl rounded-b-2xl md:rounded-b-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.06)]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #D8AE63 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Watermark background */}
        <div 
          className="absolute -bottom-72 -left-96 w-[1500px] h-[1200px] opacity-[0.04]"
          style={{
            backgroundImage: `url('/images/conhecafundo.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                <span className="text-[#151515]">Conheça a </span>
                <span className="text-primary">Million</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base text-gray-600 mb-16 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Saiba quem são os fundadores do projeto, se dedicando e facilitando o acesso ao 
                mundo dos investimentos, tornando a educação financeira simples e acessível 
                para qualquer um. <br /><span className="text-gray-400">(que se importa com o seu futuro financeiro)</span>
              </p>

              {/* CTA Button */}
              <Link href="/sobre">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#151515] rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-3 group text-white hover:bg-[#151515]/90"
                >
                  Conhecer nossa história
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>

              {/* Instagram Link */}
              <div className="mt-4">
                <a 
                  href="https://instagram.com/millioncapital_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Entre agora no nosso perfil do Instagram
                </a>
              </div>
            </motion.div>

            {/* Right Side - Instagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <InstagramGrid />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}