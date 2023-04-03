import Image from "next/image";
import martiPic from "@/../public/marti.jpg"
import meliPic from "@/../public/meli.jpg"

export default function CardInfo() {
  return (
    <section className="m-4">
      <h1 className="text-6xl space-x-1 font-serif m-4">Quem somos</h1>
      <p className="text-lg justify-start text-justify font-mono m-4 gap-4">
        A TRIA é composta por nós, Martina e Melissa.
        Estudamos e trabalhamos com desenvolvimento, programação e TI, e buscamos oferecer as melhores Soluções em Tecnologia para você e sua empresa.
        Nosso trabalho é interdisciplinar e reúne experiências profissionais, acadêmicas e nossas referências de mundo.
        Converse com a gente. Converse com a TRIA.
      </p>
    </section>
  )
}
