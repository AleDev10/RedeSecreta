//elementos html
const login = document.querySelector(".login");
const user = document.getElementById("user");
const btEntrar = document.querySelector("#btEntrar");
const chat = document.querySelector(".chat");
const mensagens = document.querySelector(".mensagens");
const entradamsg = document.querySelector("#entradamsg");
const btEnviar = document.querySelector("#btEnviar");
const form = document.querySelector("#meuform");
const entradaForm = document.querySelector("#entradaForm");
const btForm = document.querySelector("#btForm");

//socket.io na parte do cliente
let socket = null;
let nomeusuario = "";

function adicionarMensagem(tipo, msg) {
  switch (tipo) {
    case 'eu':
       mensagens.innerHTML += `<p class="msgEu">${msg} :${nomeusuario}</p>`;
      break;
    case 'ele':
       mensagens.innerHTML += `<p class="msgEle">${msg}</p>`;
      break;
    case 'info':
       mensagens.innerHTML += `<p class="info">${msg}</p>`;
      break;
    case 'link':
       mensagens.innerHTML += `<a class="info" href=${msg} target="_blank" rel="noopener noreferrer">arquivo enviado</a>`;
      break;
    default:
      console.log('nenhuma opção encontrada');
      break;
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
  socket.on('link',(msg)=>{
    adicionarMensagem('link',msg);
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

form.addEventListener('submit',async (e)=>{
  e.preventDefault();

  const formData = new FormData(form);
  
  await fetch('http://localhost:3000/arquivos',{
    method:'POST',
    body:formData
  });
  entradaForm.value = '';
});
