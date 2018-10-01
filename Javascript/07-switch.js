'use strict'
var edad = Number(prompt("Ingrese su edad")); //con prompt puedes ingresar datos desde teclado
var edad2 = prompt("Ingrese su edad2"); //prompt suele tomar las variables como string
var imprime;

switch(edad){
    case 18: imprime = "Tienes 18 años"; break;
    case 19: imprime = "Tienes 18 años"; break;
    case 20: imprime = "Tienes 18 años"; break;
    case 30: imprime = "Tienes 18 años"; break;
    case 40: imprime = "Tienes 18 años"; break;
    case 50: imprime = "Tienes 18 años"; break;
    case 60: imprime = "Tienes 18 años"; break;
    default: imprime = "ingresa otra edad";
}

alert(imprime);
console.log(typeof edad);
console.log(typeof edad2);