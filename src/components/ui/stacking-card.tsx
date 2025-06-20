'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue, useInView } from 'framer-motion';
import { useRef, forwardRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 10);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[600px] w-[65%] rounded-2xl p-12 origin-top`}
      >
        <h2 className='text-3xl md:text-4xl text-left font-bold font-[family-name:var(--font-lato)] mb-8' style={{ color: color === '#2a2a2a' || color === '#1a1a1a' ? '#ffffff' : color === '#D8AE63' ? '#151515' : '#ffffff' }} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={`flex gap-8 h-full`}>
          <div className={color === '#D8AE63' ? 'w-full' : 'w-2/3'}>
            <div className='text-base md:text-lg font-[family-name:var(--font-lato)] leading-relaxed' style={{ color: color === '#2a2a2a' || color === '#1a1a1a' ? '#ffffff' : color === '#D8AE63' ? '#151515' : '#ffffff' }} dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          
          {color !== '#D8AE63' && (
            <div className={`w-1/3 h-full relative rounded-lg overflow-hidden group`}>
              <div className={`w-full h-full bg-gradient-to-br from-white/5 to-white/10`}>
                <img 
                  src={url} 
                  alt='image' 
                  className='w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay' 
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main className='bg-background' ref={container}>
      <section className='text-white w-full bg-background'>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
});

Component.displayName = 'Component';

export { AnimatedCounter };
export default Component;