const menuBtn = document.querySelector(".menu-hamburguer");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
