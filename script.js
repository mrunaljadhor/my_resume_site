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

  // === Line-by-line Typing Animation ===
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector('.typing-text');
  const phrases = [
    "Electronics Engineer.",
    "Web Developer.",
    "Code. Create. Design."
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function typeLine() {
    const currentText = phrases[currentPhrase];
    if (textElement) {
      if (!isDeleting) {
        textElement.textContent = currentText.slice(0, currentChar + 1);
        currentChar++;
        if (currentChar === currentText.length) {
          isDeleting = true;
          setTimeout(typeLine, 2000); // Pause after full line
          return;
        }
      } else {
        textElement.textContent = currentText.slice(0, currentChar - 1);
        currentChar--;
        if (currentChar === 0) {
          isDeleting = false;
          currentPhrase = (currentPhrase + 1) % phrases.length;
        }
      }
      setTimeout(typeLine, isDeleting ? 40 : 80); // Typing speed
    }
  }

  typeLine(); // Start the animation
});
