const maxNumber = document.querySelector("#maxNumber");
const pickNumber = document.querySelector("#pickNumber");
const playBtn = document.querySelector("button");
let paintChoose = document.querySelector(".paintChoose");
let paintResult = document.querySelector(".paintResult");

function makeRandNum(e) {
  e.preventDefault();
  const userNum = pickNumber.value;
  const maxValue = maxNumber.value;
  const randomNum = Math.ceil(Math.random() * maxValue);
  console.log(randomNum);
  console.log(userNum);

  numberGame(userNum, randomNum);
}

function numberGame(userNum, randomNum) {
  paintChoose.innerText = `You chose ${userNum}, the machine chose ${randomNum}`;
  if (userNum < randomNum || userNum > randomNum) {
    paintResult.innerText = " You Lost!";
  } else {
    paintResult.innerText = "You Win!";
  }
}

playBtn.addEventListener("click", makeRandNum);
