export default function Form() {
  return (
    <>
      <section className="w-1/2 gap-4">
        <h2 className="m-4 p-4 text-9xl  font-normal font-serif justify-start break-all">CONTATO</h2>
        <p className="m-4 p-4 text-xl justify-start font-mono">Estamos disponíveis para trabalhos de frellancer, fale com a gente para criarmos juntos. Nos envie uma mensagem para orçamentos!</p>
      </section>

      <section className="h-1/2 flex-1 m-4 p-4">
        <form action="" className="flex flex-col gap-4 w-full text-lg font-mono">
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

          <button
            className="my-5 inline-block rounded border-2 border-primary px-6 pt-2 pb-[6px] text-xl font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-slate-400 hover:bg-opacity-40 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            Enviar
          </button>

        </form>

      </section>
    </>
  )
}
