
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
  nav.classList.toggle("active");
};

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const scrollAnimate = (selector, offset = 100, delay = 150) => {
  const elements = document.querySelectorAll(selector);

  const inView = (el) => {
    return el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };

  const showElements = () => {
    elements.forEach((el, index) => {
      if (inView(el) && !el.classList.contains("show")) {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
          el.style.transition = "all 0.6s ease-out";
          el.classList.add("show");
        }, index * delay);
      }
    });
  };

  window.addEventListener("scroll", showElements);
  window.addEventListener("load", showElements);
};


scrollAnimate(".about-card", 100, 0);       // About Section
scrollAnimate(".education-card", 100, 0);   // Education Section
scrollAnimate(".project-card", 100, 150);   // Projects Section
scrollAnimate(".skill-card", 100, 150);     // Skills Section
scrollAnimate(".service-card", 100, 150);   // Services Section
scrollAnimate(".contact-form", 100, 0);     // Contact Form

const btn = document.getElementById("themeToggle");
const icon = btn.querySelector("i");

btn.onclick = () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  localStorage.setItem("theme", isLight ? "light" : "dark");

  // تغيير الأيقونة
  icon.className = isLight
    ?  "fa-solid fa-moon"
    :"fa-solid fa-sun";
};

// load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  icon.className = "fa-solid fa-sun";
}
// filtring objects
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

// مهم جدًا: إظهار كل الكروت أول ما الصفحة تفتح
cards.forEach(card => card.classList.add("show"));

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
        card.classList.add("show");
      } else {
        card.classList.add("hide");
        card.classList.remove("show");
      }
    });

  });
});