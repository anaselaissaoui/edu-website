let userInpt = document.querySelector("#user-num");
let btn = document.querySelector("#tap");
const output = document.querySelector("#output");
let btn2 = document.getElementById("rejouer");

btn.addEventListener("click", design);

function design(e) {
  e.preventDefault();
  output.innerHTML = "";
  btn2.style.display ="inline";
  if (userInpt.value < 10) {
    for (let i = 1; i <= userInpt.value; i++) {
      for (let j = 1; j <= i; j++) {
        output.innerHTML += "*";
        output.style.color = "black";
      }
      output.innerHTML += "<br>";
    }
  } else {
    output.innerHTML += "its so long";
    output.style.color = "red";
  }
}