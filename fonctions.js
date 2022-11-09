var pnumber = document.getElementById("fnum");
var dnumber = document.getElementById("snum");
var addition = document.getElementById("addition");
var substractions = document.getElementById("substraction");
var multiplication = document.getElementById("multiplication");
var division = document.getElementById("division");
var output = document.getElementById("output");
var button = document.getElementsByTagName("button");



addition.addEventListener("click", add);
function add(e){
    e.preventDefault();
    let num3 = parseInt(pnumber.value);
    let num4 = parseInt(dnumber.value);
    output.innerHTML = num3 + num4;
}

substractions.addEventListener("click", sub);
function sub(e){
    e.preventDefault();
    output.innerHTML = pnumber.value - dnumber.value;
}

multiplication.addEventListener("click", mul);
function mul(e){
    e.preventDefault();
    output.innerHTML = pnumber.value * dnumber.value;
}

division.addEventListener("click", div);
function div(e){
    e.preventDefault();
    output.innerHTML = pnumber.value / dnumber.value;
}
output.innerHTML="";
