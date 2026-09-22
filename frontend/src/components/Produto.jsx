function Produto({ nome, categoria, preco }) {
  return (
    <div className="produto">
      <h3>{nome}</h3>

      <p>
        <strong>Categoria:</strong> {categoria}
      </p>

      <p>
        <strong>Preço:</strong> R$ {preco.toFixed(2).replace(".", ",")}
      </p>
    </div>
  );
}

export default Produto;