'use strict';

const wordValue = document.getElementById('option-text');
const input = document.querySelector('.option');
const app = document.querySelector('.app');

const main = document.querySelector('.main');
const form = document.querySelector('form');
const line_1 = main.querySelectorAll('.line-1 > ul > li');
const line_2 = main.querySelectorAll('.line-2 > ul > li');
const line_3 = main.querySelectorAll('.line-3 > ul > li');
const line_4 = main.querySelectorAll('.line-4 > ul > li');
const line_5 = main.querySelectorAll('.line-5 > ul > li');

const wordDay = 'метла';
let word = wordDay.toUpperCase().split('');
let lineNumber = line_1;

function addWord(line) {
  let wordValueArr = wordValue.value.toUpperCase().split('');
  wordValue.value = '';
  line.forEach(function (cell, index) {
    cell.textContent = wordValueArr[index];
    cell.classList.add('error');
    if (word.includes(cell.textContent)) {
      cell.classList.add('warning');
    } 
    if (!word.includes(cell.textContent)) {
      cell.classList.add('error');
    }
    if (wordValueArr[index] === word[index]) {
      cell.classList.remove('warning');
      cell.classList.remove('error');
      cell.classList.add('success');
    }
    if(cell.classList.contains('warning') !== cell.classList.contains('success')){
      cell.classList.remove('warning')
    }
  })

  const winner = [...lineNumber].every(el => el.classList.contains('success'));
  if (winner) {
    app.classList.add('winner')
    input.disabled = true
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (wordValue.value.length !== 5) return false
  if (line_1[0].textContent !== '') {
    lineNumber = line_2
  }
  if (line_2[0].textContent !== '') {
    lineNumber = line_3
  }
  if (line_3[0].textContent !== '') {
    lineNumber = line_4
  }
  if (line_4[0].textContent !== '') {
    lineNumber = line_5
  }
  if (line_5[0].textContent !== '') {
  }
  
  addWord(lineNumber);
})

input.addEventListener('input', function (e) {
  let regExp = /[A-Za-z0-9!@"№;:.,<>()#$%&'*+/=?^_`{|}~-\s]/;
  wordValue.value = wordValue.value.replace(regExp, '')
})