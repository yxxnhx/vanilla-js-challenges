const body = document.body;
const computer = "computer";
const tablet = "tablet";
const mobile = "mobile";

function handleChangeBody() {
  const width = window.innerWidth;
  if (width > 1024) {
    body.classList.add(computer);
    body.classList.remove(tablet, mobile);
  } else if (width <= 1023 && width >= 768) {
    body.classList.add(tablet);
    body.classList.remove(computer, mobile);
  } else {
    body.classList.add(mobile);
    body.classList.remove(tablet);
  }
}

window.addEventListener("resize", handleChangeBody);
