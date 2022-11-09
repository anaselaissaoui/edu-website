const robot = document.getElementById("robot");
const sound = document.getElementById("music");
var string = "Bonjour c'est Oscar, veuillez sélectionner une catégorie dans le menu de gauche.";
var text = string.split("");
var el = document.getElementById('text');

(function animate() {
    text.length > 0 ? el.innerHTML+= text.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 60);
    })();




robot.addEventListener("click", replay);

function replay (){
    sound.play();
    location.reload();
    start();
}


