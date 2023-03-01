export default function Form() {
  return (
    <>
      <h2 className="m-4 text-2xl font-medium">Nos envie uma mensagem!</h2>

      <form action="" className="m-4 flex flex-col w-20">
        <label htmlFor="name">Nome</label>
        <input type='text' id="name" />

        <label htmlFor="email">Email</label>
        <input type='email' id="email" />

        <label htmlFor="projeto">Tipo de Projeto</label>
        <input type='text' id="projeto" />

        <label htmlFor="descrição">Descrição do Projeto</label>
        <input type='textarea' id="descrição" />
      </form>
    </>
  )
}