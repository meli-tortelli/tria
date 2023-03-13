import '@/styles/globals.css';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import { Michroma, Space_Mono } from '@next/font/google';

const michroma = Michroma({
  subsets: ['latin'],
  variable: '--font-michroma',
  display: 'swap',
  weight: '400',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${michroma.variable} ${spaceMono.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
