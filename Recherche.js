
var recherche=document.getElementById("recherche");
var supprimer=document.getElementById("supprimer");
var output=document.getElementById("output");
var text = document.getElementById("phrase");
var mot = document.getElementById("mot"); 

recherche.addEventListener("click", find);

function find(e){
    e.preventDefault();
    if(text.value.includes(mot.value)){
        output.style.color = "green";
        output.innerHTML= "your word is included in the text";
    }else{
        output.style.color = "red";
        output.innerHTML= "your word is not included in the text";
    }
}

supprimer.addEventListener("click", sup);

function sup(e){
    e.preventDefault();
    output.innerHTML = text.value.replace(mot.value, '');
 
}
