let play = document.querySelector('.btn');
let timer = document.querySelector('.display');
let seconds = document.querySelector('.num');


let intervalId;

function oneSecondSteap() {
  clearInterval(intervalId);
  let startTime = seconds.value;
  timer.textContent = parseInt(startTime);
  intervalId = setInterval(decreminator, 1000);
}

function decreminator() {
  if (timer.textContent > 0) {
    timer.textContent --;
  }
}

play.addEventListener('click', oneSecondSteap);








