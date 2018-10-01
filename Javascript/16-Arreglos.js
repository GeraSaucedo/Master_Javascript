'use strict'
//ARREGLOS
var nombre = "Gerardo Saucedo";
var nombres = ["Jesus", "Gerardo", "Saucedo", "Gonzalez", 10, true];
var idiomas = new Array("Ingles", "Español");

console.log(nombres);
console.log(idiomas);
console.log(nombres[1]);

//Arreglos avanzados
console.log(nombres[nombres.length-1]);


document.write("<h1>Nombre: </h1>");
document.write("<ul>");
for(var i = 0; i < nombres.length; i++){
    document.write("<li>"+nombres[i]+"</li>");
}
document.write("</ul>");

//RECORRER ARRAYS CON FOR EACH
document.write("<ul>");
nombres.forEach((elemento) => {
    document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");

//ARREGLO MULTIDIMENSIONAL
var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La mascara', 'Conjuro', 'Scary movie'];
var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][1]);

//OPERACIONES CON ARREGLOS
var arreglo = [1,2,3,4,5];

console.log(arreglo);
arreglo.push(6,7,8); //Agregar elemento a el arreglo
console.log(arreglo);
arreglo.pop(); //elimina el ultimo elemento del arreglo
console.log(arreglo);
console.log(arreglo.indexOf(5));
console.log(arreglo.splice(3)); //borrar los elemento segun el indice indicado
console.log(arreglo.join()); //convierte arreglo a string separado por comas

var cadena = "1, 2, 3, 4, 5";
console.log(cadena.split(", ")); //convierte un string a arreglo

//ORDENAR ARREGLOS
console.log(arreglo.sort()); //ordena el arreglo por orden alfabetico
console.log(arreglo.reverse()); //ordena el arrelgo inversamente

//RECORRER ARREGLOS FOR-IN
for(let elemento in arreglo){
    console.log("For-in: " + elemento);
}




