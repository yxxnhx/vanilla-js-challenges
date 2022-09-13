const title = document.querySelector("h1");

// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// }

// function handleTitleClick() {
//   classClicked = "clicked";
//   if (title.classList.contains(classClicked)) {
//     title.classList.remove(classClicked);
//   } else {
//     title.classList.add(classClicked);
//   }
// }
function handleTitleClick() {
  title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);
