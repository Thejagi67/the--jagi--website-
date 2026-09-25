const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
    `Hello The Jagi,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Subject: ${subject}%0A` +
    `Message: ${message}`;

  window.open(
    `https://wa.me/916307152108?text=${whatsappMessage}`,
    "_blank"
  );

  form.reset();
});

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".site-header nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});

const navLinks = document.querySelectorAll(".site-header nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
  });
});
