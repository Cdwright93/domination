function strikeFirst() {
  let first = document.querySelector("#arguments > li:first-child");
  first.style.textDecoration = "line-through";
}
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

function addArgument(item) {
  let ul = document.querySelector("#arguments");
  ul.appendChild(item);
}

let newLi = document.createElement("img");
newLi.src =
  "https://texanbybirthmccoybyblood.files.wordpress.com/2012/11/cobrakai1.jpg&w=100&h=75";
newLi.id = "cobraKai";
newLi.style.borderRadius = "50%";
newLi.style.boxShadow = "0 0 10px black";

let newLi2 = document.createElement("img");
newLi2.src =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/karate-kid-miyagi-do-karate-kid-miyagi-do.jpg";
newLi2.id = "miyagiDo";
newLi2.style.borderRadius = "50%";
newLi2.style.boxShadow = "0 0 10px black";

function imageShrinker(id) {
  let image = document.querySelector(id);
  image.style.width = "60px";
  image.style.height = "60px";
  image.style.margin = "10px";
}

function makeInvisible(id) {
  let element = document.querySelector(id);
  element.classList.add("invisible");
}

function makeLi(str) {
  let li = document.createElement("li");
  li.innerHTML = str;
  return li;
}

function makeHeader(str, str2) {
  let header = document.createElement(`h${str}`);
  header.innerHTML = str2;
  return header;
}

addImage("https://www.w3schools.com/howto/img_forest.jpg", "#image-1");
addImage("https://www.w3schools.com/howto/img_snow.jpg", "#image-2");
addImage("https://www.w3schools.com/howto/img_mountains.jpg", "#image-3");
removeFirst();
removeFirst();
strikeFirst();
changeFont("40px", "#arguments > li:first-child");
changeFont(
  `${Math.floor(Math.random() * 100)}px`,
  "#arguments > li:nth-child(2)"
);
addArgument(newLi);
addArgument(newLi2);
imageShrinker("#miyagiDo");
imageShrinker("#cobraKai");
makeInvisible("#image-1");
addArgument(makeLi("I am a new li"));
addArgument(
  makeHeader(`${Math.floor(Math.random() * 5)}`, "I am a new header")
);
