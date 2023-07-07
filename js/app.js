/* Al hacer click en header__hamburguerButton, header__heroNavegacion haga toggle a .activo */

const button = document.querySelector(".header__hamburguerButton");
const nav = document.querySelector(".header__heroNavegacion");

button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});
