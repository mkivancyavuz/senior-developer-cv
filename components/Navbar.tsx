'use client';

import FadeIn from './FadeIn';
import LanguageSwitcher from './LanguageSwitcher';
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
    <FadeIn delay={0} y={-20} as="nav">
      <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 gap-4">
        <div className="flex justify-between items-center gap-4 sm:gap-8 flex-1">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.key === 'contact' ? '/contact' : `/#${link.key}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
        <LanguageSwitcher />
      </div>
    </FadeIn>
  );
}
