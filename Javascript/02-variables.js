/*--------------------------------------------------------------------------------
 *una variable es un contenedor de indormacion                                  --
 ---------------------------------------------------------------------------------*/
'use strict'
var pais = "Mexico"; //Declaramos la variable pais
var continente = "America"; //Declaramos la variable continente
var año = "2018"; //Declaramos la variable año
var pais_y_continente = pais + ' ' + continente; //Concatenar variables

pais = "Alemania";
continente = "Europa";

console.log(pais_y_continente);
console.log(pais, continente, año);


/*
--------------------------------------------------------------------------------------------------
--                                   MODO ESCTRICTO                                              --
--------------------------------------------------------------------------------------------------
    Una forma de trabajar con JavaScript bastante común en código profesional 
    es utilizar siempre por defecto el Modo Estricto de este lenguaje. Se trata 
    de una variante del lenguaje que es menos permisiva con ciertos tipos de 
    comportamientos en el código y que hace que éste se comporte de un modo más estricto, 
    como su propio nombre indica.
    Para por ejemplo, cuando defines una variable
        pais = "Mexico"     Con el modo esticto saltaria un error, sin el modo estricto no marcaria error alguno
    var pais = "Mexico"     por lo que se tendria que poner con la palabra var para que no saltara el error
*/



