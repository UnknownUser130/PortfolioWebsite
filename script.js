// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
window.addEventListener("load", () => {
  const typewriterElement = document.querySelector(".typewriter");

  // Reset the animation by temporarily removing and reapplying the class
  typewriterElement.style.animation = "none"; // Stop the animation temporarily
  typewriterElement.offsetHeight; // Trigger a reflow to reset the animation
  typewriterElement.style.animation = ""; // Reapply the animation
});
