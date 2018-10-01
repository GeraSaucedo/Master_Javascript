'use strict'
//PARAMETROS REST Y SPREAD
function listaFrutas(fruta1, fruta2){
    console.log("fruta 1: "+ fruta1);
    console.log("fruta 2:" + fruta2);
}

listaFrutas("Naranja", "Manzana");

//si ingresas mas parametros la pantalla no mostrara error
//pero no tomara los ultimos 2 valores
listaFrutas("Naranja", "Manzana", "Mango", "Melon", "Coco");

//para que tome todos los parametros se utiliza el REST
//que es agregarle 3 puntos al inicio de la variable
function listaFrutas2(fruta1, fruta2, ...frutasExtras){
    console.log("Fruta1: " + fruta1);
    console.log("Fruta2: " + fruta2);
    console.log(frutasExtras);
}

var frutas = ["Manzana", "Naranja"];
listaFrutas2(...frutas, "Melon", "Mango", "Coco", "Pera");

//...variable = SPREAD
//variable... = REST