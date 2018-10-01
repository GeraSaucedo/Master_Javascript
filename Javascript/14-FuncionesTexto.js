'use strict'
//TRANSFORMACION DE TEXTOS
var numero = 444;
var text = "hola como esta hola   ";
var cadena = "Jerry";

var dato = numero.toString(); //Convertir numero a string
console.log(typeof dato);
console.log(text.toLowerCase()); //Poner cadena en minusculas
console.log(text.toUpperCase()); //poner cadena en mayusculas
console.log(text.length) //Longitud de un texto

//concatenacion de textos
console.log(text + " " +  cadena);
console.log(text.concat(" "+cadena));

//Metodos de busqueda
console.log(text.indexOf("hola")); //Buscar si existe una palabra dentro de un string
console.log(text.lastIndexOf("hola")) //busca el indice donde comienza la ultima coniciendia
console.log(text.search("como"));
console.log(text.indexOf("perro")); //si no existe la palabra regresara -1
console.log(text.match("esta")); //busca palabras en la cadena y guarda en un array las encontradas (Se pueden usar regex)
console.log(text.substr(2,7)); //muestra la parte de la cadena desde la posicion 2 ahsta la 7
console.log(text.charAt(2)); //muestra la letra segun la posicion 
console.log(text.startsWith("hol")); //Busca al incio del string si estan esos caracteres
console.log(text.includes("como est")); //Busca en el string coinciedia (true / false)

//FUNCIONES DE REMPLAZO
console.log(cadena.replace("erry", "esus")); //Remplaza el texto encontrado
console.log(text.slice(7, 10)); //corta el string a partir de adelante
console.log(text.slice(7));
console.log(text.split(" ")); //Separa la cadena segun el separador indicado
console.log(text.trim()); //quita espacios por delante y por detras de la cadena
