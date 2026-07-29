'use client';

import FadeIn from './FadeIn';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  const links = [
    { key: 'about', label: t.nav.about },
    { key: 'price', label: t.nav.price },
    { key: 'projects', label: t.nav.projects },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <FadeIn delay={0} y={-20} as="nav" immediate>
      <div className="w-full min-w-0 flex flex-col sm:flex-row items-center px-6 md:px-10 pt-6 md:pt-8 gap-6 sm:gap-4">
        <div className="w-full min-w-0 flex items-center gap-4 sm:gap-8 sm:flex-1 sm:justify-between overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.key === 'contact' ? '/contact' : `/#${link.key}`}
              className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 whitespace-nowrap"
              style={{ color: 'var(--text-main)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </FadeIn>
  );
}
