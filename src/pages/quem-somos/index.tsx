import martiPic from "@/../public/marti.jpg"
import meliPic from "@/../public/meli.jpg"
import Image from "next/image"

export default function AboutPage(){
  return (
    <>
      <section className="m-8">
        <div>
          <h1 className="text-3xl space-x-1">Quem somos</h1>

          <p className="text-lg justify-start text-justify">
          A TRIA é feita por nós, Martina e Melissa.
          Estudamos e trabalhamos com desenvolvimento, programação e TI, e buscamos oferecer as melhores Soluções em Tecnologia para você e sua empresa.
          Nosso trabalho é interdisciplinar e reúne experiências profissionais, acadêmicas e nossas referências de mundo.
          Converse com a gente. Converse com a TRIA.
          </p>
        </div>
      </section>

      <section className="flex flex-col">
        <article className="p-4">
          <Image src={martiPic} alt="Martina" height={400} className="rounded-full"/>
          Martina Tortelli
            <aside>
              Estudante de Tecnologia da Informação, com interesses em aplicações para desenvolvimento web e desktop, automação e manutenção de hardware. 
            </aside>
        </article>

        <article className="p-4">
          <Image src={meliPic} alt="Melissa" height={500} 
          className="rounded-full"/>
          Melissa Tortelli
            <aside>
              Atualmente sou estudante de Engenharia da Computação, com formação técnica em Desenvolvimento de Sistemas. Meus interesses na área são desenvolvimento front-end e back-end
            </aside>
        </article>
      </section>
    </>
  )
}