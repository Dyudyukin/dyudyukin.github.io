let isGameActive = false;
let score = 0;
let rounds = 3;

let timer; 
// let countdown = 5; // 5 секунд

const startButton = document.getElementById('start-button');
const cells = document.querySelectorAll('.cell');
const scoreElement = document.getElementById('score');
const roundsElement = document.getElementById('rounds');
const messageElement = document.getElementById('message');

// Запускать игру
const startGame = () => {
  // startCountdown();
  isGameActive = true;
  startButton.disabled = true;
  cells.forEach(cell => cell.classList.add('active')); // Клетки становятся активными
  showMole();
  messageElement.textContent = '';
  startTimer(); // Запустить таймер
}

// Запуск таймера
const startTimer = () => {
    timer = setTimeout(() => {
    endGame(false); // Завершить игру по истечении времени
  }, 5000);
}

 // Обратный отсчёт
// const startCountdown = () => {
//   const countdownTimeout = setTimeout(() => {
//     messageElement.textContent = `Осталось ${countdown} секунд на ход`;
//     countdown--;

//     if (countdown < 0) {
//       clearTimeout(countdownTimeout); // Остановить обратный отсчет
//       messageElement.textContent = ''; // Очистить сообщение
//       endGame(false); // Завершить игру
//     }
//   }, 1000);
// }

// Показать крота
const showMole = () => {
  let randomIndex;
  let previousIndex;
  do {
    randomIndex = getRandomNumber(0, 9);
  } while (randomIndex === previousIndex);
  
  cells[randomIndex].textContent = '🐹';
  previousIndex = randomIndex; // Сохраняем предыдущий индекс
}


// Скрыть крота
const hideMole = () => {
  cells.forEach((cell) => {
    cell.textContent = '';
  })
}

// Генерировать случайное положение крота
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// Нажатие на ячейку
const handleCellClick = (cell) => {
  clearTimeout(timer); // Остановить таймер при клике на ячейку.
  startTimer(); // Перезапустить таймер при каждом клике
  if(cell.textContent === '🐹') {
    score += 1;
    rounds -= 1;
    // countdown = 5;
    updateLabels();
    if(score > 2) {
      endGame(true);
    } else {
      hideMole();
      showMole();
    }
    
  } else {
        endGame(false);
  }
}

// Сброс игры
const resetGame = () => {
  score = 0;
  rounds = 3;
  clearTimeout(timer); // Очистить таймер
  updateLabels();
  hideMole();
  isGameActive = false;
}

// Обновление счёта и количества раундов
const updateLabels = () => {
  scoreElement.textContent = `Счёт: ${score}`;
  roundsElement.textContent = `Осталось раундов: ${rounds}`;
}

// Завершение игры
const endGame = (win) => {
  clearTimeout(timer); // Ооставонить таймер
  cells.forEach(cell => cell.classList.remove('active')); // Клетки становятся неактивными
  isGameActive = false;
  startButton.disabled = false;
  if(win) {
    alert('Вы выиграли! 🎉');
    messageElement.textContent = 'Вы выиграли! Чтобы начать игру, нажмите Старт!';
  } else {
    alert('Вы проиграли! 😢');
    messageElement.textContent = 'Вы проиграли! Чтобы начать игру, нажмите Старт!';
  }
  resetGame();
}

startButton.addEventListener('click', () => {
  startGame();
})

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if(isGameActive) {
        handleCellClick(cell);
      }
    })
})
