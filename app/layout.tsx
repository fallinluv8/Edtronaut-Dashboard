import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/context/ThemeContext';
import { SimulationDetailProvider } from '@/context/SimulationDetailContext';
import { ToastProvider } from '@/components/ui/ToastProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Edtronaut Dashboard',
  description: 'Take-home assignment',
  icons: {
    icon: '/edtronaut.png',
  },
  openGraph: {
    title: 'Edtronaut Dashboard',
    description: 'Take-home assignment',
    images: [
      {
        url: '/edtronaut.png',
        width: 512,
        height: 512,
        alt: 'Edtronaut Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edtronaut Dashboard',
    description: 'Take-home assignment',
    images: ['/edtronaut.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          <ToastProvider>
            <SimulationDetailProvider>{children}</SimulationDetailProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
