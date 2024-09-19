//Task add
const inputBox = document.getElementById("task-input");
const list = document.getElementById("lists");

function addTask() {
  if (inputBox.value === "") {
    alert("Please add a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  localData();
}
//delete and complete
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      localData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      localData();
    }
  },
  false
);
//save to browser
function localData() {
  localStorage.setItem("tasks", list.innerHTML);
}
//default browser saved data to show
function defaultData() {
  list.innerHTML = localStorage.getItem("tasks");
}
defaultData();

//Time and year update
function displayDate() {
  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${dayName}, ${day} ${month} ${year}`;

  document.querySelector("p").textContent = `It's ${formattedDate} 📅`;
}
//greeting user
function updateGreeting() {
  const date = new Date();
  const hour = date.getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else if (hour >= 21 || hour < 5) {
    greeting = "Good Night";
  }

  document.querySelector("h2").textContent = greeting;
}

displayDate();
updateGreeting();



//surprise 
let attempts = 0;

const surpriseButton = document.getElementById('surprise-btn');

function moveButton() {
  const maxWidth = window.innerWidth - surpriseButton.offsetWidth;
  const maxHeight = window.innerHeight - surpriseButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  surpriseButton.style.left = `${randomX}px`;
  surpriseButton.style.top = `${randomY}px`;

  attempts++;

  if (attempts === 5) {
    alert("Don't play around, add your task now!!");
    attempts = 0;
  }
}
surpriseButton.addEventListener('mouseover', moveButton);
surpriseButton.addEventListener('click', moveButton);