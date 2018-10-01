'use strict'
alert("hola");
//OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion;

operacion = numero1 + numero2;  //SUMA
operacion = numero1 - numero2;  //RESTA
operacion = numero1 / numero2;  //DIVISION
operacion = numero1 % numero2;  //MODULO / RESTANTE

alert("El resultado de la operacion es: " + operacion);
//TIPOS DE DATOS
//en javascript no se requiere declarar el tipo de dato que usara una variable,
//simplemente se asigna el valor y la variable tomara el dato segun como se escriba su valor
var numero_entero = 44;
var cadena_texto = "Texto entre comillas";
var cadena_texto_variacion = 'Texto entre comilla simple';
var imprimir_con_comillas = 'Texto "con" comillas';
var booleano = true;
var numero_string = "50"

//se pueden parsear los string a numero de la siguiente manera: (  con la funcion Number(NumeroString)  )
console.log(Number(numero_string)+5); //se convierte a un numero entero, flotante, double, etc
console.log(parseInt(numero_string)+5); //se convierte unicamente a entero
console.log(parseFloat(numero_string)+25.2); // se convierte a float

//para convertir un numero a cadena se utiliza la funcion String()
console.log(String(numero_entero)+ 10);

//DETECTAR TIPO DE DATO
console.log(typeof numero_entero);
console.log(typeof numero_string);
console.log(typeof booleano);

