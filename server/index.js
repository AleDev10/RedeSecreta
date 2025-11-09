// Importações essenciais
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const multer = require("multer");
const porta = process.env.PORT || 3000;

// configurações do servidor
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//configuração do multer
const storage = multer.diskStorage({
  destination:function (req,file,cb) {
    cb(null,path.join(__dirname,'files'));
  },
  filename:function (req,file,cb) {
    cb(null,Date.now()+'-'+file.originalname)
  }
});
const files = multer({storage:storage});

// Importação das rotas
const paginaPrincipal = require("./routes/paginaPrincipal.js");

// Variáveis globais
let clientes = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));
app.use('/arquivos',express.static(path.join(__dirname,'files')));

// Rotas
app.use("/", paginaPrincipal);

//Rota especial
app.post('/arquivos',files.single('meuarquivo'),(req,res)=>{
  if (req.file){ 
    io.emit('link',`http://localhost:${porta}/arquivos/${req.file.filename}`);
    console.log(`http://localhost:${porta}/arquivos/${req.file.filename}`);
    }else{
      io.emit('link',`Problema ao criar link`);
      console.log("Erro ao enviar o arquivo");
    }
});

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

server.listen(porta,'0.0.0.0', () => {
  console.log(`Servidor rodando na porta http://0.0.0.0:${porta}`);
});
