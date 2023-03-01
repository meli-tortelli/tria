import Image from "next/image";
import martiPic from "@/../public/marti.jpg"
import meliPic from "@/../public/meli.jpg"

export default function CardInfo() {
  return (
    <section className="m-8">
      <h1 className="text-3xl space-x-1">Quem somos</h1>
      <p className="text-lg justify-start text-justify">
        A TRIA é feita por nós, Martina e Melissa.
        Estudamos e trabalhamos com desenvolvimento, programação e TI, e buscamos oferecer as melhores Soluções em Tecnologia para você e sua empresa.
        Nosso trabalho é interdisciplinar e reúne experiências profissionais, acadêmicas e nossas referências de mundo.
        Converse com a gente. Converse com a TRIA.
      </p>
    </section>
  )
}
