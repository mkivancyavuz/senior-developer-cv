'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/FadeIn';
import { useLanguage } from '@/contexts/LanguageContext';

const EMAIL = 'mkivancyavuz@gmail.com';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center gap-10 sm:gap-12 px-6 md:px-10 py-20 text-center">
        <FadeIn delay={0.1} y={30}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
          >
            {t.contactPage.heading}
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p
            className="text-[#D7E2EA] font-light max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', opacity: 0.75 }}
          >
            {t.contactPage.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow:
                '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid white',
              outlineOffset: '-3px',
            }}
          >
            {t.contactPage.emailLabel}: {EMAIL}
          </a>
        </FadeIn>

        <FadeIn delay={0.55} y={10}>
          <Link
            href="/"
            className="text-[#D7E2EA] font-light uppercase tracking-widest text-sm transition-opacity duration-200 hover:opacity-70"
            style={{ opacity: 0.6 }}
          >
            ← {t.contactPage.backHome}
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
