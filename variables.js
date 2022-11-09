const fnum = document.querySelector("#first-num");
const snum = document.querySelector("#sec-num");
const switchBtn = document.querySelector("#switch");

switchBtn.addEventListener("click", switchFun);
function switchFun(e) {
  e.preventDefault();
  let val = fnum.value;

  fnum.value = snum.value;
  snum.value = val;
}
