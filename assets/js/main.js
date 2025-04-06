const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbarNav");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
