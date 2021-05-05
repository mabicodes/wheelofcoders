
const boton = document.getElementById("spin"); //linkeamos el botón en HTML.
const resultext = document.getElementById("resultado"); //Nos muestra el resultado en HTML.
let alumnas = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];
let alumnas2 = []; //segundo Array

function seleccion(){
  let posicion = Math.floor(Math.random() * alumnas.length); //Busca un valor aleatoria dentro del array.
  let elegida = alumnas[posicion];                              //Convierte la posición en el nombre.
    document.getElementById("spin").innerHTML="elegida"; //Onclick botones en HTML y display "elegida" onscreen HTML.
    message = "La elegida es:" + elegida;                         //Variable mensaje que mostrar en el <p> en HTML.
    resultext.innerHTML = message;                                //Imprimir por pantalla el variable "message"
}

boton.addEventListener("click",seleccion);          //llamar la funcion seleccion en click

function eliminaselec(){
  alumnas2.push(elegida);                                       //Añade el valor del primer Array al segundo Array.
  alumnas.splice(posicion, 1);                       //Elimina el elemento seleccionado del primer Array.

  if (alumnas.length < 1){
    alert("¡No quedan más participantes!");
  }
}
