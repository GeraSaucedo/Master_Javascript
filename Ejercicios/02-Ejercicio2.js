'use strict'
/**
 * Utilizando un bucle, mostrar la suma y promedio de los numeros instroducidos hasta
 * introducir un numero negativo y ahi, mostrar el resultado
 */
var suma = 0, numeros = 0, media = 0;
do{
   var numero = parseInt(prompt("Ingrese el numero"));
    if(isNaN(numero)) alert("Numero no valido ingrese otro numero")
}while(isNaN(numero));

while(numero > 0){
    
    suma += numero;
    numeros++;
    media = suma/numeros;

    do{
        numero = parseInt(prompt("Ingrese el numero"));
        if(isNaN(numero)) alert("Numero no valido ingrese otro numero")
    }while(isNaN(numero));
}


alert("SUMA = " + suma);
alert("MEDIA = " + media);