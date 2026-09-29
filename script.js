// ===============================
// DAYAL META ADS PORTFOLIO
// JavaScript
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
  ".service-card, .work-card, .process-card, .section-heading, .about-content, .about-stats"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});


// ===============================
// Navbar Scroll Effect
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ===============================
// Automatic Copyright Year
// ===============================

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ===============================
// Dashboard Number Animation
// ===============================

function animateNumber(element, target, suffix = "") {
  let current = 0;
  const duration = 1200;
  const startTime = performance.now();

  function updateNumber(currentTime) {
    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    current = target * progress;

    element.textContent =
      current.toFixed(target % 1 !== 0 ? 1 : 0) + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  requestAnimationFrame(updateNumber);
}


// ===============================
// Page Loaded
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  // Small professional console message
  console.log(
    "Dayal Mondal | Meta Ads Specialist Portfolio"
  );
});
