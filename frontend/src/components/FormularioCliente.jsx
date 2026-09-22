function FormularioCliente({
  nome,
  email,
  telefone,
  setNome,
  setEmail,
  setTelefone,
  cadastrarCliente
}) {
  return (
    <form className="formulario" onSubmit={cadastrarCliente}>

      <div className="campo">
        <label htmlFor="nome">Nome</label>

        <input
          id="nome"
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="email">E-mail</label>

        <input
          id="email"
          type="email"
          placeholder="Digite o e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="telefone">Telefone</label>

        <input
          id="telefone"
          type="text"
          placeholder="Digite o telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        Cadastrar cliente
      </button>

    </form>
  );
}

export default FormularioCliente;