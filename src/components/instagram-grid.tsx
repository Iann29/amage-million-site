'use client';

import { motion } from 'framer-motion';
import { Instagram, Camera } from 'lucide-react';

interface InstagramPost {
  id: number;
  alt: string;
}

const instagramPosts: InstagramPost[] = [
  { id: 1, alt: 'Post sobre investimentos' },
  { id: 2, alt: 'Dica financeira' },
  { id: 3, alt: 'Análise de mercado' },
  { id: 4, alt: 'Educação financeira' },
  { id: 5, alt: 'Oportunidades' },
  { id: 6, alt: 'Resultados' }
];

export function InstagramGrid() {
  return (
    <div className="w-full">
      {/* Instagram Header */}
      <div className="bg-white rounded-t-xl p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">million</h4>
              <p className="text-xs text-gray-500">Investimentos inteligentes</p>
            </div>
          </div>
          <a
            href="https://instagram.com/million"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Ver perfil
          </a>
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="bg-white rounded-b-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-[2px]">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/million"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] group cursor-pointer overflow-hidden bg-gray-900"
            >
            {/* Placeholder para imagem do post */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <Camera className="w-12 h-12 text-gray-600" />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">1.2k</span>
                <svg className="w-5 h-5 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-semibold">43</span>
              </div>
            </div>
          </motion.a>
        ))}
        </div>
      </div>

      {/* Instagram Footer Stats */}
      <div className="bg-gray-50 p-4 rounded-b-xl">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-bold text-gray-900">324</p>
            <p className="text-xs text-gray-500">publicações</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">15.2k</p>
            <p className="text-xs text-gray-500">seguidores</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">892</p>
            <p className="text-xs text-gray-500">seguindo</p>
          </div>
        </div>
      </div>
    </div>
  );
}