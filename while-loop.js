const btn = document.querySelector("#tap");
let num = document.querySelector("#user-num");
let output = document.querySelector("#output");
let btn2 = document.getElementById("rejouer");
let randomNr = Math.floor(Math.random() * 51);
let counter = document.querySelector("#counter");
let count=0

btn.addEventListener("click", Tentatives);
function Tentatives(e) {
  e.preventDefault();
  
  
  if(count == 10){
    counter.innerHTML = "0";
    btn.style.display="none";
    btn2.style.display="inline";
    counter.style.color="red";
    output.style.color="red";
    output.innerHTML="Vous avez depasseé le nombre des tentatives possible, ressayer."

  }
  
  else if(num.value==randomNr){
    output.innerHTML = "Vous Avez Trouver le Numero apres "+ count+ " fois.";
    output.style.color="green";
    count="";
    btn2.style.display="inline";
    btn.style.display="none";
    counter.style.color="green";
    
  
  }
  else if( num.value > randomNr){
    output.innerHTML = "Votre Numero est superieur, réssayer";
    counter.innerHTML=++count;
  }
  else {
    output.innerHTML = "Votre Numero est inferieur, réssayer ";
    counter.innerHTML=++count
  }
  
  btn2.addEventListener("click", ressayer);
  function ressayer(){
    location.reload();
  }
}


