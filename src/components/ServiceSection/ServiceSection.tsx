import Link from 'next/link';
import { content } from './data';

export default function ServiceSection() {
  return (
    <>
      <section className='mx-3 my-4 grid grid-cols-3 gap-4'>
        {content.map((item, index) => {
          return (
            <div key={index} className='px-5 py-3'>
              <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-lg py-3'>{item.description}</p>
            </div>
          );
        })}
        <Link
          href='/contato'
          className='underline flex justify-start items-center'
        >
          Clique aqui para saber mais
          <span className='inline-block ml-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 256 256'
            >
              <path
                fill='#888888'
                d='m224.5 136.5l-72 72a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17L187 140H40a12 12 0 0 1 0-24h147l-51.5-51.5a12 12 0 0 1 17-17l72 72a12 12 0 0 1 0 17Z'
              />
            </svg>
          </span>
        </Link>
      </section>
    </>
  );
}
