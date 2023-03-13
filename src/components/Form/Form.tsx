export default function Form() {
  return (
    <>
      <section className="w-1/2">
        <h2 className="m-4 text-9xl p-8 font-normal font-serif justify-start break-all">CONTATO</h2>
        <p className="m-4 p-8 sm:text-2xl justify-start font-mono">Estamos disponíveis para trabalhos de frellancer, fale com a gente para criarmos juntos.</p>
      </section>

      <section className="h-1/2 flex-1 m-4 p-10">
        <form action="" className="flex flex-col gap-2 w-full text-lg font-mono">
          <div className="">
            <label htmlFor="name" className="flex text-right">Nome</label>
            <input type='text' id="name" className="flex form-input h-8 w-full rounded" />
          </div>

          <div>
            <label htmlFor="email" className="flex text-right">Email</label>
            <input type='email' id="email" className="flex form-input w-full h-8 rounded" />
          </div>

          <div>
            <label htmlFor="projeto" className="flex text-right">Tipo de Projeto
            </label>
            <input type='text' id="projeto" className="flex form-input h-8 w-full rounded" />
          </div>

          <div>
            <label htmlFor="descrição" className="flex text-right">Descrição do Projeto</label>
            <textarea id="descrição" className="flex form-textarea resize-none w-full rounded h-50" />
          </div>

          <button className="my-5">
            Enviar
          </button>

        </form>

      </section>
    </>
  )
}
