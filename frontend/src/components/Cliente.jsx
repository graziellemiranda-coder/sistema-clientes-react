function Cliente({ nome, email, telefone }) {
  return (
    <div className="cliente-card">
      <div className="cliente-icone">
        👤
      </div>

      <div className="cliente-info">
        <h3>{nome}</h3>

        <p>
          <strong>E-mail:</strong> {email}
        </p>

        <p>
          <strong>Telefone:</strong> {telefone}
        </p>
      </div>
    </div>
  );
}

export default Cliente;