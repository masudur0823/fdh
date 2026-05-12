function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  document.documentElement.classList.toggle("light", currentTheme === "light");
  localStorage.setItem("fdh-theme", currentTheme);
  updateThemeIcons();
}

function updateThemeIcons() {
  document
    .querySelectorAll(".icon-sun")
    .forEach((el) => el.classList.toggle("hidden", currentTheme === "light"));
  document
    .querySelectorAll(".icon-moon")
    .forEach((el) => el.classList.toggle("hidden", currentTheme === "dark"));
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("fdh-theme") || "dark";
  const savedLang = localStorage.getItem("fdh-lang") || "en";
  currentTheme = savedTheme;
  currentLang = savedLang;
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  document.documentElement.classList.toggle("light", currentTheme === "light");
  updateThemeIcons();
  applyLang();

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const revObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.08 },
  );
  revealEls.forEach((el) => revObs.observe(el));

  // Metric bars
  const bars = document.querySelectorAll(".metric-fill");
  const barObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w + "%";
          barObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  bars.forEach((b) => barObs.observe(b));

  // Nav scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled-nav", window.scrollY > 60);
    },
    { passive: true },
  );

  // WA dot
  setTimeout(() => {
    const dot = document.querySelector(".wa-dot");
    if (dot) {
      dot.style.transform = "scale(0)";
      dot.style.transition = "transform 0.3s";
    }
  }, 4000);
});

function toggleMenu() {
  const m = document.getElementById("mobileMenu");
  const h = document.getElementById("hamburger");
  const isOpen = m.classList.toggle("open");
  h.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
  m.style.opacity = isOpen ? "1" : "0";
  m.style.pointerEvents = isOpen ? "all" : "none";
}

function closeMenu() {
  const m = document.getElementById("mobileMenu");
  const h = document.getElementById("hamburger");
  m.classList.remove("open");
  h.classList.remove("open");
  document.body.style.overflow = "";
  m.style.opacity = "0";
  m.style.pointerEvents = "none";
}
