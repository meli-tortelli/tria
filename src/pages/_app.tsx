import '@/styles/globals.css';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import { Michroma, Inter } from '@next/font/google';

const michroma = Michroma({
  subsets: ['latin'],
  variable: '--font-michroma',
  display: 'swap',
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className={`${michroma.variable} ${inter.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </body>
  );
}
