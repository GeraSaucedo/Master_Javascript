
/*
--------------------------------------------------------------------------------------------------
--                                      LET Y VAR                                               --
--------------------------------------------------------------------------------------------------
Javascript permite definir las variables con 2 palabras reservadass, LET y VAR
    LET: Permite defeinir variables limitando su alcance al bloque donde se esta usando
    VAR: Define una variable local
*/
'use strict'

//Prueba con var
var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

//Prueba con let
var texto = "Gerardo";
console.log(texto);

if(true){
    let texto = "Jerry";
    console.log(texto);
}

console.log(texto);
