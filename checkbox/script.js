// Получаем все кастомные чекбоксы на странице
const customCheckboxes = document.querySelectorAll(".js-checkbox");

// Перебираем все чекбоксы, чтобы обработать каждый
customCheckboxes.forEach((checkbox) => {
  // Обработка клика мышкой
  checkbox.addEventListener("click", (e) => {
    toggleCheckbox(e.target);
  });

  // Нажатие пробела
  checkbox.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      // Отменяем прокрутку
      e.preventDefault();

      // Добавляем класс .active
      e.target.classList.add("active");
    }
  });

  // Отжатие пробела
  checkbox.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      // Меняем статус чекбокса
      toggleCheckbox(e.target);

      // Убираем класс .active
      e.target.classList.remove("active");
    }
  });
});

// Переключаем статус чекбокса
function toggleCheckbox(checkbox) {
  checkbox.classList.toggle("checked");
}
