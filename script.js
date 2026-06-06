// =========================
// SAFE PAGE INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {

  // Prevent horizontal scroll caused by JS-injected elements
  document.body.style.overflowX = "hidden";

  // =========================
  // REVEAL ON SCROLL (SAFE)
  // =========================

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));

  // =========================
  // FORCE RESPONSIVE IMAGES SAFETY
  // =========================

  document.querySelectorAll("img").forEach(img => {
    img.style.maxWidth = "100%";
    img.style.height = "auto";
  });

  // =========================
  // PREVENT LONG TEXT BREAKING LAYOUT
  // =========================

  document.querySelectorAll(".card, .section").forEach(el => {
    el.style.overflow = "hidden";
  });

});
