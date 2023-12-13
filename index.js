let word = document.getElementById("wordcolor");
let button = document.getElementById("button");
let body = document.getElementById("body");
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getColor() {
  let changevalues = Math.floor(Math.random() * values.length);
  return (random = values[changevalues]);
}
button.addEventListener("click", function () {
  let val = "#";
  for (let i = 1; i <= 6; i++) {
    val += getColor();
    console.log(val);
  }
  word.innerHTML = val;
  body.style.backgroundColor = val;
});
