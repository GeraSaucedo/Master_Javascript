'use strict'

var todosLosDivs = document.getElementsByTagName('div'); //Obtener todos los elementos div de la app
var contenidoTexto = todosLosDivs[2].textContent; //obtener el texto del segundo div encontrado

console.log(todosLosDivs);
console.log(contenidoTexto);

for(var valor in todosLosDivs){
   if(typeof todosLosDivs[valor].textContent == 'string' ){
    var parrafo = document.createElement("p"); //agrega la etiqueta que escribamos
    var texto = document.createTextNode("Test" + valor); //el texto que sera ingresado en la etiqueta
    parrafo.append(texto); //agregara el valor de la variable texto al final del existente
    parrafo.append("Append"); //Agrega el texto al final 
    parrafo.prepend("Prepend"); //agrega el texto al inicio
    document.getElementById("misection").prepend(parrafo); //Agregalo a el bloque que deseemos

    var titulo = document.createElement("h1"); 
    titulo.append(texto);
    document.querySelector("#micaja").prepend(titulo); //puedes ser con css selectors
   }
}

//SELECCIONAR ELEMENTOS
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');

divsAmarillo[0].style.background = 'yellow';

for(var valor in divsRojos){
    if(divsRojos[valor].className == 'rojo'){
        divsRojos[valor].style.background = "blue";
        divsRojos[valor].style.color = "white";
    }
}

