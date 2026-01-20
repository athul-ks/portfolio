import { ReactNode } from 'react';
import { Be_Vietnam_Pro, Space_Grotesk, Fira_Code, Caveat, Work_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroller from '@/components/SmoothScroller';
import { LogProvider } from '@/context/LogContext';
import { Toaster } from 'sonner';
import { Metadata } from 'next';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-be-vietnam-pro',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Athul Krishna',
    default: 'Athul Krishna',
  },
  description:
    'Portfolio v1.0.0 - Full Stack Developer & Cyber Security Specialist. Architecture, development, and secure systems.',
  keywords: ['Next.js', 'React', 'Cyber Security', 'Full Stack', 'Portfolio', 'Athul Krishna'],
  authors: [{ name: 'Athul Krishna' }],
  creator: 'Athul Krishna',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${spaceGrotesk.variable} ${firaCode.variable} ${caveat.variable} ${workSans.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroller />
        <LogProvider>
          {children}
          <Toaster position="top-center" richColors theme="dark" />
        </LogProvider>
      </body>
    </html>
  );
}
