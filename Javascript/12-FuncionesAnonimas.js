'use strict'
//FUNCIONES ANONIMAS
/**
 * Es una funcion que no tiene nombre y
 * se utiliza para hacer callbacks 
 */
var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}
//para llamar la funcion se hace:
// pelicula("titanic");

//CALLBACK-------
/**
 * un callback es una funcion que se ejecuta dentro de otra
 */

 function sumame(N1, N2, sumaYmuestra, sumaPorDos){
        var sumar = N1 + N2;
        
        sumaYmuestra(sumar);
        sumaPorDos(sumar);
        
        return sumar;
}

//funcion callback ->
sumame(5, 7, 
    function(dato){
        console.log("La suma es: ", dato);
    },
    function(dato){
        console.log("La suma por dos es: ", (dato*2));
    }
)

//funciones de flecha, es lo mismo que la funcion anterior pero 
//con otra sintaxis, (sustituir function por =>)
sumame(5, 7, 
    dato => {
        console.log("La suma es: ", dato);
    },
    dato => {
        console.log("La suma por dos es: ", (dato*2));
    }
)



