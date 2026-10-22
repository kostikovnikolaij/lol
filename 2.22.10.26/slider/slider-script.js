// === Элементы ===
const track = document.getElementById("track");
const slides = track.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsBox = document.getElementById("dots");

const total = slides.length; // сколько слайдов
let current = 0; // индекс текущего слайда

// === Создаём точки-индикаторы ===
for (let i = 0; i < total; i++) {
  const dot = document.createElement("button");
  dot.className = "slider-dot";
  dot.addEventListener("click", () => goTo(i));
  dotsBox.appendChild(dot);
}
const dots = dotsBox.querySelectorAll(".slider-dot");

// === Основная функция переключения ===
function goTo(index) {
  // Зацикливание: ушли за пределы — перескакиваем на другой конец
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  current = index;

  // Сдвигаем дорожку
  track.style.transform = `translateX(-${current * 100}%)`;

  // Обновляем активную точку
  dots.forEach((d, i) => d.classList.toggle("active", i === current));
}

// === Обработчики кнопок ===
prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));

// === Инициализация ===
goTo(0);
