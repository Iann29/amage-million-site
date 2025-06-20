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
        className={`relative -top-[25%] h-[450px] md:h-[500px] w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden origin-top`}
      >
        <div className={`flex h-full md:pr-[35%]`}>
          <div className='flex flex-col p-6 md:p-8 lg:p-10 flex-1'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-left font-bold font-[family-name:var(--font-lato)] mb-4 md:mb-6' style={{ color: color === '#2a2a2a' || color === '#1a1a1a' ? '#ffffff' : color === '#D8AE63' ? '#151515' : '#ffffff' }} dangerouslySetInnerHTML={{ __html: title }} />
            <div className='text-sm md:text-base lg:text-lg font-[family-name:var(--font-lato)] leading-relaxed flex-1' style={{ color: color === '#2a2a2a' || color === '#1a1a1a' ? '#ffffff' : color === '#D8AE63' ? '#151515' : '#ffffff' }} dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          
          <div className={`hidden md:block absolute right-0 top-0 w-[35%] h-full`}>
            <div className={`w-full h-full bg-gradient-to-br from-white/5 to-white/10`}>
              <img 
                src={url} 
                alt='image' 
                className='w-full h-full object-cover opacity-85 mix-blend-overlay' 
              />
            </div>
          </div>
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
  const [currentCard, setCurrentCard] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const cardIndex = Math.min(
        Math.floor(latest * projects.length),
        projects.length - 1
      );
      setCurrentCard(cardIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, projects.length]);

  return (
    <main className='bg-background relative' ref={container}>
      <section className='text-white w-full bg-background relative'>
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
        <div className="hidden md:block absolute right-8 top-[80vh] h-[calc(100%-100vh)] pointer-events-none z-40">
          <div className="sticky top-1/2 -translate-y-1/2">
            <ProgressIndicator total={projects.length} current={currentCard} />
          </div>
        </div>
      </section>
    </main>
  );
});

Component.displayName = 'Component';

interface ProgressIndicatorProps {
  total: number;
  current: number;
}

export const ProgressIndicator = ({ total, current }: ProgressIndicatorProps) => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-1 h-8 rounded-full transition-all duration-300",
            index === current
              ? "bg-primary w-1.5 h-12"
              : index < current
              ? "bg-primary/50"
              : "bg-white/20"
          )}
        />
      ))}
    </div>
  );
};

export { AnimatedCounter };
export default Component;