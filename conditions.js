
let validBtn = document.getElementById("valid-btn");
let output = document.querySelector("#output");

validBtn.addEventListener('click', vit);

function vit(a) {
  a.preventDefault();

  let jour = document.querySelector("#jour").value;
  let mois = document.querySelector("#mois").value;
  let annee = document.querySelector("#annee").value;

  if( annee > 1900
    && 
    jour>=1
     && (
    ((mois==4 ||mois ==6||mois ==9||mois ==11) && jour<=30)
    ||
    ((mois==1||mois ==3||mois ==5||mois ==7||mois ==8||mois ==10||mois ==12)&& jour<=31)
    ||
    (mois==2 && jour<=28) ) ) 
    {
    output.style.color = "green";
    output.innerHTML = "Date valide";}
    
    else{
      output.style.color = "red";
      output.innerHTML = "Date Invalide";
    }
}
