'use client';

import { motion } from 'framer-motion';
import { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  /**
   * When true, animates on mount instead of waiting for the element to
   * scroll into view. Use this for above-the-fold content (e.g. the hero),
   * since IntersectionObserver-based whileInView can occasionally fail to
   * fire for elements that are already in view on first paint, leaving
   * them stuck at opacity: 0.
   */
  immediate?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  immediate = false,
}: FadeInProps) {
  const MotionTag = motion.create(as);

  const animationProps = immediate
    ? { animate: { opacity: 1, x: 0, y: 0 } }
    : {
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: '50px', amount: 0 },
      };

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      {...animationProps}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
