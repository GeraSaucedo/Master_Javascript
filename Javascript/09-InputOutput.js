'use strict'

//ALERTAS
alert("Esto es una alerta!!");
alert("Este es mi texto");

//CONFIRMACION
confirm("Estas seguro de querer continuar?");
var mi_resultado = confirm("Ventana de confirmacoin");  //Para ver que boton selecciono si aceptar o cancelar
console.log("confirm " + mi_resultado);

//INGRESAR DATOS
prompt("Ingresa tu edad", 18); //prompt(Mensaje a Mostrar, Valor Que tomara si no pone nada)
prompt("Ingresa tu edad");
var resultado = prompt("Guardar en variable", 20);
console.log("prompt: " + resultado)