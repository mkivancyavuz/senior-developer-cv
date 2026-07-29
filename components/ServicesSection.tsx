'use client';

import FadeIn from './FadeIn';
import FitHeading from './FitHeading';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="price"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: 'var(--bg-alt)' }}
    >
      <FadeIn delay={0} y={40} className="w-full block">
        <FitHeading
          as="h2"
          text={t.services.heading}
          trFillK={81}
          enFillK={101}
          arFillK={115}
          capVw={16}
          minPx={48}
          maxPx={450}
          containerClassName="mb-16 sm:mb-20 md:mb-28"
          className="font-black uppercase text-center"
          style={{ color: 'var(--text-alt)' }}
        />
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {t.services.items.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  color: 'var(--text-alt)',
                }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                    color: 'var(--text-alt)',
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                    color: 'var(--text-alt)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }} />
      </div>
    </section>
  );
}
