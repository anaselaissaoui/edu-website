let btn = document.querySelector("#valider");
let inp = document.querySelector("#user-input");
let table = document.querySelector("#rech-inputs");
let trouver = document.querySelector("#trouver");
let outsort = document.querySelector("#sort-inputs");
let output = document.querySelector("#output");
btn.addEventListener("click", create);
trouver.addEventListener("click", trouve);

function create(e) {
  e.preventDefault();

  for (let i = 0; i <= inp.value-1; i++) {
    const newInp = document.createElement("input");
    newInp.setAttribute("class", "rech-input");
    table.append(newInp);
    btn.disabled = true;
    inp.disabled = true;
    trouver.style.display = "inline";
  }
}

function trouve(e){
    e.preventDefault();
    let array = [];
    const reinp= document.querySelectorAll(".rech-input");
    for (let i = 0; i <= inp.value-1; i++) {
        array.push(reinp[i].value);
        console.log(array);
    }
    if(array.includes(mot.value)){
        alert("done");
        output.style.color = "green";
        output.innerHTML= "your word is included in the text";
    }else{
        output.style.color = "red";
        output.innerHTML= "your word is not included in the text";
    }
}
