function verificarLoginAntesDeAcessar(url) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuario && usuario.nome) {
      window.location.href = url;
    } else {
      alert("Faça login para acessar esta funcionalidade.");
      window.location.href = "/Pages/login.html?msg=loginNecessario";

    }
}