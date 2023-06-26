const btnNumber = document.querySelectorAll('.btn__number');
const btnArithmetic = document.querySelectorAll('.btn__arithmetic');
const btnFunction = document.querySelectorAll('.btn__function');
const display = document.querySelector('.display__answer');

let answer = 0;
let arithmetic = 0;
let equal = 0;

const numberHandler = (target) => {
  if (answer === 0 || equal === 0) {
    answer = target;
    display.innerHTML = answer;
    equal = 1;
  } else {
    answer += target;
    display.innerHTML = answer;
  }
  arithmetic = 1;
};

// NUMBER BUTTONS
for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener('click', () => {
    numberHandler(btnNumber[i].role);
  });
}

// ARITHMETIC BUTTONS
const arithmeticHandler = (target) => {
  if (arithmetic === 1) {
    if (target === '=') {
      answer = eval(answer);
      display.innerHTML = answer;
      arithmetic = 1;
      equal = 0;
    } else {
      answer += target;
      display.innerHTML = answer;
      arithmetic = 0;
      equal = 1;
    }
  }
};

for (let i = 0; i < btnArithmetic.length; i++) {
  btnArithmetic[i].addEventListener('click', () => {
    arithmeticHandler(btnArithmetic[i].role);
  });
}

// FUNCTION BUTTONS
const functionHandler = (target) => {
  switch (target) {
    case 'c':
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

for (let i = 0; i < btnFunction.length; i++) {
  btnFunction[i].addEventListener('click', () => {
    functionHandler(btnFunction[i].role);
  });
}

// KEYBOARD
window.addEventListener('keydown', (event) => {
  if ((event.key >= 0 && event.key <= 9) || event.key === '.') {
    numberHandler(event.key);
  } else if (
    event.key === '+' ||
    event.key === '-' ||
    event.key === '*' ||
    event.key === '/' ||
    event.key === '='
  ) {
    arithmeticHandler(event.key);
  } else if (
    event.key === 'Backspace' ||
    event.key === '%' ||
    event.key === 'c'
  ) {
    functionHandler(event.key);
  }
});
