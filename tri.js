
let btn = document.querySelector("#valider");
let table = document.querySelector("#output");
let inp = document.querySelector("#user-input");
let trier = document.querySelector("#sort");
let outsort = document.querySelector("#sort-inputs");
btn.addEventListener("click", create);
trier.addEventListener("click", tries);

function create(e) {
  e.preventDefault();

  for (let i = 0; i <= inp.value - 1; i++) {
    const newInp = document.createElement("input");
    newInp.setAttribute("class", "tri-input");
    table.append(newInp);
    btn.disabled = true;
    inp.disabled = true;
    trier.style.display = "inline";
  }
}

function tries(e) {
  e.preventDefault();
  let output = document.querySelector("#outsort");
  let lastinp = document.querySelectorAll(".new-inp");


  var arr = [];

  for (let j = 0; j < inp.value; j++) {
    const last = document.createElement("input");
    const newInp = document.querySelectorAll(".new-inp");
    last.setAttribute("class", "last-inp");
    outsort.append(last);
    last.value = newInp[j].value;
    trier.disabled = true;
    trier.style.display = "inline";
  }
  for (let i = 0; i < inp.value; i++) {
    arr.push(lastinp[i].value);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  output.innerHTML = arr;
  console.log(arr);
}