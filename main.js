const boton = document.getElementById("spin");
let alumnas = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function seleccion(){
    let elegida = alumnas[Math.floor(Math.random() * alumnas.length)];
    console.log(elegida);
   //return elegida;
}
boton.addEventListener("click",seleccion);
//seleccion();

function noRepetida(elegida){

}