// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Menutup menu saat salah satu link diklik (di mode HP)
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});