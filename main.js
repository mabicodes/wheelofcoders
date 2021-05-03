const boton = document.getElementById("spin");
const resultext = document.getElementById("resultado");
let alumnas = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];


function seleccion(){
  let posicion = Math.floor(Math.random() * alumnas.length);
  let elegida = alumnas[posicion];
    document.getElementById("spin").innerHTML="elegida";
    message = "La elegida es:" + elegida;
    resultext.innerHTML = message;
    alumnas.splice(posicion, 1);
    console.log(elegida);
}
boton.addEventListener("click",seleccion);


function noRepetida(elegida){

}git
