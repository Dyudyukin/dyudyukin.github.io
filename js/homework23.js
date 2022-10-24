'use strict';

// Упражнение 1
function homework23() {

  let value = +prompt('Введите число');

  function runTimer(count) {
    return new Promise((resolve, reject) => {
      if (Number.isFinite(count) && count > 0) {
        resolve(count)
      } else {
        reject()
      }
    })
      .then(function (count) {
        let timerId = setInterval(function () {
          if (count === 0) {
            console.log(`${count} - Время вышло!`);
            clearInterval(timerId);
          } else {
            console.log(`Осталось ${count}`);
            count--
          }
        }, 1000);
      })
      .catch(function () {
        console.log('Ошибка, введите число больше 0');
        homework23();
      })
  }
  runTimer(value);
}

homework23();

// let value = +prompt('Введите число');

// function runTimer(count) {
//   if (Number.isFinite(count) && count > 0) {
//     let timerId = setInterval(function () {
//       if (count === 0) {
//         clearInterval(timerId);
//         console.log(`${count} - Время вышло!`);
//       } else {
//         console.log(`Осталось ${count}`);
//         count--
//       }
//     }, 1000);
//   } else {
//     console.log('Ошибка, введите число больше 0');
//     value = +prompt('Введите число');
//     runTimer(value);
//   }
// };

// runTimer(value);


// Упражнение 2
let backend = fetch('https://reqres.in/api/users')
let start = Date.now();
backend
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(`Получили пользователей: ${response.data.length}`);
    response.data.forEach(function (response) {
      console.log(`— ${response.first_name} ${response.last_name} (${response.email})`)
    })
    let end = Date.now();
    console.log(`Время выполнения скрипта: ${end - start} миллисекунд`);
  })
  .catch(function () {
    console.log("Кажется бэкенд сломался :(");
  });