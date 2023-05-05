// Получаем все кастомные кнопки на странице
const customButtons = document.querySelectorAll(".js-button");

// Определили названия нужных клавиш
const ENTER = "Enter",
  SPACE = "Space";

// Перебираем все кнопки, чтобы обработать каждую
customButtons.forEach((button) => {
  // Обработка клика мышкой
  button.addEventListener("click", () => {
    console.log("Клик мышью.");
  });

  // Обработка НАжатия пробела
  button.addEventListener("keydown", (e) => {
    if (e.code === SPACE) {
      // Отключаем прокрутку при нажатии пробела
      e.preventDefault();
      // Добавляем класс .active
      e.target.classList.add("active");
    }
  });

  // Обработка ОТжатия Enter и пробела
  button.addEventListener("keyup", (e) => {
    if (e.code === ENTER || e.code === SPACE) {
      console.log(`Клавиша ${e.code} отпущена.`);
      // Убираем класс .active
      e.target.classList.remove("active");
    }
  });
});
