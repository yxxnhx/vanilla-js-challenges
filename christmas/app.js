const christmasClock = document.querySelector(".christmasClock");

function getChristmasClock() {
  const xMasDay = new Date("2022-12-25");
  const nowDate = new Date();
  const sumDate = xMasDay - nowDate;

  const sumDateDay = String(
    Math.floor(sumDate / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const sumDateHours = String(
    Math.floor((sumDate / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const sumDateMinutes = String(
    Math.floor((sumDate / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const sumDateSeconds = String(Math.floor(sumDate / (1000 * 60))).padStart(
    2,
    "0"
  );

  const dDay = `${sumDateDay}d ${sumDateHours}h ${sumDateMinutes}m ${sumDateSeconds}s`;
  christmasClock.innerText = dDay;
}

getChristmasClock();
setInterval(getChristmasClock, 1000);
