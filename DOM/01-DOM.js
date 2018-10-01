'use strict'
/**
 * DOM - Document Object Model
 * El DOM es la estructura de objetos que genera el navegador cuando se carga un 
 * documento y se puede alterar mediante Javascript para cambiar dinámicamente los 
 * contenidos y aspecto de la página
 */
var caja = document.getElementById("micaja"); //Devuelve el codigo del elemento
var cajatext = document.getElementById("micaja").innerHTML; //Devuelve el texto del elemento

console.log(caja);

console.log(cajatext);
//cambiar cosas de un elemento
cajatext = document.getElementById("micaja"); 
cajatext.innerHTML = "Texto en la caja desde js"; //Cambiar el texto
cajatext.style.background = "red"; //cambiar el color de fondo
cajatext.style.padding = "30px"; //cambiar el padding
cajatext.style.color = "white"; //cambiar el color de letra
cajatext.className = "hola hola2"; //cambia o agrega el nombre de la clase

function cambiaColor(color){
    cajatext.style.background = color;
}

//QUERTY SELECTOR
caja = document.querySelector("#micaja"); //Es para buscar con selectores CSS
