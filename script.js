// Typing Effect
const text = "Soham Patil";
const target = document.getElementById("typing-name");
let i = 0;

function type() {
    if (i < text.length) {
        target.textContent += text[i];
        i++;
        setTimeout(type, 100);
    }
}
window.addEventListener("load", type);

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
