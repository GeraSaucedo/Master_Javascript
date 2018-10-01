'use strict'

//pnatillas de texto
var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

//var text = "Mi nombre es: "+nombre+" Mis apellidos son: "+apellidos;

var text = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mis apellidos: ${apellidos}</h3>
`
document.write(text);