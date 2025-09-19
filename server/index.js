// Importações essenciais
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const porta = process.env.PORT || 3000;

// configurações do servidor
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Importação das rotas
const paginaPrincipal = require("./routes/paginaPrincipal.js");

// Variáveis globais
let clientes = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

// Rotas principais
app.use("/", paginaPrincipal);

// Eventos do socket.io
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("mensagem:", msg);

    socket.broadcast.emit("chat message", msg);
  });

  socket.on("login", (nome) => {
    console.log("login:", nome + " entrou no chat");
    clientes.push({
      id: socket.id,
      nome: nome,
      ip: socket.handshake.address,
    });
    console.log("detalhes:", clientes);
    io.emit("login", nome);
  });

  socket.on("disconnect", () => {
    clientes.forEach((obj, index) => {
      if (obj.id == socket.id) {
        console.log("out:" + obj.nome + " está desconectado");
        io.emit("out", obj.nome);
        clientes.splice(index, 1);
      }
    });
  });
});

server.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
});
