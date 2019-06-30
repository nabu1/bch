import { check } from './check.js';

document.addEventListener('DOMContentLoaded', () => { 
  const formElem = document.getElementById('form');
  const inputElem = document.getElementById('input');
  const resultElem = document.getElementById('result');

  formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = check(inputElem.value);

    resultElem.classList.remove(`${result ? 'in' : ''}correct`);
    resultElem.classList.add(`${!result ? 'in' : ''}correct`);
  });

  formElem.addEventListener('input', () => {
    resultElem.classList.remove('correct', 'incorrect');
  });

}, false);
