//elementos html
const login = document.querySelector(".login");
const user = document.getElementById("user");
const btEntrar = document.querySelector("#btEntrar");
const chat = document.querySelector(".chat");
const mensagens = document.querySelector(".mensagens");
const entradamsg = document.querySelector("#entradamsg");
const btEnviar = document.querySelector("#btEnviar");

//socket.io na parte do cliente
let socket = null;
let nomeusuario = "";

function adicionarMensagem(tipo, msg) {
  if (tipo === "eu") {
    mensagens.innerHTML += `<p class="msgEu">${msg} :${nomeusuario}</p>`;
  } else if (tipo === "ele") {
    mensagens.innerHTML += `<p class="msgEle">${msg}</p>`;
  } else if (tipo === "info") {
    mensagens.innerHTML += `<p class="info">${msg}</p>`;
  }
}

function registrarEventosSocket() {
  socket.on("login", (msg) => {
    adicionarMensagem("info", `${msg} entrou no chat`);
  });
  socket.on("out", (msg) => {
    adicionarMensagem("info", `${msg} está desconectado`);
  });
  socket.on("chat message", (msg) => {
    adicionarMensagem("ele", msg);
  });
}

btEntrar.onclick = () => {
  nomeusuario = user.value.trim().toLowerCase();
  if (nomeusuario !== "") {
    user.value = "";
    login.style.display = "none";
    chat.style.display = "block";
    socket = io();
    socket.emit("login", nomeusuario);
    registrarEventosSocket();
  }
};

btEnviar.onclick = () => {
  if (entradamsg.value !== "") {
    adicionarMensagem("eu", entradamsg.value);
    socket.emit("chat message", nomeusuario + ":" + entradamsg.value);
    entradamsg.value = "";
  }
};
