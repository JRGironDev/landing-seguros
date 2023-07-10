document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".header__heroNavegacion a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* Al hacer click en header__hamburguerButton, header__heroNavegacion haga toggle a .activo */

const button = document.querySelector(".header__hamburguerButton");
const nav = document.querySelector(".header__heroNavegacion");

button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});
