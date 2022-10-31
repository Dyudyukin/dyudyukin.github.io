'use strict';

const form = document.querySelector('form');
const inputName = document.querySelector('.feedback__name');
const inputNameError = document.querySelector('.feedback__error-name');
const inputRating = document.querySelector('.feedback__rating');
const inputRatingError = document.querySelector('.feedback__error-rating');
const inputs = form.querySelectorAll('input, textarea');

let swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  loopedSlides: 3,
  breakpoints: {
    320: {
      spaceBetween: 5
    }
  }
});

let removeError = () => {
  inputName.classList.remove('error');
  inputNameError.classList.remove('error')
}

inputs.forEach(function (input) {
  input.value = localStorage.getItem(input.name)
  input.addEventListener('input', function () {
    localStorage.setItem(input.name, input.value)
  })
})

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  validateName();
  validateRating();
  if (inputNameError.classList.contains('error')) {
    inputRatingError.classList.remove('error');
  }
  if (validateName() && validateRating()) {
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    localStorage.clear();
  }
})

function validateName() {
  inputName.value = inputName.value.replace(/\s+/g, ' ').trim()
  inputName.classList.add('error');
  inputNameError.classList.add('error')
  if (inputName.value.length === 0) {
    inputNameError.textContent = 'Вы забыли указать имя и фамилию';
  } else if (inputName.value.length < 2) {
    inputNameError.textContent = 'Имя не может быть короче 2-хсимволов';
  } else {
    removeError();
    return true;
  }
  inputName.addEventListener("input", removeError);
}

function validateRating() {
  if (inputRating.value >= 1 && inputRating.value <= 5) {
    inputRating.classList.remove('error');
    inputRatingError.classList.remove('error');
    return true;
  } else {
    inputRating.classList.add('error');
    inputRatingError.classList.add('error');
    inputRatingError.textContent = 'Оценка должна быть от 1 до 5';
  }
  inputRating.addEventListener("input", function () {
    inputRating.classList.remove('error');
    inputRatingError.classList.remove('error')
  });
}