(function () {
  const MENU_OPEN_CLASS = "is-open";

  const menuToggle = document.querySelector(".menu-toggle");
  const menuList = document.getElementById("menu-principal");

  if (menuToggle && menuList) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuList.classList.toggle(MENU_OPEN_CLASS);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    menuList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuList.classList.remove(MENU_OPEN_CLASS);
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("aria-controls");
      const answer = targetId ? document.getElementById(targetId) : null;
      if (!answer) return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
    });
  });

  const countdownElement = document.getElementById("countdown-text");
  const eventDate = new Date("2026-05-30T09:00:00-03:00");

  function updateCountdown() {
    if (!countdownElement) return;

    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();

    if (diff <= 0) {
      countdownElement.textContent =
        "Evento em 30/05/2026 (09h as 17h). Inscricoes sujeitas a disponibilidade.";
      return;
    }

    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);

    countdownElement.textContent =
      "Faltam " +
      days +
      " dias, " +
      hours +
      " horas e " +
      minutes +
      " minutos para o inicio.";
  }

  updateCountdown();
  window.setInterval(updateCountdown, 60000);

  const quantityInput = document.getElementById("inscricoes-qtd");
  const totalOutput = document.getElementById("investimento-total");
  const unitPrice = 20;

  function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function updateTotal() {
    if (!quantityInput || !totalOutput) return;

    const quantity = Math.max(1, Math.min(100, Number(quantityInput.value) || 1));
    quantityInput.value = String(quantity);
    totalOutput.textContent = formatCurrency(quantity * unitPrice);
  }

  if (quantityInput && totalOutput) {
    quantityInput.addEventListener("input", updateTotal);
    updateTotal();
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && revealItems.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("revealed");
    });
  }
})();
