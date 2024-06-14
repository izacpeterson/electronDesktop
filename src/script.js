function updateClock() {
  const clockElement = document.getElementById("time");
  const currentTime = new Date();

  clockElement.textContent = currentTime.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();
