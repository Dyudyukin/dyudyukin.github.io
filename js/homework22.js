'use strict';

// Упражнение 1
let array = [true, 'a', 1, {}, -17, true, ['abc', 100], 2, null, 4, -11, 82, -5, false, -14];

function getSumm(arr) {
  let sum = 0;
  arr.map(function (n) {
    if (Number.isFinite(n) && n === parseInt(n, 10)) {
      sum += n;
    }
  }); return sum
}

console.log(getSumm(array)); // ответ на главный вопрос жизни, вселенной и всего такого



// Упражнение 3
let cart = [4884, 3456,];

function addToCart(id) {
  if (!cart.includes(id)) {
    cart.push(id);
  }
};

function removeFromCart(id) {
  let i = cart.indexOf(id);
  if (i !== -1) {
    cart.splice(i, 1);
  }
};

console.log(cart); // [4884, 3456]

addToCart(777); // Добавим в массив 777
addToCart(123); // Добавим в массив 123
addToCart(3456); // НЕ добавим в массив 3456, т.к такой эллемент уже существует
removeFromCart(3456); // Удалим из массива 3456

console.log(cart); // [4884, 777, 123]