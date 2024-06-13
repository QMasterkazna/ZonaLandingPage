const backToTopButton = document.getElementById('back-to-top');
const rangeInput = document.getElementById('range_id');
const spanElement = document.getElementById('price-range');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // если пользователь прокрутил страницу более чем на 200px
    backToTopButton.style.display = 'block'; // показываем кнопку
  } else {
    backToTopButton.style.display = 'none'; // скрываем кнопку
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo(0, 0); // возвращаемся в верхнюю часть страницы
});



rangeInput.addEventListener('input', () => {
  const value = rangeInput.value; // получение значения range
  const formattedValue = formatNumber(value); // форматирование полученного числа
  spanElement.textContent = formattedValue; // Замена на полученное число
});

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // функция для форматирования числа
}