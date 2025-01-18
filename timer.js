// HTML элементы
const timeButtons = document.querySelectorAll('.time-buttons button');
const startButton = document.querySelector('.time .start');
const timerCountdown = document.querySelector('.timer-countdown');

// Таймер переменные
let countdown;
let timeLeft = 0;

// Функция для форматирования времени
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Функция для запуска таймера
function startTimer() {
  if (countdown) clearInterval(countdown);

  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert('Time is up!');
      return;
    }
    timeLeft--;
    timerCountdown.textContent = formatTime(timeLeft);
  }, 1000);
}

// Установить время с кнопок
function setTime(e) {
  if (countdown) clearInterval(countdown);

  timeLeft = parseInt(e.target.textContent) * 60;
  timerCountdown.textContent = formatTime(timeLeft);
}

// Слушатели событий
timeButtons.forEach(button => button.addEventListener('click', setTime));
startButton.addEventListener('click', startTimer);
