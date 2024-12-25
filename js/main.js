import { closeModal } from "./helper.js";
import { showModal } from "./helper.js";

import "../lib/aos.js";

(function () {
  emailjs.init({
    publicKey: "ke8BUI1VcTs7Naovd",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_atewii8", "template_qfrpmzc", this).then(
        () => {
          console.log("SUCCESS!");
          showModal();
          this.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};

const menuToggle = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuToggle.classList.toggle("is-active");
});


const closeModals = document.querySelectorAll('.close-modal');
closeModals.forEach(button => {
  button.addEventListener('click', closeModal);
})

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-red-700', 'text-white');
  } else {
    navbar.classList.remove('bg-red-700', 'text-white');
  }
});

var typed = new Typed('#greeting', {
  strings: ["Hi, I'm Rahaditya.","I'm a Web Developer.", "I Build Interactive Websites."],
  typeSpeed: 50,
  loop: true,
  backSpeed: 25,
  backDelay: 1500,
  showCursor: false,
});
