let phrase = document.getElementById("phrase");
let compter = document.getElementById("compter");
let output = document.getElementById("output");

let counter = 0;

compter.addEventListener("click", comp);
function comp(e){
    e.preventDefault();
    counter=0
    for (let i = 0; i <= phrase.value.length-1; i++) {

    if (phrase.value.charAt(i)=="a" || 
        phrase.value.charAt(i)=="e" || 
        phrase.value.charAt(i)=="i" ||
        phrase.value.charAt(i)=="o" ||
        phrase.value.charAt(i)=="u" || 
        phrase.value.charAt(i)=="y"){

        counter++;
        output.style.color='green';
        output.innerHTML = "La phrase que vous avez saisi contient " + counter + " voyelles";
    }
    // else{
    //     output.style.color='red';
    //     output.innerHTML = "La phrase que vous avez saisi ne contient pas des voyelles";
    // }
}

}
