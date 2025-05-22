document.querySelector('form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  try {
    const resposta = await fetch('http://localhost:5000/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      // Salva dados do usuário no localStorage
      localStorage.setItem('usuario', JSON.stringify({
        id: dados.usuarioId,
        email: email
        // você pode adicionar mais campos se a API retornar, como nome
      }));

      alert('Login realizado com sucesso!');
      window.location.href = '/Pages/home.html'; // Redireciona para a página principal
    } else {
      alert('Erro ao fazer login: ' + (dados.erro || dados.mensagem || 'Credenciais inválidas'));
    }
  } catch (erro) {
    alert('Erro ao conectar com o servidor: ' + erro.message);
  }
});
