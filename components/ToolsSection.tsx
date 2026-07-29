'use client';

import FadeIn from './FadeIn';
import { useLanguage } from '@/contexts/LanguageContext';

const TOOLS = [
  { icon: '/tools/html5.svg', alt: 'HTML5', name: 'HTML' },
  { icon: '/tools/css3-t.png', alt: 'CSS3', name: 'CSS' },
  { icon: '/tools/javascript.svg', alt: 'JavaScript', name: 'JavaScript' },
  { icon: '/tools/typescript.svg', alt: 'TypeScript', name: 'TypeScript' },
  { icon: '/tools/git.svg', alt: 'Git', name: 'Git' },
  { icon: '/tools/github.svg', alt: 'GitHub', name: 'GitHub' },
  { icon: '/tools/tool7-t.png', alt: 'Claude', name: 'Claude' },
];

export default function ToolsSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40} className="w-full block">
        <h2
          className="hero-heading font-black uppercase leading-tight tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(32px, 7vw, 160px)' }}
        >
          {t.tools.heading}
        </h2>
      </FadeIn>

      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-16 justify-items-center">
        {TOOLS.map((tool, i) => (
          <FadeIn key={tool.alt} delay={i * 0.06} y={20}>
            <div className="flex flex-col items-center gap-5">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt={tool.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-wide text-center"
                style={{ fontSize: '20px' }}
              >
                {tool.name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
