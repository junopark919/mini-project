let progressBar = document.querySelectorAll('.progress__bar');
let progressValue = [];
for (let i = 0; i < progressBar.length; i++) {
  progressValue.push(progressBar[i].querySelector('.progress__value'));
}
let progressStartValue = [];
for (let i = 0; i < progressBar.length; i++) {
  progressStartValue.push(0);
}
let progressEndValue = [];
for (let i = 0; i < progressBar.length; i++) {
  progressEndValue.push(Number(progressValue[i].innerHTML.slice(0, -1)));
}
let speed = 10;

for (let i = 0; i < progressBar.length; i++) {
  let progress = setInterval(() => {
    progressStartValue[i]++;
    progressValue[i].textContent = `${progressStartValue[i]}%`;
    progressBar[i].style.background = `conic-gradient(#5b86e5 ${
      progressStartValue[i] * 3.6
    }deg, #eee 0deg)`;

    if (progressStartValue[i] === progressEndValue[i]) {
      clearInterval(progress);
    }
  }, speed);
}

console.log(progressStartValue);
