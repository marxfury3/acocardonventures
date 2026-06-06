document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL REVEAL SYSTEM
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));


  /* =========================
     SMOOTH SCROLL FOR LINKS
  ========================= */

  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        e.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });


  /* =========================
     ACTIVE NAV HIGHLIGHT (OPTIONAL)
  ========================= */

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});