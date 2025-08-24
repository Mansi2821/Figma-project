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

// Video Play/Pause with Play Icon
const video = document.getElementById("feature-video");
const playIcon = document.getElementById("play-icon");

video.addEventListener("click", toggleVideo);
playIcon.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (video.paused) {
    video.play();
    playIcon.classList.add("hidden");
  } else {
    video.pause();
    playIcon.classList.remove("hidden");
  }
}

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

// ✅ Testimonial Slider Logic
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let interval = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

// Dots click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearInterval(interval); // stop auto when manually clicked
    showSlide(i);
    interval = setInterval(nextSlide, 5000); // restart auto
  });
});


// Form submission
const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".modal .close");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // disable scroll
});

// Close modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // enable scroll
});

// Close when clicking outside
window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});



