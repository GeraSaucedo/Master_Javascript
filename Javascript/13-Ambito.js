'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion"
    console.log(texto);
    console.log(numero); 
    console.log(hola_mundo);
}

var numero = 12;
var cadena = "Hola mundo";
holaMundo(cadena);

//al hacer lo siguiente aparecera un error
console.log(hola_mundo);
//Este error aparece porque la variable hola_mundo
//esta dentro de la funcion (No es global)
