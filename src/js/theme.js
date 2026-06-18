// ============================================================
// Theme Toggle & Interactive Elements
// ============================================================

/**
 * Initialize theme from localStorage or system preference
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = savedTheme === "light" ? "light" : "dark";

  applyTheme(theme);
}

/**
 * Apply theme to document
 */
function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  }
  updateThemeButton();
}

/**
 * Update theme toggle button text
 */
function updateThemeButton() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const isDark = !document.documentElement.hasAttribute("data-theme");
  button.textContent = isDark ? "☀️ Light" : "🌙 Dark";
}

/**
 * Toggle between themes
 */
function toggleTheme() {
  const isDark = !document.documentElement.hasAttribute("data-theme");
  applyTheme(isDark ? "light" : "dark");
}

/**
 * Smooth scroll for navigation links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Add scroll listener for nav highlight
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * Initialize all interactions on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();
  initSmoothScroll();
  initScrollSpy();

  // Theme toggle event listener
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});

/**
 * Utility: Intersection Observer for animations
 */
function observeElements(selector, classToAdd = "in-view") {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });
}
