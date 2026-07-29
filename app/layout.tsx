import type { Metadata } from 'next';
import { Kanit, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
      <body style={{ background: '#0C0C0C', fontFamily: "'Kanit', sans-serif" }}>
        <div id="__next" style={{ background: '#0C0C0C' }}>
          <LanguageProvider>{children}</LanguageProvider>
        </div>
      </body>
    </html>
  );
}
