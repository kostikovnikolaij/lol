// Получаем элементы
const overlay = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeX = document.getElementById("closeX");

// Открыть
openBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

// Закрыть по кнопкам
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
}); 
closeX.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// Закрыть по клику на затемнённый фон
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

// Закрыть по Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove("active");
  }
});
