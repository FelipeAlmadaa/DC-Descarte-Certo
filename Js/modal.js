window.alert = function (message) {
  const modal = document.getElementById("customAlert");
  const messageElement = document.getElementById("alertMessage");
  const closeButton = document.querySelector(".close-button");

  let autoCloseTimeout;

  // Mostra o modal
  messageElement.textContent = message;
  modal.style.display = "block";

  // Cancela qualquer timeout anterior
  clearTimeout(autoCloseTimeout);

  // Fecha após 3 segundos (3000 ms)
  autoCloseTimeout = setTimeout(() => {
    modal.style.display = "none";
  }, 3000);

  // Clicar no X fecha o modal e cancela o timeout
  closeButton.onclick = function () {
    modal.style.display = "none";
    clearTimeout(autoCloseTimeout);
  };

  // Clicar fora do conteúdo fecha o modal e cancela o timeout
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      clearTimeout(autoCloseTimeout);
    }
  };
};

function alertComRedirect(message, redirectUrl) {
  const modal = document.getElementById("customAlert");
  const messageElement = document.getElementById("alertMessage");
  const closeButton = document.querySelector(".close-button");

  let autoCloseTimeout;

  messageElement.textContent = message;
  modal.style.display = "block";

  clearTimeout(autoCloseTimeout);

  autoCloseTimeout = setTimeout(() => {
    modal.style.display = "none";
    window.location.href = redirectUrl;
  }, 3000);

  closeButton.onclick = function () {
    modal.style.display = "none";
    clearTimeout(autoCloseTimeout);
    window.location.href = redirectUrl;
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      clearTimeout(autoCloseTimeout);
      window.location.href = redirectUrl;
    }
  };
}
