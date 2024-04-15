import { Header } from '@/layout';
import CTA from '@/layout/cta';
import Footer from '@/layout/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang='en'>
      <body className='bg-[#191919] text-[#BABABA]'>
        <Header />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
