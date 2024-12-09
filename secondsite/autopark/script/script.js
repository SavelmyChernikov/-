const capacityButtons = document.getElementById('capacity-buttons');
const typeButtons = document.getElementById('type-buttons');
const cards = document.querySelectorAll('.card');

let selectedCapacity = null; // Выбранная грузоподъёмность
let selectedType = null; // Выбранный тип машины

// Функция для фильтрации карточек
function filterCards() {
  // Получаем все видимые карточки в новый массив для сортировки
  const visibleCards = [];
  const hiddenCards = [];

  cards.forEach(card => {
    const cardCapacity = card.getAttribute('data-capacity');
    const cardType = card.getAttribute('data-type');

    const matchesCapacity = !selectedCapacity || selectedCapacity === cardCapacity;
    const matchesType = !selectedType || selectedType === cardType;

    if (matchesCapacity && matchesType) {
      card.classList.remove('hidden'); // Оставляем карточку видимой
      visibleCards.push(card);
    } else {
      card.classList.add('hidden'); // Скрываем карточку
      hiddenCards.push(card);
    }
  });

  // Переставляем видимые карточки наверх
  visibleCards.concat(hiddenCards).forEach((card, index) => {
    card.style.order = index; // Устанавливаем порядок для перемещения
  });
}

// Сброс активных кнопок
function resetActiveButtons(buttons) {
  Array.from(buttons.children).forEach(button => button.classList.remove('active'));
}

// Обработчик для кнопок грузоподъёмности
capacityButtons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (selectedCapacity === e.target.getAttribute('data-capacity')) {
      selectedCapacity = null; // Сбросить выбор
    } else {
      selectedCapacity = e.target.getAttribute('data-capacity');
    }

    resetActiveButtons(capacityButtons);
    if (selectedCapacity) e.target.classList.add('active');
    filterCards();
  }
});

// Обработчик для кнопок типа машины
typeButtons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (selectedType === e.target.getAttribute('data-type')) {
      selectedType = null; // Сбросить выбор
    } else {
      selectedType = e.target.getAttribute('data-type');
    }

    resetActiveButtons(typeButtons);
    if (selectedType) e.target.classList.add('active');
    filterCards();
  }
});

function toggleMenu() {
  const navUl = document.querySelector('.nav-ul');
  navUl.classList.toggle('active');
}
