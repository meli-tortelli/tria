import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1 className='text-5xl font-bold'>Hello World!</h1>
    </>
  );
}
