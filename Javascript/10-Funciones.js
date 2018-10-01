'use strict'
// FUNCIONES
/**
 * Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
 * estructura basica de una funcion:
 * function nombreFuncion(parametros){
 *      instrucciones
 * }
 * 
 */
function saludo(){
    //console.log("Hola soy una funcion");
    return "Hola soy una funcion"
}

//invocar a la funcion
saludo();
var resultado = saludo();
console.log("Funcion: " + resultado);

//FUNCIONES CON PARAMETROS
function suma(N1, N2){
    console.log("Suma = " + (N1+N2));
}
//NOTA: si no recibe parametros deberia de mandar un error

//funciones con parametros opcionales
function mostrar(variable = false){
    if(variable == false) document.write("Variable = false");
    else document.write("Variable = false");
}
//con esta funcion puedes asignar un valor por default y este puede ser
//cambiado al invocar a la funcion

//PARAMETROS 


