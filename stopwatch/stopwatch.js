window.onload = function () {
  // Default values...
  var minutes = 00;
  var seconds = 00;
  var tens = 00;

  // Gets values from spans
  var appendMinutes = document.getElementById("minutes");
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");

  // Gets values from buttons
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");

  // Inicializes interval
  var Interval;

  // If start button is clicked then stop time, and start the function called 'startTimer'
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  // If stop button is clicked, stop time.
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // If reset button is clicked, stop time, reset to the default values.
  buttonReset.onclick = function () {
    clearInterval(Interval);
    minutes = "00";
    tens = "00";
    seconds = "00";

    appendMinutes.innerHTML = minutes;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    // Everytime tens increases..
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    // If there is more than 99 tens, increase second by 1
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    // If there is more than 60 seconds, increase minute by 1
    if (seconds >= 60) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  }
};
