export default function Form() {
  return (
    <section className="h-1/2 flex flex-col justify-center">
      <h2 className="m-4 text-2xl font-medium my-5 text-center">Nos envie uma mensagem!</h2>
      <h3 className="mb-4 text-lg">Estamos disponíveis para trabalhos de frellancer, fale com a gente para criarmos juntos.</h3>

      <form action="" className="flex flex-col gap-2 w-60 self-center text-lg">
        <div className="">
          <label htmlFor="name" className="flex text-right">Nome</label>
          <input type='text' id="name" className="flex form-input h-8 w-60 rounded" />
        </div>

        <div>
          <label htmlFor="email" className="flex text-right">Email</label>
          <input type='email' id="email" className="flex form-input w-60 h-8 rounded" />
        </div>

        <div>
          <label htmlFor="projeto" className="flex text-right">Tipo de Projeto
          </label>
          <input type='text' id="projeto" className="flex form-input h-8 w-60 rounded" />
        </div>

        <div>
          <label htmlFor="descrição" className="flex text-right">Descrição do Projeto</label>
          <textarea id="descrição" className="flex form-textarea resize-none w-60 rounded h-50"
          />
        </div>

        <button className="my-5">
          Enviar
        </button>

      </form>

    </section>
  )
}
