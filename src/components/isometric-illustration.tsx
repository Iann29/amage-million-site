'use client';

import { motion } from 'framer-motion';

export function IsometricIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full max-w-lg mx-auto"
      style={{ filter: 'drop-shadow(0 25px 50px rgba(216, 174, 99, 0.2))' }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D8AE63', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F4D19B', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2A2A2A', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#151515', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Base Platform */}
      <motion.g
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <path
          d="M 250 400 L 100 325 L 250 250 L 400 325 Z"
          fill="url(#darkGradient)"
        />
        <path
          d="M 100 325 L 100 350 L 250 425 L 250 400 Z"
          fill="#1A1A1A"
        />
        <path
          d="M 250 400 L 250 425 L 400 350 L 400 325 Z"
          fill="#0F0F0F"
        />
      </motion.g>

      {/* First Level - Confused Person */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <circle cx="150" cy="300" r="20" fill="#C5C5C5" />
        <rect x="135" y="320" width="30" height="40" fill="#C5C5C5" rx="5" />
        
        {/* Question Marks */}
        <motion.text
          x="120"
          y="280"
          fill="#DC2626"
          fontSize="24"
          fontWeight="bold"
          animate={{ 
            y: [280, 270, 280],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ?
        </motion.text>
        <motion.text
          x="170"
          y="290"
          fill="#DC2626"
          fontSize="20"
          fontWeight="bold"
          animate={{ 
            y: [290, 280, 290],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          ?
        </motion.text>
      </motion.g>

      {/* Stairs */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <path
          d="M 180 320 L 220 300 L 220 280 L 180 300 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M 220 280 L 260 260 L 260 240 L 220 260 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M 260 240 L 300 220 L 300 200 L 260 220 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
      </motion.g>

      {/* Second Level - Studying Person */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <circle cx="250" cy="200" r="20" fill="#F4D19B" />
        <rect x="235" y="220" width="30" height="40" fill="#F4D19B" rx="5" />
        
        {/* Books */}
        <rect x="220" y="255" width="20" height="5" fill="#D8AE63" />
        <rect x="260" y="255" width="20" height="5" fill="#D8AE63" />
        
        {/* Light Bulb */}
        <motion.g
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <circle cx="250" cy="170" r="10" fill="#F4D19B" opacity="0.5" />
          <path
            d="M 250 160 L 245 170 L 255 170 Z"
            fill="#D8AE63"
          />
        </motion.g>
      </motion.g>

      {/* Third Level - Confident Investor */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <circle cx="350" cy="120" r="20" fill="#D8AE63" />
        <rect x="335" y="140" width="30" height="40" fill="#D8AE63" rx="5" />
        
        {/* Floating Coins */}
        <motion.g
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx="320" cy="100" r="8" fill="#F4D19B" />
          <text x="317" y="104" fontSize="10" fill="#D8AE63">$</text>
        </motion.g>
        <motion.g
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -360]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <circle cx="380" cy="110" r="8" fill="#F4D19B" />
          <text x="377" y="114" fontSize="10" fill="#D8AE63">$</text>
        </motion.g>
        <motion.g
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <circle cx="350" cy="80" r="8" fill="#F4D19B" />
          <text x="347" y="84" fontSize="10" fill="#D8AE63">$</text>
        </motion.g>
        
        {/* Success Glow */}
        <motion.circle
          cx="350"
          cy="120"
          r="40"
          fill="none"
          stroke="#D8AE63"
          strokeWidth="2"
          opacity="0.3"
          animate={{ 
            r: [40, 50, 40],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>

      {/* Connecting Lines */}
      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.path
          d="M 150 280 Q 200 240 250 200"
          fill="none"
          stroke="#D8AE63"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />
        <motion.path
          d="M 250 180 Q 300 140 350 120"
          fill="none"
          stroke="#D8AE63"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />
      </motion.g>
    </svg>
  );
}