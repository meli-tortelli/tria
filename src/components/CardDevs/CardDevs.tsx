import Image from "next/image";
import martiPic from "@/../public/marti.jpg"
import meliPic from "@/../public/meli.jpg"

export default function CardDevs() {
  return (
    <>
      <section className="flex flex-col">
        <article className="flex flex-row p-4">
          <div className="flex">
            <Image src={martiPic} alt="Martina" height={400}
              className="rounded-full p-4 flex-2" />
          </div>

          <div className="flex flex-wrap">
            <h3 className="flex flex-row text-3xl font-serif font-medium">Martina Tortelli</h3>
            <p className="flex flex-row p-4 font-mono text-xl">
              Sou estudante de Tecnologia da Informação, com interesses em desenvolvimento de aplicações web e desktop,  e manutenção de hardware.
            </p>
          </div>
        </article>

        <article className="flex flex-row-reverse p-4">
          <div className="flex">
            <Image src={meliPic} alt="Melissa" height={400}
              className="rounded-full p-4 flex-2" />
          </div>

          <div className="flex flex-wrap">
            <h3 className="flex flex-row text-3xl font-serif font-medium">Melissa Tortelli</h3>
            <p className="flex flex-row p-4 font-mono text-xl">
              Atualmente sou estudante de Engenharia da Computação, com formação técnica em Desenvolvimento de Sistemas. Meus interesses na área são desenvolvimento web, front-end e back-end, design system
            </p>
          </div>
        </article>
      </section>
    </>
  )
}