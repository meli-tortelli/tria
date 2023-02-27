import Link from 'next/link';

type LinkProps = {
  name: string;
  path: string;
  subPath?: { name: string; path: string }[];
}[];

export default function Navbar() {
  const links: LinkProps = [
    {
      name: 'Início',
      path: '/',
    },
    {
      name: 'Quem somos',
      path: '/quem-somos',
      subPath: [
        { name: 'Desenvolvedoras', path: '/desenvolvedoras' },
        { name: 'Nosso trabalho', path: '/nosso-trabalho' },
      ],
    },
    {
      name: 'Contato',
      path: '/contatos',
    },
    {
      name: 'Portfólio',
      path: '/portfolio',
    },
  ];

  // look if has submenu items
  const menuHasSubPath = (linksArr: LinkProps) => {
    return linksArr.filter(item => {
      item.hasOwnProperty('subPath');
    });
  };

  console.log(menuHasSubPath(links));

  return (
    <nav className='md:w-1/2 '>
      <ul className='flex items-center justify-end'>
        {links.map((link, key) => (
          <li key={key} className='px-3 py-2 uppercase text-sm hover:underline'>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
