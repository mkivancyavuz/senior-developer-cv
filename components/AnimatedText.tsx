'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** 'char' animates letter by letter (default). 'word' animates whole words,
   * which keeps cursive scripts like Arabic correctly joined. */
  splitBy?: 'char' | 'word';
}

export default function AnimatedText({
  text,
  className,
  style,
  splitBy = 'char',
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const units = splitBy === 'word' ? text.split(/(\s+)/) : text.split('');

  return (
    <p ref={containerRef} className={className} style={style}>
      {units.map((unit, i) => {
        const start = i / units.length;
        const end = start + 1 / units.length;
        return (
          <Unit
            key={i}
            unit={unit}
            progress={scrollYProgress}
            start={start}
            end={end}
            inline={splitBy === 'char'}
          />
        );
      })}
    </p>
  );
}

function Unit({
  unit,
  progress,
  start,
  end,
  inline,
}: {
  unit: string;
  progress: any;
  start: number;
  end: number;
  inline: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  // A lone space character inside an inline-block gets trimmed away by
  // normal CSS whitespace collapsing (it's both the "start" and "end" of
  // that box's line), which silently deletes spaces between words. Render
  // whitespace as a plain, non-wrapped span with `white-space: pre` instead
  // so the gap is preserved.
  if (/^\s+$/.test(unit)) {
    return <span style={{ whiteSpace: 'pre' }}>{unit}</span>;
  }

  if (!inline) {
    return <motion.span style={{ opacity }}>{unit}</motion.span>;
  }

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{unit}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {unit}
      </motion.span>
    </span>
  );
}
