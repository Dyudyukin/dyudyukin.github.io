'use strict';

// Упражнение 1
let a ='100px';
let b ='323px';
let result = (parseInt(a) + parseInt(b));
console.log(result);

// Упражнение 2
let list = [10, -45, 102, 36, 12, 0, -1];
console.log(Math.max(...list));

// Упражнение 3
let c = 123.3399; // Округлить до 123
console.log(Math.round(c));

let d = 0.111; // Округлить до 1
console.log(Math.ceil(d));

let e = 45.333333; // Округлить до 45.3
console.log(Number(e.toFixed(1)));

let f = 3; // Возвести в степень 5 (должно быть 243)
console.log(f ** 5);

let g = 400000000000000; // Записать в сокращенном виде
console.log(4e14);

let h = '1'!= 1; // Поправить условие, чтобы результат был true (значения изменять нельзя, только оператор)
console.log(h = '1' !== 1);

// Упражнени 4
console.log( 0.1 + 0.2 == 0.3 ); // false
// Из-за ошибки в точности вычислений для чисел с плавающей точкой