const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  const time = `${hour}:${min}:${sec}`;

  clock.innerText = time;
}
getClock;

getClock();
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);
