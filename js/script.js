// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeMenu = document.getElementById('close-menu');
const menuOverlay = document.getElementById('menu-overlay');

// Open menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
    menuOverlay.classList.add('active');
});

// Close menu
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// Click on overlay closes menu
menuOverlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
});




