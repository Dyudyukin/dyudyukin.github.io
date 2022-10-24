'use strict';

// Упражнение 1
let a = '$100';
let b = '300$';
let summ = (Number(a.slice(1)) + Number(b.slice(0, -1)));
console.log(summ); // Должно быть 400

// Вариант 2
let elseSumm = (Number(a.replace(/[^\d]/g, '')) + Number(b.replace(/[^\d]/g, '')));
console.log(elseSumm); // Должно быть 400



// Упражнение 2
let message = ' привет, медвед      ';
message = (message.trim());
message = message[0].toUpperCase() + message.slice(1);
console.log(message); // “Привет, медвед”

// Вариант 2
let elseMessage = ' привет, медвед      ';
elseMessage = elseMessage.replace(/\s+/g, ' ').trim();
elseMessage = elseMessage[0].toUpperCase() + elseMessage.slice(1);
console.log(elseMessage); // “Привет, медвед”



// Упражнение 3
/*
let age = Number(prompt('Сколько Вам лет?'));
if  (age >= 0 && age <= 3) {
  showMessage(age, 'младенец!');
 } else if (age >= 4 && age <= 11) {
  showMessage(age, 'ребёнок!');
 } else if (age >= 12 && age <= 18) {
  showMessage(age, 'подросток!');
 } else if (age >= 19 && age <= 40) {
  showMessage(age, 'познаёте жизнь!');
 } else if (age >= 41 && age <= 80) {
  sshowMessage(age, 'познали жизнь!');
 } else if (age > 81) {
  showMessage(age, 'долгожитель!')
 } else {
  alert(`Вам ${age} лет, и Вы ещё не родились`);
 }
function showMessage(age, result) {
  alert(`Вам ${age} лет и вы ${result}`);
}
*/

// Вариант 2
let age = Number(prompt('Сколько Вам лет?'));
switch (true) {
  case age >= 0 && age <= 3:
    showMessage(age, 'младенец!');
    break;
  case age >= 4 && age <= 11:
    showMessage(age, 'ребёнок!');
    break;
  case age >= 12 && age <= 18:
    showMessage(age, 'подросток!');
    break;
  case age >= 19 && age <= 40:
    showMessage(age, 'познаёте жизнь!');
    break;
  case age >= 41 && age <= 80:
    showMessage(age, 'познали жизнь!');
    break;
  case age > 81:
    showMessage(age, 'долгожитель!')
    break;
  default:
    alert(`Вам ${age} лет, и Вы ещё не родились`);
}

function showMessage(age, result) {
  alert(`Вам ${age} лет и вы ${result}`);
}


// Упражнение 4
let str = 'Я работаю со строками как профессионал!';
let count = str.split(' ');
console.log(count.length); // Должно быть 6
