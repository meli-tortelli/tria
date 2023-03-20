import { Button } from "../Button/button";

export default function HeroSection() {
  return (
    <section className='h-screen flex flex-col items-center justify-center gap-y-10 m-4'>
      <p className='text-3xl font-medium font-mono p-6'>A TRIA apresenta soluções tecnológicas orientadas pela sua performance e de seu negócio nas redes.</p>

      <Button title="Saiba mais" />

    </section>
  );
}
