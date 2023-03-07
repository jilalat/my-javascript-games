let progressBarWrapper = document.querySelector('.progress-bar-wrapper');
let startButton = document.querySelector('.start-button');
let progress = document.querySelector('.progress');

let minCounter = 0;
const MAX_COUNTER = 100;
const SECONDS = 1.6;
const INTERVAL = (SECONDS * 1000) / MAX_COUNTER;
const LOAD_TIME = 700;
const PROGRESS_TIME = LOAD_TIME + 3000;
const TIME_TO_START = PROGRESS_TIME + 100;

window.addEventListener('load', () => {
  setTimeout(() => {
    progressBarWrapper.classList.add('in-progress');
    progress.classList.add('show');
    const progressBarCounter = () => {
      progressBarWrapper.setAttribute('data-percentage', minCounter++);
      minCounter > MAX_COUNTER && stopCounter();
    };
    const counter = setInterval(progressBarCounter, INTERVAL);
    const stopCounter = () => {
      clearInterval(counter);
    };
  }, LOAD_TIME);
});
setTimeout(() => {
  progressBarWrapper.classList.remove('in-progress');
  startButton.classList.remove('not-ready');
  progressBarWrapper.classList.add('white-color');
}, PROGRESS_TIME);
setTimeout(() => {
  progressBarWrapper.setAttribute('data-status', 'Start');
}, TIME_TO_START);

startButton.addEventListener('click', () => {
  if (!startButton.classList.contains('not-ready')) {
    startButton.closest('.loader').classList.add('remove');
    setTimeout(() => {
      startButton.closest('.loader').remove();
    }, LOAD_TIME);
  }
});
