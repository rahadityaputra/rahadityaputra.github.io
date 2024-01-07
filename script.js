const menuToggle = document.querySelector("nav .menu-toggle");
const menu = document.querySelector("nav .menu");
menuToggle.addEventListener("click", function () {
	menu.classList.toggle("animasi");
});
