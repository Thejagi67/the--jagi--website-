const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been received.');
  form.reset();
});const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".site-header nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});const navLinks = document.querySelectorAll(".site-header nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
