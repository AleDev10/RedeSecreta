//elementos html
const login = document.querySelector(".login");
const user = document.getElementById("user");
const btEntrar = document.querySelector("#btEntrar");
const chat = document.querySelector(".chat");
const mensagens = document.querySelector(".conversas");
const entradamsg = document.querySelector("#entradamsg");
const btEnviar = document.querySelector("#btEnviar");
const form = document.querySelector("#meuform");
const entradaForm = document.querySelector("#entradaForm");
const btForm = document.querySelector("#btForm");
const plus = document.querySelector('.icone');
const arquivos = document.querySelector('.arquivos');

//socket.io na parte do cliente
let socket = null;
let nomeusuario = "";

function adicionarMensagem(tipo, msg) {
  switch (tipo) {
    case 'eu':
       mensagens.innerHTML += `
       <div class="enviar">
            <h3>${nomeusuario}</h3>
            <p class="eu">${msg}</p>
          </div>`;
      break;
    case 'ele':
       mensagens.innerHTML += `
       <div class="receber">
            <h3>${msg.nome}</h3>
            <p class="eles">${msg.mensagem}</p>
      </div>`;
      break;
    case 'info':
       mensagens.innerHTML += `<h2>${msg}</h2>`;
      break;
    case 'link':
       mensagens.innerHTML += `<a class="infolink" href=${msg} target="_blank" rel="noopener noreferrer">arquivo enviado</a>`;
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
    chat.style.display = "flex";
    socket = io();
    socket.emit("login", nomeusuario);
    registrarEventosSocket();
  }
};
btEnviar.onclick = () => {
  if (entradamsg.value !== "") {
    adicionarMensagem("eu", entradamsg.value);
    socket.emit("chat message",{
      nome:nomeusuario, 
      mensagem: entradamsg.value
    });
    entradamsg.value = "";
  }
};
plus.onclick = ()=>{
  arquivos.style.display='block';
}
btForm.onclick = ()=>{
  arquivos.style.display='none';
}


form.addEventListener('submit',async (e)=>{
  e.preventDefault();

  const formData = new For6mData(form);
  
  await fetch('http://localhost:3000/arquivos',{
    method:'POST',
    body:formData
  });
  entradaForm.value = '';
});
