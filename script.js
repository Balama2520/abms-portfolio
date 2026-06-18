const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
const navbar = document.querySelector(".navbar");
const revealElements = document.querySelectorAll(
  ".experience-card, .project-card, .achievement-card, .cert-card, .volunteer-card"
);

/* Active navigation */
if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-10% 0px -45% 0px"
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/* Navbar style on scroll */
if (navbar) {
  const toggleNavbarState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };

  toggleNavbarState();
  window.addEventListener("scroll", toggleNavbarState);
}

/* Smooth scrolling with focus management */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });

    setTimeout(() => {
      target.removeAttribute("tabindex");
    }, 1000);
  });
});

/* Reveal on scroll */
if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((el) => {
    el.classList.add("hidden");
    revealObserver.observe(el);
  });
}

/* Footer year */
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Bala Maneesh Ayanala • Built as a clean recruiter-focused portfolio.`;
}