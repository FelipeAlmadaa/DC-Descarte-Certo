document.addEventListener("DOMContentLoaded", () => {
const authArea = document.getElementById("auth-area");
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuario && usuario.nome) {
    authArea.innerHTML = `
    <span class="user-name">Olá, ${usuario.nome}</span>
    <button class="logout" onclick="logout()">Sair</button>
    `;
} else {
    authArea.innerHTML = `
    <button onclick="window.location.href='/login.html'" class="login">Entrar</button>
    <button onclick="window.location.href='/cadastro.html'" class="signup">Cadastre-se</button>
    `;
}
});

function logout() {
localStorage.removeItem("usuarioLogado");
window.location.href = "/index.html";
}

