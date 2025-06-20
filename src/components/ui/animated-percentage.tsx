'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function AnimatedPercentage({ value, className = '' }: { value: number; className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={`text-red-500 ${className}`}>
      {count}%
    </span>
  );
}