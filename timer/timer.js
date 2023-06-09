var x;

function getCurrentTime() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentTime = new Date();

  // Get's current time
  let currentYear = currentTime.getFullYear();  
  let currentMonth = months[currentTime.getMonth()];
  let currentDay = currentTime.getDate();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecound = currentTime.getSeconds();

  // Updates inputs and select to the current values
  document.getElementById("yearDate").value = currentYear;
  document.getElementById("selectMonth").value = currentMonth;
  document.getElementById("dayDate").value = currentDay;
  document.getElementById("hourDate").value = currentHour;
  document.getElementById("minuteDate").value = currentMinute;
  document.getElementById("secondDate").value = currentSecound;
}

function setTimer()
{
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
  
  // Clear interval
  clearInterval(x);

  // Start interval
  x = setInterval(function ()
  {
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
    if (distance < 0)
    {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
