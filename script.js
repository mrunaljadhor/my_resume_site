// === Scroll Progress Bar ===
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;

  document.body.style.setProperty('--scroll', `${scrolled}%`);
  document.body.style.setProperty('--scroll-width', `${scrolled}%`);
  document.body.style.setProperty('--scroll-color', '#d63384');
  document.body.style.setProperty('--scroll-bg', '#ffc1e3');

  document.body.style.setProperty('--scroll-bar', `
    linear-gradient(to right, var(--scroll-color) var(--scroll-width), var(--scroll-bg) 0)
  `);

  document.body.style.setProperty('background-image', `var(--scroll-bar)`);
});

// === Smooth Page Fade On Load (already in CSS, just re-trigger) ===
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector('.main');
  if (main) {
    main.classList.add('fade-in');
  }

  // === Typing Animation (only on homepage) ===
  const phrases = [
    "Electronics Engineer.",
    "Web Developer.",
    "Dreaming in pink & pixels 🌸"
  ];

  const textElement = document.querySelector('.typing-text');
  let currentPhrase = 0;

  if (textElement) {
    function updateTypingText() {
      textElement.textContent = phrases[currentPhrase];
      textElement.classList.remove("typing-text");
      void textElement.offsetWidth; // Force reflow to reset animation
      textElement.classList.add("typing-text");
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }

    setInterval(updateTypingText, 4000);
  }
});
