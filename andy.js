// DOM elements
const rotateLeftButton = document.getElementById("rotate-left-button");
const rotateRightButton = document.getElementById("rotate-right-button");
const andyBorder = document.getElementById("andy-border");
const andyForm = document.getElementById("andy-form");

// global variables
let rotation = 0;

// event handlers
function toggleAndy() {
  const andy = document.getElementById("toggle-andy");
  toggleVisibility(andy);
}

function rotateAndy(event) {
  const andy = document.getElementById("small-andy");
  rotate(andy, event);
}

function addAndy(event) {
  event.preventDefault();
  const andicon = andyForm.andies.value;
  const newAndyLi = document.createElement("li");
  const newAndyAvatar = document.createElement("div");
  newAndyAvatar.className = "avatar";
  const newAndyText = document.createElement("span");
  newAndyText.innerText = andicon;
  const andies = document
    .getElementById("andicon")
    .getElementsByTagName("ul")[0];
  const newerAndyLi = andies.appendChild(newAndyLi);
  newerAndyLi.appendChild(newAndyAvatar);
  newerAndyLi.appendChild(newAndyText);
  andyForm.andies.value = "";
}

// helpers
// given a DOM element, change it's visibility style property from hidden to visible
function toggleVisibility(element) {
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
  if (event.target.id === "rotate-left-button") {
    rotation = rotation - 15;
  } else {
    rotation = rotation + 15;
  }
  element.style.transform = "rotate(" + rotation + "deg)";
}

// add event handlers when mouse events are triggered
andyBorder.onmouseenter = toggleAndy;
andyBorder.onmouseleave = toggleAndy;
rotateLeftButton.onclick = rotateAndy;
rotateRightButton.onclick = rotateAndy;
andyForm.onsubmit = addAndy;
