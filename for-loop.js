let num = document.querySelector("#user-num");
const tapBtn = document.querySelector("#tap");
let output = document.querySelector("#output");
tapBtn.addEventListener("click", multiple);
function multiple(e) {
  output.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    output.innerHTML += `${num.value} * ${i} = ${num.value * i} <br>`;
    console.log(i + "x " + num.value + "=" + i * num.value);
  }
  e.preventDefault();
}