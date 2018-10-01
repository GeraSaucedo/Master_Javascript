'use strict'
/**
 * Un condicional es una estructura de control 
 */
var A = 30;
var B = 12;

/*operadores relacionales
Mayor: >
Menor: <
MayorIgual >=
MenorIgual <=
Igual ==
Distinto !=
*/ 

if(A > B) {
    console.log("Edad 1 es mayor");
}
else {
    console.log("La edad 1 es inferior");
}
 
//otra manera de escribirlo
if(A > B) console.log("Edad 1 es mayor");
else console.log("La edad 1 es inferior");

//if anidado
if(true){
    if(true) console.log("If Anidado");
}

/**
operadores logicos:
AND:    &&
OR:     ||
NOT:    !
 */
var year = 2018;
if(year != 2016 && year == 2018){
    console.log("El año es 2018");
}


