// testimonial.js
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  const testimonialSection = document.querySelector(".testimonial-section");
  let currentIndex = 0;
  let slideInterval;

  // ==== SLIDER FUNCTIONALITY ====
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide();
    });
  });

  // ==== SCROLL FADE-IN ANIMATION ====
  const observerOptions = { threshold: 0.2 };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        testimonialSection.classList.add("visible");
        observer.unobserve(entry.target);

        // Start slider only after section is visible
        showSlide(currentIndex);
        startAutoSlide();
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);
  observer.observe(testimonialSection);
});
