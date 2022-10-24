'use strict';

// Упражнение 1
let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

/**
 * 
 * @param {object} obj объект с исходными данными.
 * @returns {boolean} false - если у объекта есть свойства.
 * @returns {boolean} true - если у объекта нет свойств.
 */
function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false; // Есть свойства
  } else {
    return true; // Нет свойств
  }
};

isEmpty(user);



// Упражнение 3
let salaries = {
  John: 100000, 
  Ann: 160000, 
  Pete: 130000,
};
let sumSalaries = 0;

/**
 * 
 * @param {object} object объект с исходными данными.
 * @param {number} percent процент, на который нужно увеличить сумму.
 * @returns {object} newSalaries - новый объект с пересчитанными под процент суммами.
 * @returns {number} sumSalaries - общая сумма всех свойств объекта.
 */
function raiseSalary(object, percent) {
  let newSalaries = {};
  for (let prop in object) {
    let sumPercent = Math.floor(Number(object[prop] / 100 * percent + object[prop]));
    newSalaries[prop] = sumPercent;
    sumSalaries += sumPercent;
  }
  return  newSalaries;
}

raiseSalary(salaries, 5);
console.log(sumSalaries);