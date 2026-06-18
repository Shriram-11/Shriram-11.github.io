function getStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    return;
  }
}

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  setStoredTheme(theme);
  updateThemeButton();
}

function updateThemeButton() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const isDark = !document.documentElement.hasAttribute("data-theme");
  button.textContent = isDark ? "Light" : "Dark";
}

function initializeTheme() {
  const savedTheme = getStoredTheme();
  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
    return;
  }

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

function toggleTheme() {
  const isDark = !document.documentElement.hasAttribute("data-theme");
  applyTheme(isDark ? "light" : "dark");
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

function initProgressBar() {
  const bar = document.querySelector(".progress-bar");
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
    bar.style.transform = `scaleX(${progress})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();
  initSmoothScroll();
  initReveal();
  initProgressBar();

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", toggleTheme);
});

