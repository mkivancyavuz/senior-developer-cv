'use client';

import { motion } from 'framer-motion';

const ACCENT_GRADIENT =
  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)';

export default function TransitionSection() {
  return (
    <section
      className="relative bg-[#0C0C0C] flex flex-col items-center justify-center gap-8 sm:gap-10 px-6 pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28 md:pb-32"
      style={{ minHeight: 'clamp(340px, 34vw, 460px)' }}
    >
      <div className="flex items-center justify-center w-full max-w-6xl gap-6 sm:gap-8">
        <span
          className="flex-1 rounded-full"
          style={{
            height: '4px',
            background: ACCENT_GRADIENT,
            opacity: 0.7,
            maskImage: 'linear-gradient(to right, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
          }}
        />
        <span
          className="leading-none select-none font-black"
          style={{
            fontSize: '70px',
            background: ACCENT_GRADIENT,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="flex-1 rounded-full"
          style={{
            height: '4px',
            background: ACCENT_GRADIENT,
            opacity: 0.7,
            maskImage: 'linear-gradient(to left, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to left, transparent, black)',
          }}
        />
      </div>

      <p
        className="text-[#D7E2EA] font-light tracking-wide text-center opacity-70"
        style={{ fontSize: '50px' }}
      >
        Turning ideas into real-world projects.
      </p>

      <motion.span
        className="leading-none select-none font-black"
        style={{
          fontSize: '55px',
          background: ACCENT_GRADIENT,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        ↓
      </motion.span>
    </section>
  );
}
