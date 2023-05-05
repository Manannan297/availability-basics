// Определили имена управляющих клавиш
const ENTER = "Enter",
  SPACE = "Space",
  LEFT = "ArrowLeft",
  UP = "ArrowUp",
  RIGHT = "ArrowRight",
  DOWN = "ArrowDown";

const radioGroup = document.querySelector("#radio-group"),
  // [...] - сразу преобразовываем NodeList в массив
  buttons = [...radioGroup.querySelectorAll(".radio-button")];

let focusedButton = radioGroup.querySelector(".radio-button.checked"),
  focusedIndex = buttons.indexOf(focusedButton);

// Если нет отмеченной кнопки - с классом .checked, тогда берем первую
if (!focusedButton) {
  focusedButton = buttons[0];
  focusedIndex = 0;
}

// Обработка клика мышкой
radioGroup.addEventListener("click", (e) => {
  // Если кликнули по не отмеченной кнопке
  if (buttons.includes(e.target) && !e.target.classList.contains("checked")) {
    focusedIndex = buttons.indexOf(e.target);
    changeFocus();
  }
});

// Обработка нажатия клавиш
radioGroup.addEventListener("keydown", (e) => {
  switch (e.code) {
    case UP:
    case LEFT: {
      e.preventDefault();

      // Если фокус в начале радиогруппы, то переходим в конец
      if (focusedIndex === 0) {
        focusedIndex = buttons.length - 1;
      } else {
        focusedIndex--;
      }

      break;
    }

    case DOWN:
    case RIGHT: {
      e.preventDefault();

      // Если фокус в конце радиогруппы, то переходим в начало
      if (focusedIndex === buttons.length - 1) {
        focusedIndex = 0;
      } else {
        focusedIndex++;
      }

      break;
    }

    // Переходим к функции changeFocus для текущего элемента
    case ENTER:
    case SPACE: {
      break;
    }

    // Во всех остальных случаях ничего не делаем, выходим из обработчика
    default: {
      return;
    }
  }

  changeFocus();
});

/* Реализуем технику roving фокус - tabindex=0 переходит от старой кнопки к новой:
1. старой ставим tabindex=-1
2. новой tabindex=0
3. ставим фокус на новую кнопку
*/
function changeFocus() {
  // Устанавливаем старой кнопке tabindex=-1 и снимаем отметку .checked
  focusedButton.tabIndex = -1;
  focusedButton.classList.remove("checked");

  // Устанавливаем новой кнопке tabindex=0, фокусируем ее и отмечаем .checked
  focusedButton = buttons[focusedIndex];
  focusedButton.tabIndex = 0;
  focusedButton.focus();
  focusedButton.classList.add("checked");
}
