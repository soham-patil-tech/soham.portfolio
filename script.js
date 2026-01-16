// Typing Effect
const text = "Soham Patil";
let index = 0;
const target = document.getElementById("typing-name");

function typeEffect() {
    if (index < text.length) {
        target.textContent += text[index++];
        setTimeout(typeEffect, 120);
    }
}

window.addEventListener("load", () => {
    target.textContent = "";
    typeEffect();
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));
