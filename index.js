let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  if (!timerId) {
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
    //console.log("Старт");
  }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  clearInterval(timerId); // останавливаем таймер
  timerId = null;
  //console.log("Стоп");
});

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
