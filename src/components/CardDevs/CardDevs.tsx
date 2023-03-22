import Image from "next/image";
import martiPic from "@/../public/marti.jpg"
import meliPic from "@/../public/meli.jpg"

export default function CardDevs() {
  return (
    <>
      <section className="flex flex-col w-auto">
        <article className="flex flex-row">
          <div className="flex p-3 flex-col justify-center">
            <Image src={martiPic} alt="Martina" height={400}
              className="rounded-full flex-2" />
          </div>

          <div className="flex flex-col w-1/2 ">
            <h3 className="flex flex-row text-3xl font-serif font-medium m-4 self-center">Martina Tortelli</h3>
            <p className="flex flex-row p-4 font-mono text-xl gap-4 self-end">
              Sou estudante de Tecnologia da Informação, com interesses em desenvolvimento de aplicações web/desktop,  e suporte técnico. Meus estudos são orientados para as tecnologias e linguagens mais usadas hoje no mercado, como Python, React, Node, JavaScript, TypeScript, entre outras. Além de construir projetos para empresas, quero colaborar com projetos que envolvam ações sociais, pois acredito na democratização das tecnologias e do espaço web como ferramenta para desenvolvimento pessoal, divulgação, e negócios.
            </p>
          </div>
        </article>

        <article className="flex flex-row-reverse w-1/2">
          <div className="flex flex-col p-3 reverse">
            <Image src={meliPic} alt="Melissa" height={400}
              className="rounded-full flex-2" />
          </div>

          <div className="flex flex-col w-1/2">
            <h3 className="flex flex-row text-3xl font-serif font-medium m-4 self-center">Melissa Tortelli</h3>
            <p className="flex flex-row p-4 font-mono text-xl gap-4 self-start">
              Atualmente sou estudante de Engenharia da Computação, com formação técnica em Desenvolvimento de Sistemas. Meus interesses na área são desenvolvimento web, front-end e back-end, design system.
            </p>
          </div>
        </article>
      </section>
    </>
  )
}