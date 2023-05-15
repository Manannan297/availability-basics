let menu = document.querySelector('#menu'),
  navLinks = [...menu.querySelectorAll('.nav__link')];

menu.addEventListener('click', (e) => {
  // Ссылка навигации?
  if (navLinks.includes(e.target)) {
    let gotoId = e.target.getAttribute('data-section'),
      section = document.querySelector(`#${gotoId}`),
      location = document.location;
      
    // Тогда ставим фокус на нужную секцию
    section.focus();

    // Добавляем хэш секции в адрес страницы
    document.location.hash = '#' + gotoId;
    document.location.href = location.origin + location.pathname + '#' + gotoId;
  }
});