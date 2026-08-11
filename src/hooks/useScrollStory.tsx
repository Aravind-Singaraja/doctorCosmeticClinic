import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = '', delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function useScrollyProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  return scrollYProgress;
}

export function useActiveStep(
  progress: ReturnType<typeof useTransform<number, number>>,
  count: number,
) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, 'change', (v) => {
    const idx = Math.min(count - 1, Math.max(0, Math.floor(v * count)));
    setActive(idx);
  });
  return active;
}

export function useCountUp(target: number, enabled: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, duration]);
  return value;
}
