// Variables to call
let title = document.getElementById("title");

let seconds = 0o0;
let tens = 0o0;
let hours = 0o0;

let appendHour = document.getElementById("hours");
let appendMin = document.getElementById("tens");
let appendSec = document.getElementById("secs");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let restartBtn = document.getElementById("restart");

var Interval;

Date = new Date().getFullYear();

startBtn.onclick = function () {
  clearInterval(Interval);

  Interval = setInterval(startTimer, 10);
};

stopBtn.onclick = function () {
  clearInterval(Interval);
};

restartBtn.onclick = function () {
  clearInterval(Interval);

  hours = "00";
  tens = "00";
  seconds = "00";

  appendHour.innerHTML = hours;
  appendMin.innerHTML = tens;
  appendSec.innerHTML = seconds;
};

function startTimer() {
  seconds++;

  if (seconds <= 9) {
    appendSec.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    appendSec.innerHTML = seconds;
  }
  if (seconds > 99) {
    console.log("tens");
    tens++;
    appendMin.innerHTML = "0" + tens;
    seconds = 0;
    appendSec.innerHTML = "0" + 0;
  }
  if (tens > 9) {
    appendMin.innerHTML = tens;

    if (seconds > 9) {
      appendSec.innerHTML = seconds;

      if (tens > 59) {
        hours++;
        appendHour.innerHTML = "0" + hours;
        tens = 0;
        appendMin.innerHTML = tens;
      }
    }
  }
}

document
  .getElementById("year")
  .insertAdjacentText("beforeend", " " + Date + ". Made with ✨ by Tishaya");
