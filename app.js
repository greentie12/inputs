const body = document.querySelector("body");
const textDiv = document.getElementById("text-div");
const textScreen = document.getElementById("text-screen");
const textSubmit = document.querySelector(".text-submit");
const display = document.getElementById("display");

const radioSubmit = document.querySelector(".radio-submit");

const colorBtn = document.getElementById("color-btn");

textSubmit.addEventListener("click", function () {
  display.textContent = textScreen.value;
  textScreen.value = "";
});

radioSubmit.addEventListener("click", function () {
  const radioBtn = document.querySelectorAll("#radio-div input");
  const radioDisplay = document.getElementById("radio-display");
  radioBtn.forEach((btn) => {
    if (btn.checked) {
      radioDisplay.textContent = btn.value;
    }
  });
});

const colors = [
  "#d8d8d8",
  "#f1f1f1",
  "#ebfffe",
  "#ffedea",
  "#ffeafe",
  "#d7d1f3",
];

function colorPicker() {
  let randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

colorBtn.addEventListener("click", function () {
  body.style.background = colorPicker();
});

const form = document.querySelector("form");
const userName = document.getElementById("name");
const genderRadio = document.querySelectorAll(".gender-radio input");
const comments = document.getElementById("comments");
const formResult = document.getElementById("form-result");

function userGender() {
  let genderVal = "";
  genderRadio.forEach((gender) => {
    if (gender.checked) {
      genderVal = gender.value;
    }
  });

  return genderVal;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  formResult.innerHTML = `
    <h4>Name: ${userName.value}<h4>
    <h4>Gender: ${userGender()}<h4>
    <h4>Comments: ${comments.value}<h4>
  `;
  userName.value = "";
  comments.value = "";
});

//drop down

const dropBtn = document.getElementById("drop-btn");
const menuUl = document.getElementById("menu-ul");
const menuLi = document.querySelectorAll("#menu-ul li");
const dropText = document.getElementById("drop-text");

dropBtn.addEventListener("click", function () {
  if (menuUl.classList.contains("hide")) {
    menuUl.classList.remove("hide");
  } else {
    menuUl.classList.add("hide");
  }
});

menuLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    dropText.textContent = e.target.textContent;
  });
});
