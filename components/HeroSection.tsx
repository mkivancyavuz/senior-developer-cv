'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import FitHeading from './FitHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const PORTRAIT_URL = '/jack-portrait.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      <Navbar />

      <div className="overflow-hidden min-w-0 mt-12 sm:mt-14 md:mt-16">
        <FadeIn delay={0.15} y={40} className="w-full block">
          <FitHeading
            as="h1"
            text={t.hero.title}
            nowrap
            trFillK={172}
            enFillK={210}
            arFillK={218}
            capVw={17.5}
            minPx={44}
            maxPx={700}
            className="hero-heading font-black uppercase tracking-tight leading-none"
          />
        </FadeIn>
      </div>

      <div className="relative flex-1">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[340px] sm:w-[430px] md:w-[520px] lg:w-[620px]">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <Image
                src={PORTRAIT_URL}
                alt="Jack portrait"
                width={1126}
                height={1126}
                className="w-full h-auto"
                priority
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {t.hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
