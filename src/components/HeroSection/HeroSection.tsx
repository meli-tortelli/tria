export default function HeroSection() {
  return (
    <section className='h-screen flex flex-col items-center justify-center gap-y-10 m-4'>
      <p className='text-3xl font-medium font-mono'>A TRIA apresenta soluções tecnológicas orientadas pela sua performance e de seu negócio nas redes.</p>
      <button className="my-5 inline-block rounded border-2 border-primary px-6 pt-2 pb-[6px] font-mono text-xl font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-slate-400 hover:bg-opacity-40 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
        Saiba mais
      </button>
    </section>
  );
}
