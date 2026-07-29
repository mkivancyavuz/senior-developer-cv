import type { Metadata } from 'next';
import { Kanit, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

// Runs before React hydrates so the correct theme is applied on first
// paint, avoiding a flash of the wrong theme. Reads localStorage only —
// never the URL.
const NO_FLASH_THEME_SCRIPT = `
(function () {
  try {
    var theme = localStorage.getItem('jack-portfolio-theme');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
  } catch (e) {}
})();
`;

const kanit = Kanit({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
});


// Kanit has no Arabic glyphs, so Arabic text silently falls back to
// whatever thin default font the OS provides. Cairo has a matching black
// weight and Arabic coverage, so Arabic headings look as bold/substantial
// as the Latin ones instead of visually "shrinking".
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Senior - Developer',
  description: 'Senior - Developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${kanit.variable} ${cairo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
      </head>
      <body style={{ fontFamily: "'Kanit', sans-serif" }}>
        <div id="__next">
          <ThemeProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
