import { check } from './check.js';

document.addEventListener('DOMContentLoaded', () => { 
  const formElem = document.getElementById('form');
  const inputElem = document.getElementById('input');
  const resultElem = document.getElementById('result');
  const validationElem = document.getElementById('validation');
  const OK_VALIDATION_MESSAGE = 'Congratulations ! Your brackats are perfect'
  const BAD_VALIDATION_MESSAGE = 'Sorry, your brackats are incorrect (letter, string length, casing, etc). Please try again'

  function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
  }

  formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const sanitizedInput = sanitizeString(inputElem.value);

    const result = check(inputElem.value);
    validationElem.innerHTML = result ? OK_VALIDATION_MESSAGE : BAD_VALIDATION_MESSAGE

    resultElem.classList.remove(`${result ? 'in' : ''}correct`);
    resultElem.classList.add(`${!result ? 'in' : ''}correct`);
  });

  formElem.addEventListener('input', () => {
    resultElem.classList.remove('correct', 'incorrect');
  });
}, false);
