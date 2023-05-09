const ESC = "Escape",
  TAB = "Tab";

const btnOpenPopup = document.querySelector("#open-popup"),
  popup = document.querySelector("#popup"),
  popupOverlay = popup.querySelector(".popup-overlay"),
  btnClosePopup = popup.querySelector(".popup-close");

let focusedElementBeforePopup;

// Селекторы интерактивных элементов
const focusableSelectors =
  'a[href], area[href], button, input, textarea, select, details, iframe, embed, object, [tabindex="0"]';

// Получаем интерактивные элементы в модалке, кроме отключенных
const focusableElements = [
  ...popup.querySelectorAll(focusableSelectors),
].filter((item) => !item.hasAttribute("disabled"));

// Первый и последний интерактивный элемент модалки
const firstTabStop = focusableElements[0],
  lastTabStop = focusableElements[focusableElements.length - 1];

// Открыть модалку по клику на "Нажми на кнопку"
btnOpenPopup.addEventListener("click", openPopup);

// Закрыть модалку по клику на "Закрыть" (крестик)
btnClosePopup.addEventListener("click", closePopup);

// Закрыть модалку по клику на подложку
popupOverlay.addEventListener("click", closePopup);

// Обработка нажатия клавиш - Esc, Tab, Shift + Tab
popup.addEventListener("keydown", (e) => {
  // Закрыть модалку по нажатию Esc
  if (e.code === ESC) {
    closePopup();
  }
  // Tab на последнем элементе
  if (e.code === TAB && !e.shiftKey && document.activeElement === lastTabStop) {
    e.preventDefault();
    firstTabStop.focus();
  }
  // Shift + Tab на первом элементе
  if (e.code === TAB && e.shiftKey && document.activeElement === firstTabStop) {
    e.preventDefault();
    lastTabStop.focus();
  }
});

function openPopup() {
  // Получаем элемент в фокусе до открытия модалки
  focusedElementBeforePopup = document.activeElement;
  popup.classList.add("active");
  popup.focus();
}

function closePopup() {
  popup.classList.remove("active");
  // Возвращаем фокус на элемент, активный до открытия модалки
  focusedElementBeforePopup.focus();
}
