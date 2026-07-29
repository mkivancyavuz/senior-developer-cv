'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { locales, localeLabels } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 flex-shrink-0">
      {locales.map((code, i) => (
        <div key={code} className="flex items-center gap-3">
          <button
            onClick={() => setLocale(code)}
            className="text-base md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{
              color: 'var(--text-main)',
              opacity: locale === code ? 1 : 0.4,
            }}
          >
            {localeLabels[code]}
          </button>
          {i < locales.length - 1 && (
            <span
              className="text-base md:text-lg"
              style={{ color: 'var(--text-main)', opacity: 0.3 }}
            >
              /
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
