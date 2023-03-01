export default function Form() {
  return (
    <section className="h-1/2 text-center">
      <h2 className="m-4 text-2xl font-medium my-5">Nos envie uma mensagem!</h2>
      <h3>Estamos disponíveis para trabalhos de frella, fale com a gente para criarmos juntos.</h3>

      <form action="" className="flex flex-col w-60 self-center">
        <div>
          <label htmlFor="name" className="flex text-right">Nome</label>
          <input type='text' id="name" className="form-input h-8 rounded" />
        </div>

        <div>
          <label htmlFor="email" className="flex text-right">Email</label>
          <input type='email' id="email" className="form-input h-8 rounded" />
        </div>

        <div>
          <label htmlFor="projeto" className="flex text-right">Tipo de Projeto
          </label>
          <input type='text' id="projeto" className="form-input h-8 rounded" />
        </div>

        <div>
          <label htmlFor="descrição" className="flex text-right">Descrição do Projeto</label>
          <textarea id="descrição" className="form-textarea resize-none rounded"
          />
        </div>

        <button className="my-5">
          Enviar
        </button>

      </form>

    </section>
  )
}
