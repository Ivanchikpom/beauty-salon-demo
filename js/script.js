document.addEventListener("DOMContentLoaded", () => {
  // REVEAL
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (!reduce) {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.88;
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) el.classList.add("show");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  } else {
    reveals.forEach((el) => el.classList.add("show"));
  }

  // BURGER MENU
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  if (burger && menu) {
    const close = () => {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => e.key === "Escape" && close());
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!menu.contains(t) && !burger.contains(t)) close();
    });
  }

  // DEMO FORM
  const form = document.getElementById("demoForm");
  const note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent = "✅ Дякуємо! Це демо — заявка не відправляється на сервер. (Можемо підключити Netlify Forms)";
      form.reset();
    });
  }

  // TO TOP
  const toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) toTop.classList.add("show");
      else toTop.classList.remove("show");
    });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
