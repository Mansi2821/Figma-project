// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close");
  const contactSection = document.querySelector(".contact-section");

  // === Modal Functions ===
  function showModal() {
    modal.style.display = "block";
    modal.querySelector(".modal-content").style.animation = "slideDownFade 0.4s ease forwards";
  }

  function hideModal() {
    modal.querySelector(".modal-content").style.animation = "slideUpFade 0.3s ease forwards";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }

  // === Form Submit Event ===
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    showModal();
    form.reset();
  });

  // === Modal Close Events ===
  closeBtn.addEventListener("click", hideModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  // === Scroll Animation for Contact Section ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(contactSection);
});




