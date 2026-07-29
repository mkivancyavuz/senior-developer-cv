'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import FitHeading from './FitHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const MOON_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const OBJECT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

export default function AboutSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <Image src={MOON_URL} alt="Moon icon" width={210} height={210} className="w-full h-auto" />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <Image src={OBJECT_URL} alt="3D object" width={180} height={180} className="w-full h-auto" />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <Image src={LEGO_URL} alt="Lego icon" width={210} height={210} className="w-full h-auto" />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <Image src={GROUP_URL} alt="3D group" width={220} height={220} className="w-full h-auto" />
        </FadeIn>
      </div>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40} className="w-full block">
          <FitHeading
            as="h2"
            text={t.about.heading}
            trFillK={81}
            enFillK={101}
            arFillK={115}
            capVw={16}
            minPx={48}
            maxPx={450}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          />
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={t.about.paragraph}
            splitBy={locale === 'ar' ? 'word' : 'char'}
            className="text-center font-medium leading-relaxed max-w-[560px]"
            style={{
              color: 'var(--text-main)',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
