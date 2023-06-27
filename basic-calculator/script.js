const btnNumber = document.querySelectorAll('.btn__number');
const btnOperation = document.querySelectorAll('.btn__operation');
const btnFunction = document.querySelectorAll('.btn__function');
const display = document.querySelector('.display__answer');

let answer = 0;
let operation = 0;
let equal = 0;

const clickHandler = (element, handler) => {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
      handler(element[i].role);
    });
  }
};

// NUMBER BUTTONS
const numberHandler = (target) => {
  if (answer === 0 || equal === 0) {
    answer = target;
    display.innerHTML = answer;
    equal = 1;
  } else {
    answer += target;
    display.innerHTML = answer;
  }
  operation = 1;
};

clickHandler(btnNumber, numberHandler);

// OPERATION BUTTONS
const operationHandler = (target) => {
  if (operation === 1) {
    if (target === '=' || target === 'Enter') {
      answer = eval(answer);
      display.innerHTML = answer;
      operation = 1;
      equal = 0;
    } else {
      answer += target;
      display.innerHTML = answer;
      operation = 0;
      equal = 1;
    }
  }
};

clickHandler(btnOperation, operationHandler);

// FUNCTION BUTTONS
const functionHandler = (target) => {
  switch (target) {
    case 'Escape':
      answer = 0;
      display.innerHTML = answer;
      break;
    case 'Backspace':
      answer = String(answer).slice(0, -1);
      display.innerHTML = answer;
      break;
    case '%':
      answer /= 100;
      display.innerHTML = answer;
      break;
  }
};

clickHandler(btnFunction, functionHandler);

// KEYBOARD
window.addEventListener('keydown', (event) => {
  if ((event.key >= 0 && event.key <= 9) || event.key === '.') {
    numberHandler(event.key);
  } else if (
    event.key === '+' ||
    event.key === '-' ||
    event.key === '*' ||
    event.key === '/' ||
    event.key === 'Enter'
  ) {
    operationHandler(event.key);
  } else if (
    event.key === 'Backspace' ||
    event.key === '%' ||
    event.key === 'Escape'
  ) {
    functionHandler(event.key);
  }
});
