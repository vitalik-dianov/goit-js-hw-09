const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let intervalId = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startBodySetColor() {
  intervalId = setInterval(() => {
    bodyRef.setAttribute('style', `background: ${getRandomHexColor()} `);
  }, 1000);
  startBtn.disabled = true;
}
function stopBodySetColor(){
    clearInterval(intervalId)
    startBtn.disabled = false;
}

startBtn.addEventListener('click', startBodySetColor);
stopBtn.addEventListener('click', stopBodySetColor)
