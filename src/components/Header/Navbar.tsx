import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='md:w-1/2 '>
      <ul className='flex items-center justify-end'>
        <li className='px-3 py-2 uppercase text-sm hover:underline'>
          <Link href='/'>Início</Link>
        </li>
        <li
          className='group px-3 py-2 uppercase text-sm relative hover:underline'
          tabIndex={0}
        >
          <span className='peer pointer-events-none'>Quem Somos</span>
          <ul className='hidden group-focus-within:block peer-hover:flex transition duration-150 hover:ease-in group-hover:block hover:flex flex-col w-[200px] py-3 absolute'>
            <li className='font-medium mb-2'>
              <Link className='' href='/quem-somos'>
                Desenvolvedoras
              </Link>
            </li>
            <li className='font-medium'>
              <Link href='/nosso-trabalho'>Nosso trabalho</Link>
            </li>
          </ul>
        </li>
        <li className='px-3 py-2 uppercase text-sm hover:underline'>
          <Link href='/contato'>Contato</Link>
        </li>
        <li className='px-3 py-2 uppercase text-sm hover:underline'>
          <Link href='/portfolio'>Portfólio</Link>
        </li>
      </ul>
    </nav>
  );
}
