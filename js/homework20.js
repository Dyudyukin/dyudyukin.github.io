'use strict';

// Упражнение 1
for (let i = 0; i < 21; i++) {
  if (i === 0) continue;
  if (i % 2) continue;
  console.log(i);
}


// // Упражнение 2
let sum = 0;
for (let a = 0; a < 3; a++) {
  let value = Number(prompt('Введите число'));
  if (!value) {
    alert('Ошибка, вы ввели не число');
    break;
  }
   sum += value;
}
alert(`Сумма: ${sum}`);


// Упражнение 3
let monthNumber = Number(prompt('Введите номер месяца'));
const months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

function getNameOfMonth(name) {
  if (+name > 12 || !name || +name < 0) {
    alert('Нет такого месяца');
    monthNumber = Number(prompt('Введите номер месяца'));
    getNameOfMonth(monthNumber);
  } else {
  alert(months[+name - 1]);
  }
}

getNameOfMonth(monthNumber); // Январь

//3.1
for (let m = 0; m < 12; m++) {
  if (m === 9) continue; // Октябрь не выводим
  console.log(months[m]);
}


// Упражнение 4
/*Что такое IIFE?
Это функция, которую можно не вызывать, она выполняется сразу же после того, как она была определена.
И переменные IIFE замыкаются в пределах (), из-за чего глобальная область видимости ими не засоряется.

let result = (function () {
    let a = 1000;
    let b = 337;
    let sum = a + b;
    return sum;
})();

result; // "1337"

*/