# ♻️ Descarte Certo – Front-End

Bem-vindo ao repositório front-end do projeto Descarte Certo (DC), uma plataforma digital desenvolvida para conscientização ambiental e apoio ao descarte correto de resíduos sólidos na cidade de São Luís - MA.

<p align="center">
  <img src="/imgs/lixeiras.png" alt="Logo Descarte Certo" width="300"/>
</p>

## 🌐 Acesse o site

🔗 Em breve disponível via [Vercel](https://vercel.com/) ou outra plataforma de hospedagem.

---

## 🧩 Funcionalidades

- ✅ Cadastro e login de usuários com autenticação
- ✅ Armazenamento de sessão com LocalStorage
- ✅ Interface adaptada conforme login do usuário
- ✅ Exibição de pontos de coleta em mapa interativo (Leaflet + API)
- ✅ Página de denúncias acessível somente para usuários autenticados
- ✅ Conteúdo educativo sobre descarte de resíduos
- ✅ Interface responsiva para dispositivos móveis

---

## 🖼️ Imagens

| Página Inicial             | Mapa Interativo           | Denúncias (restrita)       |
|---------------------------|---------------------------|-----------------------------|
| ![index](./imgs/thumb1.png) | ![mapa](./imgs/thumb2.png) | ![denuncias](./imgs/thumb3.png) |

---

## 🛠️ Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript Vanilla (ES6+)
- Biblioteca Leaflet.js (mapas interativos)
- Node.js e Express (API - ver repositório backend)
- MongoDB Atlas (Banco de dados)
- Vercel (Hospedagem front-end)

---

## 🗂️ Estrutura de Pastas
/
├── Pages/
│ ├── index.html
│ ├── login.html
│ ├── cadastro.html
│ ├── mapa.html
│ └── ...
├── Css/
│ └── estilo.css
├── Js/
│ ├── script-index.js
│ ├── script-login.js
│ └── ...
├── imgs/
│ └── faviconDC.png
└── README.md

yaml
Copiar
Editar

---

## 📦 Instalação local

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/DC-frontend.git
Abra o arquivo Pages/index.html no navegador ou use uma extensão de servidor local (ex: Live Server).

Verifique se o back-end está em funcionamento localmente ou hospedado.

🔒 Acesso Restrito
Algumas páginas (como Mapa e Denúncias) só estão acessíveis após login. Usuários não autenticados são redirecionados à página de login com uma mensagem amigável.

🧪 Melhorias Futuras
Autenticação JWT integrada entre front e back

Upload de imagens nas denúncias

Área do usuário com histórico de ações

Dashboard com estatísticas dos ecopontos

👨‍💻 Equipe
Este projeto foi desenvolvido durante o Desafio 4 – Conectando o Maranhão.

👤 Fulano (Líder e Back-end)

👤 Ciclana (Front-end)

👤 Beltrano (Design UI/UX)

📄 Licença
Este projeto é de código aberto e livre para fins educativos e sociais.
