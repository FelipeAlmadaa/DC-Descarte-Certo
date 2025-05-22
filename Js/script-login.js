document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('form');

form.addEventListener('submit', async function (event) {
event.preventDefault();

const email = document.getElementById('email').value.trim();
const senha = document.getElementById('senha').value.trim();

if (!email || !senha) {
  alert('Por favor, preencha todos os campos.');
  return;
}

try {
  const resposta = await fetch('https://dc-descarte-certo-backend.onrender.com/api/usuarios/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  const dados = await resposta.json();

  if (resposta.ok) {
  localStorage.setItem('usuarioLogado', JSON.stringify({
    id: dados.usuarioId,
    nome: dados.nome,
    email: email
  }));

  alert('Login realizado com sucesso!');
  window.location.href = '/index.html';
}
 else {
    alert('Erro ao fazer login: ' + (dados.erro || dados.mensagem || 'Credenciais inválidas'));
  }
} catch (erro) {
  alert('Erro ao conectar com o servidor: ' + erro.message);
}
});
});