const connection = require("../database");

function listarClientes(req, res) {

  const sql = "SELECT * FROM clientes ORDER BY id DESC";

  connection.query(sql, (erro, resultados) => {

    if (erro) {

      console.error(erro);

      return res.status(500).json({
        erro: "Erro ao buscar clientes."
      });

    }

    res.json(resultados);
  });
}


function cadastrarCliente(req, res) {

  const { nome, email, telefone } = req.body;

  if (!nome || !email || !telefone) {

    return res.status(400).json({
      erro: "Nome, e-mail e telefone são obrigatórios."
    });
  }

  const sql = `
    INSERT INTO clientes
    (nome, email, telefone)
    VALUES (?, ?, ?)
  `;

  connection.query(
    sql,
    [nome, email, telefone],
    (erro, resultado) => {

      if (erro) {

        console.error(erro);

        return res.status(500).json({
          erro: "Erro ao cadastrar cliente."
        });
      }

      res.status(201).json({
        id: resultado.insertId,
        nome,
        email,
        telefone
      });

    }
  );
}

module.exports = {
  listarClientes,
  cadastrarCliente
};