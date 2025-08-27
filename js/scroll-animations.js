document.addEventListener("DOMContentLoaded", function () {
  // ========================= General scroll reveal (for elements with .scroll-reveal) =========================
  const scrollRevealSections = document.querySelectorAll(".scroll-reveal");

  const scrollReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    scrollRevealSections.forEach(section => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", scrollReveal);
  scrollReveal();

  // ========================= Organize, Newsletter, Partners Sections =========================
  const animatedSections = document.querySelectorAll("#organize, #newsletter, .partners-section");

  const observerOptions = {
    threshold: 0.2 // 20% visible triggers animation
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});



// ✅ Scroll Animation for All Sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".fade-section, .partners-section, .testimonial-section, .pricing-section"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  // Run on load
  revealOnScroll();

  // Run on scroll
  window.addEventListener("scroll", revealOnScroll);
});




document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("custom-footer");

  function checkFooterInView() {
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight - 50) {
      footer.classList.add("show");
      window.removeEventListener("scroll", checkFooterInView); // Run once
    }
  }

  window.addEventListener("scroll", checkFooterInView);
  checkFooterInView(); // Check on load in case it's already visible
});



