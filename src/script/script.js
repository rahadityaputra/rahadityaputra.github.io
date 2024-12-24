(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "ke8BUI1VcTs7Naovd",
  });
})();


AOS.init({
  duration : 1000
});

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
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

// Fungsi untuk menampilkan modal
function showModal() {
  document.getElementById("success-modal").classList.remove("hidden");
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("success-modal").classList.add("hidden");
}

// Panggil fungsi showModal() setelah pesan berhasil dikirim melalui email
// Contoh:
function sendMessage() {
  // Logika pengiriman email di sini
  // Jika berhasil, tampilkan modal
  showModal();
}

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


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
    backDelay: 1500
  });