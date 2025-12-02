document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-lead");
  const msg = document.querySelector("#mensagem-sucesso");

  form.addEventListener("submit", (e) => {
    msg.classList.remove("hidden");
    form.reset();
    e.preventDefault(); // evita recarregar a página
  });
});
