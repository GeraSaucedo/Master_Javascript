/**
 * Hacer un programa que pida 2 numeros y nos muestra cual es mayor y cual es menor
 * PLUS: validar que ingresa caracteres validos 
 */
'use strict'
do{
    var N1 = parseInt(prompt("Ingrese el primer numero"));
    var N2 = parseInt(prompt("Ingrese el segundo numero"));
    if(isNaN(N1) || isNaN(N2)) alert("Valor no valido, ingrese de nuevo los numeros");
}while(isNaN(N1) || isNaN(N2)); //VALIDACION

if(N1 == N2){
    alert("Los numero son iguales");
}else{
    if(N1 > N2) alert("El Numero "+ N1 + " es el mayor");
    else alert("El numero "+ N2 + " es el mayor");
}


//