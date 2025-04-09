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
          setTimeout(typeLine, 1000); // short pause
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
      setTimeout(typeLine, isDeleting ? 30 : 50);
    }
  }

  typeLine(); // Only call once!
});

