const formulario = document.getElementById("formulario");
const botaoEnviar = document.getElementById("enviar");
const botaoSalvar = document.getElementById("salvar");

// Validação ao clicar no botão Enviar
botaoEnviar.addEventListener("click", function () {
  const campos = formulario.querySelectorAll("input, select, textarea");
  let valido = true;

  formulario.querySelectorAll(".erro").forEach((span) => {
    span.textContent = "";
    span.style.display = "none";
  });

  campos.forEach((input) => {
    const erroSpan = input.nextElementSibling;
    if (erroSpan && erroSpan.classList.contains("erro")) {
      if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
          erroSpan.textContent = "Campo obrigatório.";
        } else if (input.validity.patternMismatch) {
          erroSpan.textContent = "Digite apenas os números.";
        } else {
          erroSpan.textContent = "Valor inválido.";
        }
        erroSpan.style.display = "inline";
        valido = false;
      }
    }
  });

  if (valido) {
    alert("Formulário enviado com sucesso!");
    // formulario.submit(); // Ative se quiser enviar de verdade
  }
});

// Salvar os dados no localStorage
botaoSalvar.addEventListener("click", () => {
  const campos = formulario.querySelectorAll("input, select, textarea");

  campos.forEach((campo) => {
    if (
      campo.name &&
      campo.type !== "button" &&
      campo.type !== "submit" &&
      campo.type !== "reset"
    ) {
      localStorage.setItem(campo.name, campo.value);
    }
  });

  alert("Informações salvas localmente!");
});

// Recuperar os dados salvos ao carregar a página
window.addEventListener("load", () => {
  const campos = formulario.querySelectorAll("input, select, textarea");

  campos.forEach((campo) => {
    if (campo.name && localStorage.getItem(campo.name)) {
      campo.value = localStorage.getItem(campo.name);
    }
  });
});
