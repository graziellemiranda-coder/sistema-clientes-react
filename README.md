# Sistema de Clientes React

## 👩‍💻 Integrantes

* Grazielle dos Santos Miranda
* Maria Luiza de Santana dos Santos Nascimento

---

## 📋 Sobre o projeto

O **Sistema de Clientes React** é uma aplicação web desenvolvida para permitir o cadastro e a visualização de clientes de uma empresa.

A aplicação possui um Front-End desenvolvido com React, uma API desenvolvida com Node.js e Express e um banco de dados MySQL para armazenar as informações dos clientes.

O projeto foi desenvolvido com o objetivo de colocar em prática conceitos de desenvolvimento Front-End, Back-End, APIs REST, componentes React, Props, State, eventos, `map()` e `fetch()`.

---

## 🎯 Problema solucionado

A aplicação foi desenvolvida para facilitar o cadastro e a organização das informações dos clientes de uma empresa.

Por meio do sistema, o usuário consegue:

* Visualizar clientes cadastrados;
* Cadastrar novos clientes;
* Informar nome, e-mail e telefone;
* Enviar os dados para uma API;
* Armazenar os dados no banco de dados;
* Visualizar o novo cliente na aplicação após o cadastro.

---

## 🚀 Tecnologias utilizadas

### Front-End

* React
* Vite
* JavaScript
* JSX
* CSS
* HTML

### Back-End

* Node.js
* Express
* CORS
* dotenv

### Banco de Dados

* MySQL

### Ferramentas

* Visual Studio Code
* Postman
* Git
* GitHub

---

## 📁 Estrutura do projeto

```text
sistema-clientes-react/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Titulo.jsx
│   │   │   ├── Produto.jsx
│   │   │   ├── Cliente.jsx
│   │   │   └── FormularioCliente.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   │
│   ├── controllers/
│   │   └── clienteController.js
│   │
│   ├── routes/
│   │   └── clienteRoutes.js
│   │
│   ├── database.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── database/
│   └── banco.sql
│
├── .gitignore
│
└── README.md
```

---

# 💻 Como executar o projeto

## 1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm
* MySQL
* Git

---

# 🎨 Front-End

Entre na pasta do Front-End:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Vite disponibilizará a aplicação em:

```text
http://localhost:5173
```

Abra esse endereço no navegador.

---

# ⚙️ Back-End

Abra outro terminal.

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SUA_SENHA
DB_NAME=sistema_clientes
PORT=3000
```

Substitua `SUA_SENHA` pela senha utilizada no MySQL.

Depois execute:

```bash
npm run dev
```

A API será executada em:

```text
http://localhost:3000
```

---

# 🗄️ Banco de Dados

O projeto utiliza o banco de dados:

```text
sistema_clientes
```

A tabela utilizada é:

```text
clientes
```

## Estrutura da tabela

| Campo    | Tipo         | Descrição                |
| -------- | ------------ | ------------------------ |
| id       | INT          | Identificador do cliente |
| nome     | VARCHAR(100) | Nome do cliente          |
| email    | VARCHAR(150) | E-mail do cliente        |
| telefone | VARCHAR(30)  | Telefone do cliente      |

---

## 🛠️ Criação do banco

O arquivo SQL está localizado em:

```text
database/banco.sql
```

O banco pode ser criado utilizando:

```sql
CREATE DATABASE IF NOT EXISTS sistema_clientes;

USE sistema_clientes;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(30) NOT NULL
);
```

---

# 🔌 API

A aplicação possui uma API REST para comunicação entre o Front-End e o Back-End.

## GET /clientes

Retorna todos os clientes cadastrados.

```text
GET http://localhost:3000/clientes
```

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Maria Silva",
    "email": "maria@gmail.com",
    "telefone": "71999999999"
  }
]
```

---

## POST /clientes

Cadastra um novo cliente.

```text
POST http://localhost:3000/clientes
```

### Dados enviados

```json
{
  "nome": "Maria Silva",
  "email": "maria@gmail.com",
  "telefone": "71999999999"
}
```

### Exemplo de resposta

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@gmail.com",
  "telefone": "71999999999"
}
```

---

# ⚛️ Conceitos de React utilizados

O projeto utiliza os principais conceitos solicitados na atividade.

## Componentes

Foram criados componentes separados:

* `Titulo.jsx`
* `Produto.jsx`
* `Cliente.jsx`
* `FormularioCliente.jsx`

---

## JSX

Os componentes da aplicação utilizam JSX para construir a interface.

Exemplo:

```jsx
<h1>Sistema de Clientes</h1>
```

---

## Props

O componente `Cliente` recebe os dados por Props.

Exemplo:

```jsx
<Cliente
  nome={cliente.nome}
  email={cliente.email}
  telefone={cliente.telefone}
/>
```

---

## State

O React utiliza State para controlar os clientes e os dados preenchidos no formulário.

Exemplo:

```jsx
const [clientes, setClientes] = useState([]);
```

Também são utilizados States para:

* Nome;
* E-mail;
* Telefone.

---

## Eventos

O formulário utiliza eventos do React para capturar as informações digitadas pelo usuário.

Exemplo:

```jsx
onChange={(e) => setNome(e.target.value)}
```

Também é utilizado:

```jsx
onSubmit
```

para realizar o cadastro.

---

## map()

O método `map()` é utilizado para percorrer a lista de clientes e apresentar cada cliente utilizando o componente `Cliente`.

Exemplo:

```jsx
clientes.map((cliente) => (
  <Cliente
    key={cliente.id}
    nome={cliente.nome}
    email={cliente.email}
    telefone={cliente.telefone}
  />
))
```

---

# 🌐 Comunicação com a API

O Front-End utiliza `fetch()` para se comunicar com a API.

Para buscar os clientes:

```javascript
fetch("http://localhost:3000/clientes")
```

Para cadastrar:

```javascript
fetch("http://localhost:3000/clientes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nome,
    email,
    telefone
  })
})
```

---

# 🔄 Fluxo da aplicação

O funcionamento do sistema segue o seguinte fluxo:

```text
USUÁRIO
   ↓
REACT / JSX
   ↓
COMPONENTES
   ↓
STATE
   ↓
fetch()
   ↓
API
   ↓
BACK-END
   ↓
BANCO DE DADOS
```

Quando os dados são retornados:

```text
BANCO DE DADOS
   ↓
BACK-END
   ↓
API
   ↓
fetch()
   ↓
STATE
   ↓
REACT
   ↓
TELA
```

---

# 👤 Cadastro de cliente

O usuário preenche:

* Nome;
* E-mail;
* Telefone.

Depois clica em:

**Cadastrar cliente**

O React envia os dados utilizando `fetch()`.

A API recebe os dados através da rota:

```text
POST /clientes
```

O Back-End grava as informações no MySQL.

Depois o novo cliente é adicionado ao State do React e aparece na tela sem precisar cadastrar manualmente o cliente novamente.

---

# 🧪 Testes da API

As rotas da API podem ser testadas utilizando o Postman.

## GET

```text
GET http://localhost:3000/clientes
```

## POST

```text
POST http://localhost:3000/clientes
```

Exemplo:

```json
{
  "nome": "Grazielle Miranda",
  "email": "grazimiranda@gmail.com",
  "telefone": "71081020070"
}
```

Também é possível verificar os dados diretamente no MySQL:

```sql
SELECT * FROM clientes;
```

---

# 🎨 Interface

A aplicação possui uma identidade visual própria utilizando CSS.

Foram estilizados:

* Cabeçalho;
* Títulos;
* Formulário;
* Campos de entrada;
* Botões;
* Lista de clientes;
* Cards de clientes;
* Cards de produtos;
* Rodapé;
* Layout responsivo.

---

# 📸 Captura de tela

Adicione aqui uma captura de tela da aplicação funcionando.

Exemplo:

```text
![Sistema de Clientes](imagem-do-projeto.png)
```

Coloque a imagem dentro do projeto e altere o nome no código acima conforme o nome do arquivo.

---

# 📦 Funcionalidades

* [x] Criar interface com React
* [x] Utilizar JSX
* [x] Criar componentes
* [x] Utilizar Props
* [x] Utilizar State
* [x] Utilizar eventos
* [x] Utilizar `map()`
* [x] Criar formulário
* [x] Cadastrar clientes
* [x] Listar clientes
* [x] Utilizar `fetch()`
* [x] Criar API REST
* [x] Criar rota GET `/clientes`
* [x] Criar rota POST `/clientes`
* [x] Utilizar Node.js
* [x] Utilizar Express
* [x] Utilizar MySQL
* [x] Criar banco de dados
* [x] Criar tabela de clientes
* [x] Estilizar a aplicação com CSS
* [x] Publicar no GitHub

---

# 📚 Objetivo acadêmico

O projeto foi desenvolvido para aplicar os conhecimentos estudados em aula relacionados a:

* React;
* Vite;
* JavaScript;
* JSX;
* Componentes;
* Props;
* State;
* Eventos;
* `map()`;
* CSS;
* Node.js;
* API REST;
* Express;
* MySQL;
* Git;
* GitHub.

---

# 👩‍💻 Integrantes

### Grazielle dos Santos Miranda

### Maria Luiza de Santana dos Santos Nascimento

---

# 📌 Projeto

**Nome:** Sistema de Clientes React

**Repositório:** sistema-clientes-react

**Front-End:** React + Vite

**Back-End:** Node.js + Express

**Banco de Dados:** MySQL
