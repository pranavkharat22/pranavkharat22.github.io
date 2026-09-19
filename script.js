const langToggle = document.getElementById("langToggle");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

let language = "en";

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang === "mr" ? "mr" : "en";
  document.body.classList.toggle("lang-marathi", lang === "mr");

  document.querySelectorAll("[data-en][data-mr]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });

  langToggle.textContent = lang === "en" ? "मराठी" : "English";
}

langToggle.addEventListener("click", () => {
  setLanguage(language === "en" ? "mr" : "en");
});

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

setLanguage("en");
