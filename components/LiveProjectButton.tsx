'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface LiveProjectButtonProps {
  href?: string;
}

export default function LiveProjectButton({ href }: LiveProjectButtonProps) {
  const { t } = useLanguage();

  const className =
    'rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-opacity duration-200 hover:opacity-70 inline-block';
  const style = { borderColor: 'var(--text-main)', color: 'var(--text-main)' };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {t.projects.live}
      </a>
    );
  }

  return (
    <button className={className} style={style}>
      {t.projects.live}
    </button>
  );
}
