import { useEffect, useState } from "react";

import Titulo from "./components/Titulo";
import Produto from "./components/Produto";
import Cliente from "./components/Cliente";
import FormularioCliente from "./components/FormularioCliente";

function App() {

  // STATE DOS CLIENTES
  const [clientes, setClientes] = useState([]);

  // STATE DO FORMULÁRIO
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  // STATE DOS PRODUTOS
  const [produtos] = useState([
    {
      id: 1,
      nome: "Notebook",
      categoria: "Informática",
      preco: 3500
    },
    {
      id: 2,
      nome: "Mouse",
      categoria: "Periféricos",
      preco: 120
    },
    {
      id: 3,
      nome: "Teclado",
      categoria: "Periféricos",
      preco: 180
    }
  ]);

  // BUSCAR CLIENTES NA API
  async function carregarClientes() {
    try {

      const resposta = await fetch("http://localhost:3000/clientes");

      if (!resposta.ok) {
        throw new Error("Erro ao buscar clientes.");
      }

      const dados = await resposta.json();

      setClientes(dados);

    } catch (erro) {

      console.error("Erro:", erro);

    }
  }

  // EXECUTA QUANDO A PÁGINA CARREGA
  useEffect(() => {
    carregarClientes();
  }, []);

  // CADASTRAR CLIENTE
  async function cadastrarCliente(event) {

    event.preventDefault();

    try {

      const resposta = await fetch("http://localhost:3000/clientes", {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          nome,
          email,
          telefone
        })
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar cliente.");
      }

      const novoCliente = await resposta.json();

      setClientes((listaAtual) => [
        ...listaAtual,
        novoCliente
      ]);

      setNome("");
      setEmail("");
      setTelefone("");

      alert("Cliente cadastrado com sucesso!");

    } catch (erro) {

      console.error("Erro:", erro);

      alert("Não foi possível cadastrar o cliente.");
    }
  }

  return (
    <div className="app">

      <Titulo />

      <main className="conteudo">

        {/* FORMULÁRIO */}

        <section className="secao">

          <div className="secao-titulo">

            <h2>Cadastrar cliente</h2>

            <p>
              Preencha os dados abaixo para adicionar um novo cliente.
            </p>

          </div>

          <FormularioCliente
            nome={nome}
            email={email}
            telefone={telefone}
            setNome={setNome}
            setEmail={setEmail}
            setTelefone={setTelefone}
            cadastrarCliente={cadastrarCliente}
          />

        </section>


        {/* CLIENTES */}

        <section className="secao">

          <div className="secao-titulo">

            <h2>Clientes cadastrados</h2>

            <p>
              Lista de clientes registrados no sistema.
            </p>

          </div>

          <div className="clientes-lista">

            {clientes.length === 0 ? (

              <p className="mensagem-vazia">
                Nenhum cliente cadastrado.
              </p>

            ) : (

              clientes.map((cliente) => (

                <Cliente
                  key={cliente.id}
                  nome={cliente.nome}
                  email={cliente.email}
                  telefone={cliente.telefone}
                />

              ))

            )}

          </div>

        </section>


        {/* PRODUTOS */}

        <section className="secao">

          <div className="secao-titulo">

            <h2>Produtos</h2>

            <p>
              Alguns produtos disponíveis na empresa.
            </p>

          </div>

          <div className="produtos-lista">

            {produtos.map((produto) => (

              <Produto
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
              />

            ))}

          </div>

        </section>

      </main>

      <footer>
        <p>Sistema de Clientes • React + API</p>
      </footer>

    </div>
  );
}

export default App;