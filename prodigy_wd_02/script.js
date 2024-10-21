let startPauseBtn = document.getElementById("startPauseBtn");
let resetBtn = document.getElementById("resetBtn");
let lapBtn = document.getElementById("lapBtn");
let timeDisplay = document.getElementById("time");
let lapsList = document.getElementById("laps");

let startTime;
let updatedTime;
let difference;
let timerInterval;
let isRunning = false;
let lapCounter = 0;

function formatTime(time) {
  let milliseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);

  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`;
}

startPauseBtn.addEventListener("click", function () {
  if (!isRunning) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 10);
    startPauseBtn.textContent = "Pause";
    lapBtn.disabled = false;
    isRunning = true;
  } else {
    clearInterval(timerInterval);
    startPauseBtn.textContent = "Start";
    isRunning = false;
  }
});

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  timeDisplay.textContent = formatTime(difference);
}

resetBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  isRunning = false;
  difference = 0;
  timeDisplay.textContent = "00:00:00";
  startPauseBtn.textContent = "Start";
  lapsList.innerHTML = "";
  lapBtn.disabled = true;
  lapCounter = 0;
});

lapBtn.addEventListener("click", function () {
  lapCounter++;
  let lapTime = formatTime(difference);
  let lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
  lapsList.appendChild(lapItem);
});
