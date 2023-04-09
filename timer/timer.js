function setTimer() {
  // Get time's values from the user
  var yearU = document.getElementById("yearDate").value;
  var monthU = document.getElementById("selectMonth").value;
  var dayU = document.getElementById("dayDate").value;
  var hourU = document.getElementById("hourDate").value;
  var minuteU = document.getElementById("minuteDate").value;
  var secondU = document.getElementById("secondDate").value;

  // Convert those valeus into date
  var countDownDate = new Date(
    `${monthU} ${dayU}, ${yearU} ${hourU}:${minuteU}:${secondU}`
  ).getTime();

  // Start interval
  var x = setInterval(function () {
    // Gets date from now
    var now = new Date().getTime();

    // Calculates distance between user's date and now
    var distance = countDownDate - now;

    // Some crazy math floor..
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Final result gets on the website
    document.getElementById("timerText").innerHTML =
      days +
      "<span id='timerTextDays'>d</span> " +
      hours +
      "<span id='timerTextHours'>h</span> " +
      minutes +
      "<span id='timerTextMinutes'>m</span> " +
      seconds +
      "<span id='timerTextSeconds'>s</span> ";
    document.getElementById("timerTextDays").style.color = "grey";
    document.getElementById("timerTextHours").style.color = "grey";
    document.getElementById("timerTextMinutes").style.color = "grey";
    document.getElementById("timerTextSeconds").style.color = "grey";

    // If user enters a date that is already finished then..
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
