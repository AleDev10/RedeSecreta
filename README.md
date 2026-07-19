# RedeSecreta 💬

Um chat em tempo real para rede local - Comunicação simples e privada entre computadores conectados na mesma rede.

## 🎯 Sobre o Projeto

RedeSecreta é uma aplicação web que permite comunicação instantânea entre usuários conectados à mesma rede local. Perfeito para ambientes empresariais, escolares ou domésticos onde você deseja comunicação rápida e segura sem depender de servidores externos.

## ✨ Características

- 💻 **Chat em Tempo Real** - Mensagens instantâneas entre usuários na rede local
- 🔒 **Privacidade** - Comunicação confinada à rede local
- 🌐 **Baseado em Web** - Acesse pelo navegador, sem instalação
- 📱 **Responsivo** - Funciona em desktop, tablet e mobile
- ⚡ **Leve e Rápido** - Interface intuitiva e desempenho otimizado

## 🛠️ Tecnologias Utilizadas

- **HTML** (40.7%) - Estrutura e markup
- **JavaScript** (33.6%) - Lógica da aplicação e interatividade em tempo real
- **CSS** (25.7%) - Estilização e design responsivo

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Computadores/dispositivos na mesma rede local
- Node.js e npm (caso utilize um servidor)

## 🚀 Como Começar

### 1. Clone o Repositório

```bash
git clone https://github.com/AleDev10/RedeSecreta.git
cd RedeSecreta
```

### 2. Instale as Dependências

Se o projeto usar npm:

```bash
npm install
```

### 3. Inicie o Servidor

```bash
npm start
```

Ou abra o arquivo `index.html` diretamente no navegador se for uma aplicação estática.

### 4. Acesse a Aplicação

Abra seu navegador e acesse:

```
http://localhost:[PORTA]
```

Ou use o IP da máquina para acessar de outro dispositivo na rede:

```
http://[SEU_IP_LOCAL]:[PORTA]
```

## 💡 Como Usar

1. **Abra a aplicação** em dois ou mais navegadores
2. **Digite seu nome de usuário** para identificação
3. **Comece a conversar** com os outros usuários conectados
4. **Envie mensagens** em tempo real

## 📁 Estrutura do Projeto

```
RedeSecreta/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos da aplicação
├── js/
│   └── script.js      # Lógica principal
└── README.md          # Este arquivo
```

## 🔧 Configuração

Para configurar a porta, hostname ou outras opções, edite o arquivo de configuração ou as variáveis em `script.js`:

```javascript
// Exemplo de configuração
const HOST = 'localhost';
const PORT = 3000;
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE) - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**AleDev10** - [GitHub Profile](https://github.com/AleDev10)

## 💬 Suporte

Se você tiver dúvidas ou encontrar problemas, abra uma [Issue](https://github.com/AleDev10/RedeSecreta/issues) no repositório.

## 🗺️ Roadmap

- [ ] Autenticação de usuários
- [ ] Suporte a grupos de conversa
- [ ] Compartilhamento de arquivos
- [ ] Histórico de mensagens
- [ ] Notificações de digitação
- [ ] Modo escuro/claro
- [ ] Suporte a emojis

---

**Desenvolvido com ❤️ para comunicação local eficiente**
