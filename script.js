// Sticky navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Ripple effect on button
document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", function (e) {
    let circle = document.createElement("span");
    circle.classList.add("circle");
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

