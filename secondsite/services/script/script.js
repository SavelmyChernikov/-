let changeThemeButtons = document.querySelectorAll('.changeTheme'); // Помещаем кнопки смены темы в переменную

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { // К каждой добавляем обработчик событий на клик
        let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
        applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`); // Помещаем путь к файлу темы в пустой link в head
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; // Показываем все кнопки смены темы
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
}
function toggleContent(element) {
    const container = element.parentElement;
    const content = container.querySelector('.content');
    const icon = container.querySelector('.icon');
  
    // Переключаем отображение контента
    if (content.style.display === 'none' || !content.style.display) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  
    // Переключаем класс для иконки и анимации
    element.classList.toggle('active');
  }
  function toggleContent(element) {
    const content = element.nextElementSibling; // Получаем следующий элемент (контент)
  
    // Переключаем класс "active" для заголовка
    element.classList.toggle('active');
  
    // Проверяем состояние контента и задаем нужный max-height
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Плавное закрытие, max-height возвращается к 0
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // Плавное раскрытие до полной высоты контента
    }
  }

  function toggleMenu() {
    const navUl = document.querySelector('.nav-ul');
    navUl.classList.toggle('active');
  }