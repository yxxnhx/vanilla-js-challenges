const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(userName);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
  // greeting.innerText = `Hello ${userName}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("click");
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUserName);
  // greeting.innerText = `Hello ${savedUserName}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkClick);
