import Image from 'next/image';
import triaPic from '@/../public/tria-logo.png';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center px-4 font-sans'>
      <Image src={triaPic} alt='Tria logo' height={150} priority />
      <Navbar />
    </header>
  );
}
