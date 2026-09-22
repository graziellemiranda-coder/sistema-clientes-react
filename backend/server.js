const express = require("express");
const cors = require("cors");

require("dotenv").config();

const clienteRoutes = require("./routes/clienteRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// Permite comunicação com o React
app.use(cors());

// Permite receber JSON
app.use(express.json());

// Rota principal da API
app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Sistema de Clientes funcionando!"
  });
});

// Rotas de clientes
app.use("/clientes", clienteRoutes);

app.listen(PORT, () => {

  console.log(`Servidor rodando em http://localhost:${PORT}`);

});