'use client';

import { ElementType } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FitHeadingProps {
  text: string;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  /** When true the text is kept on a single line (used for the hero title). */
  nowrap?: boolean;
  /** Classes for the outer wrapper (e.g. margins), kept separate from the
   * text element so spacing isn't affected by the font-size override. */
  containerClassName?: string;
  /**
   * Fill constants (vw = fillK / characterCount), tuned per language so each
   * script (and its fallback/dedicated font) fills roughly the same share of
   * the container width. Plain CSS clamp() — deterministic, no runtime
   * measurement or layout-timing dependence.
   */
  trFillK?: number;
  enFillK?: number;
  arFillK?: number;
  capVw?: number;
  minPx?: number;
  maxPx?: number;
}

/**
 * Heading sized with a per-language clamp(minPx, vw, maxPx) formula so it
 * scales with the viewport but never overflows (capped by capVw / maxPx) and
 * never drops below a readable size (minPx).
 */
export default function FitHeading({
  text,
  as = 'h1',
  className,
  style,
  nowrap = false,
  containerClassName,
  trFillK = 100,
  enFillK = 100,
  arFillK = 140,
  capVw = 17.5,
  minPx = 40,
  maxPx = 220,
}: FitHeadingProps) {
  const { locale } = useLanguage();

  const fillK = locale === 'ar' ? arFillK : locale === 'en' ? enFillK : trFillK;
  const length = Math.max(text.length, 1);
  const vw = Math.min(capVw, fillK / length);
  const fontSize = `clamp(${minPx}px, ${vw}vw, ${maxPx}px)`;

  const Tag = as as ElementType;

  return (
    <div className={`w-full min-w-0 ${containerClassName ?? ''}`}>
      <Tag
        className={className}
        style={{
          ...style,
          fontSize,
          display: 'block',
          maxWidth: '100%',
          whiteSpace: nowrap ? 'nowrap' : undefined,
        }}
      >
        {text}
      </Tag>
    </div>
  );
}
