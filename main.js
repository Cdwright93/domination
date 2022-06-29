function strikeFirst() {
  let first = document.querySelector("#arguments > li:first-child");
  first.style.textDecoration = "line-through";
}
strikeFirst();
//strike hard, cobra kai never dies.

function addImage(str, id) {
  let image = document.querySelector(id);
  image.src = str;
}
function removeFirst() {
  let first = document.querySelector("#arguments > li:first-child");
  first.remove();
}

function changeFont(str, id) {
  let font = document.querySelector(id);
  font.style.fontSize = str;
}

addImage("https://www.w3schools.com/howto/img_forest.jpg", "#image-1");
addImage("https://www.w3schools.com/howto/img_snow.jpg", "#image-2");
addImage("https://www.w3schools.com/howto/img_mountains.jpg", "#image-3");
removeFirst();
removeFirst();
changeFont("40px", "#arguments > li:first-child");
changeFont(
  `${Math.floor(Math.random() * 100)}px`,
  "#arguments > li:nth-child(2)"
);
