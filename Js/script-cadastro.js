document.getElementById('formCadastro').addEventListener('submit', async function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const cep = document.getElementById('cep').value;

  const dados = {
    nome,
    email,
    senha,
    CEP:cep
  };

  try {
    const resposta = await fetch('https://dc-descarte-certo-backend.onrender.com/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados) // ou os campos que estiverem no formulário
    });

    const resultado = await resposta.json();

    if (resposta.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
    } else {
        console.error('Erro do servidor:', resultado);
        alert('Erro ao cadastrar: ' + (resultado.erro || resultado.message || 'Erro desconhecido'));
    }

    } catch (erro) {
    alert('Erro ao conectar com o servidor: ' + erro.message);
}
});
