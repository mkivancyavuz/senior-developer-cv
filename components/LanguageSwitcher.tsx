'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { locales, localeLabels } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {locales.map((code, i) => (
        <div key={code} className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLocale(code)}
            className={`text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 ${
              locale === code ? 'text-[#D7E2EA]' : 'text-[#D7E2EA]/40'
            }`}
          >
            {localeLabels[code]}
          </button>
          {i < locales.length - 1 && (
            <span className="text-[#D7E2EA]/30 text-sm md:text-lg">/</span>
          )}
        </div>
      ))}
    </div>
  );
}
