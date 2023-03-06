let progressBarWrapper = document.querySelector('.progress-bar-wrapper');
let startButton = document.querySelector('.start-button');
let notReadyBtn = document.querySelector('.not-ready');
let progress = document.querySelector('.progress');

let counter = 0;
const maxCounter = 100;
const seconds = 1.6;
const interval = (seconds * 1000) / maxCounter;
let loadTime = 500;
let progressTime = loadTime + 3000;
let timeToStart = progressTime + 100;

window.addEventListener('load', () => {
  setTimeout(() => {
    progressBarWrapper.classList.add('in-progress');
    progress.style.width = '100%';
    const loop = setInterval(function () {
      progressBarWrapper.setAttribute('data-percentage', counter);
      if (counter === maxCounter) {
        stopLoop();
      }
      counter++;
    }, interval);

    function stopLoop() {
      clearInterval(loop);
    }
  }, loadTime);
});
setTimeout(() => {
  progressBarWrapper.classList.remove('in-progress');
  startButton.classList.remove('not-ready');
  progressBarWrapper.style.color = '#fff';
  progressBarWrapper.style.width = '250px';
}, progressTime);
setTimeout(() => {
  progressBarWrapper.setAttribute('data-status', 'Start');
}, timeToStart);

startButton.addEventListener('click', () => {
  if (!startButton.classList.contains('not-ready')) {
    startButton.closest('.loader').style.opacity = '0';
    setTimeout(() => {
      startButton.closest('.loader').remove();
    }, 700);
  }
});
