'use client';

import { motion } from 'framer-motion';
import { Camera, Instagram } from 'lucide-react';
import Image from 'next/image';

interface InstagramPost {
  id: number;
  image: string;
  alt: string;
}

const instagramPosts: InstagramPost[] = [
  { id: 1, image: '/images/instagram-1.jpg', alt: 'Post sobre investimentos' },
  { id: 2, image: '/images/instagram-2.jpg', alt: 'Dica financeira' },
  { id: 3, image: '/images/instagram-3.jpg', alt: 'Análise de mercado' },
  { id: 4, image: '/images/instagram-4.jpg', alt: 'Educação financeira' },
  { id: 5, image: '/images/instagram-5.jpg', alt: 'Oportunidades' },
  { id: 6, image: '/images/instagram-6.jpg', alt: 'Resultados' }
];

export function InstagramGrid() {
  return (
    <motion.div 
      className="w-full rounded-xl overflow-hidden shadow-2xl"
      initial={{ rotateY: -8, rotateX: 2 }}
      whileInView={{ rotateY: -5, rotateX: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ 
        backgroundColor: '#121212',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Instagram Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/logoinsta.png"
                alt="Million Capital"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-white">millioncapital_</h4>
              <p className="text-xs text-gray-400">Economia e investimentos de fácil acesso</p>
            </div>
          </div>
          <a
            href="https://instagram.com/millioncapital_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white hover:text-white inline-flex items-center gap-2 group transition-all duration-300"
          >
            Abrir Instagram
            <div className="relative w-4 h-4 overflow-visible">
              <Instagram 
                className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 fill-none stroke-white stroke-2" 
              />
              <Instagram 
                className="w-4 h-4 absolute inset-0 transition-all duration-300 group-hover:rotate-45 opacity-0 group-hover:opacity-100 fill-none stroke-2"
                style={{
                  stroke: 'url(#instagram-gradient)',
                }}
              />
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#833AB4" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#FCB045" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-3 gap-[2px] px-2">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/millioncapital_"
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
              className="relative aspect-[4/5] group cursor-pointer overflow-hidden bg-black/40"
            >
            {/* Imagem do post */}
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, 200px"
              onError={(e) => {
                // Fallback para placeholder se a imagem não existir
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="absolute inset-0 flex items-center justify-center bg-black/40"><svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>';
                }
              }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </motion.a>
        ))}
      </div>

      {/* Instagram Footer Stats */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-bold text-white">26</p>
            <p className="text-xs text-gray-400">publicações</p>
          </div>
          <div>
            <p className="font-bold text-white">800</p>
            <p className="text-xs text-gray-400">seguidores</p>
          </div>
          <div>
            <p className="font-bold text-white">500</p>
            <p className="text-xs text-gray-400">seguindo</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}