import Image from "next/image";
import martiPic from "@/../public/marti.jpg"
import meliPic from "@/../public/meli.jpg"

export default function CardDevs() {
  return (
    <>
      <section className="flex flex-col">
        <article className="flex flex-row p-3">
          <Image src={martiPic} alt="Martina" height={400}
            className="rounded-full p-4" />
          <h3 className="inline-flex min-w-max self-center text-2xl font-medium">Martina Tortelli</h3>
          <p className="p-4 self-center text-xl">
            Sou estudante de Tecnologia da Informação, com interesses em desenvolvimento de aplicações web e desktop,  e manutenção de hardware.
          </p>
        </article>

        <article className="flex flex-row-reverse p-6">
          <Image src={meliPic} alt="Melissa" height={400}
            className="rounded-full p-4" />
          <h3 className="inline-flex min-w-max self-center text-2xl font-medium">Melissa Tortelli</h3>
          <p className="p-4 self-center text-xl">
            Atualmente sou estudante de Engenharia da Computação, com formação técnica em Desenvolvimento de Sistemas. Meus interesses na área são desenvolvimento web, front-end e back-end, design system
          </p>
        </article>
      </section>
    </>
  )
}