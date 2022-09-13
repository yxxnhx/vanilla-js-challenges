const title = document.querySelector("#title");
const colorList = ["#5cffd1", "#00a3d2", "#e73c4c", "#e78111"];
const superEventHandler = {
  handleTitleOver() {
    title.style.color = colorList[0];
    title.innerHTML = "The mouse is here!";
  },
  handleTitleLeave() {
    title.style.color = colorList[1];
    title.innerHTML = "The mouse is over!";
  },
  handleRightClick() {
    title.style.color = colorList[2];
    title.innerHTML = "That was a right click!";
  },
  handleResize() {
    title.style.color = colorList[3];
    title.innerHTML = "You just resized!";
  },
};

title.addEventListener("mouseover", superEventHandler.handleTitleOver);
title.addEventListener("mouseout", superEventHandler.handleTitleLeave);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
window.addEventListener("resize", superEventHandler.handleResize);
