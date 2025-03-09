document.addEventListener("contextmenu", (event) => {
    if (event.target.tagName === "VIDEO") {
      event.preventDefault(); // Bloqueia o menu de contexto
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const description = document.querySelector(".description");
    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", function () {
        description.classList.toggle("expanded");
        toggleBtn.textContent = description.classList.contains("expanded") ? "Mostrar menos" : "mais";
    });
});
