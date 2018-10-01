/*-----------------------------------------------------------------------------------------------------
 *              CONSTANTES
 * ----------------------------------------------------------------------------------------------------
 * Es como una variable pero su valor no puede cambiar
 */
'use strict'
var web = "https://www.google.com";
const ip = "127.0.0.1";

web = "https://www.youtube.com";
ip = "192.168.0.1"; //marca error por ser una constante que se le esta intentando cambiar de valor

console.log(web,ip)
