const btnNumber = document.querySelectorAll('.btn__number');
const btnArithmetic = document.querySelectorAll('.btn__arithmetic');
const btnFunction = document.querySelectorAll('.btn__function');
const display = document.querySelector('.display__answer');
let answer = 0;
let arithmetic = 1;
let equal = 1;

// NUMBER BUTTONS
for (let i = 0; i < 11; i++) {
  btnNumber[i].addEventListener('click', () => {
    if (answer === 0 || equal === 0) {
      answer = btnNumber[i].innerHTML;
      display.innerHTML = answer;
      equal = 1;
    } else {
      answer += btnNumber[i].innerHTML;
      display.innerHTML = answer;
      // answer = eval(answer);
      arithmetic = 0;
    }
  });
}

// ARITHMETIC BUTTONS
for (let i = 0; i < 5; i++) {
  btnArithmetic[i].addEventListener('click', () => {
    if (arithmetic === 0) {
      if (btnArithmetic[i].role === '=') {
        answer = eval(answer);
        display.innerHTML = answer;
        arithmetic = 0;
        equal = 0;
      } else {
        answer += btnArithmetic[i].role;
        arithmetic = 1;
        equal = 1;
      }
    }
  });
}

// FUNCTION BUTTONS
for (let i = 0; i < 3; i++) {
  btnFunction[i].addEventListener('click', () => {
    switch (btnFunction[i].role) {
      case 'clear':
        answer = 0;
        display.innerHTML = answer;
        break;
      case 'delete':
        answer = Number(String(answer).slice(0, -1));
        display.innerHTML = answer;
        break;
      case 'percent':
        answer /= 100;
        display.innerHTML = answer;
        break;
    }
  });
}
