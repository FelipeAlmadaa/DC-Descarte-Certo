document.addEventListener('DOMContentLoaded', function () {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  // Verifica se o usuário está logado
  if (usuario) {
    // 1. Esconde os botões de login/cadastro
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) authButtons.innerHTML = `<button class="logout">Sair</button>`;

    // 2. Substitui a seção "convite"
    const convite = document.querySelector('.convite');
    if (convite) {
      convite.innerHTML = `
        <h2>Bem-vindo, ${usuario.email}!</h2>
        <p>Explore nossos conteúdos, denuncie irregularidades ou consulte pontos de coleta.</p>
        <a href="/mapa.html" class="btn cadastre-agora">Ver pontos de coleta</a>
      `;
    }

    // 3. Adiciona comportamento ao botão de logout
    const logoutButton = document.querySelector('.logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        localStorage.removeItem('usuarioLogado');
        alert('Você saiu com sucesso.');
        window.location.reload();
      });
    }
  }
});
