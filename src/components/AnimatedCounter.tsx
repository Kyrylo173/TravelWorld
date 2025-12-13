import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ from, to, duration = 2, suffix = '' }: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}