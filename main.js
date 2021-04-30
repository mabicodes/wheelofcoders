const boton = document.getElementById("spin");
const resultext = document.getElementById("resultado");
let alumnas = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function seleccion(){
    let elegida = alumnas[Math.floor(Math.random() * alumnas.length)];
    document.getElementById("spin").innerHTML="elegida";
    message = "La elegida es:" + elegida;
    resultext.innerHTML = message;

}
boton.addEventListener("click",seleccion)


function noRepetida(elegida){

}
