'use strict'
/**
 * BOM  Browser Object Model
 */
function getBOM(){
    console.log("Alto: " + window.innerHeight); //Ver que alto tiene la pagina 
    console.log("Ancho: " + window.innerWidth); //Ver el ancho de la pagina
    console.log("Alto w screen: " +screen.height); //Alto de la pantalla
    console.log("Ancho w screen: " + screen.width); //Ancho de la pantalla
    console.log("locaiton: " + window.location);
}

function redirect(url){
    window.location.href = url; //Redirige a el url especificado
}

function abrirVentana(url){
    window.open(url);   //Abre el url en una nueva pestaña
    window.open(url,"","width=400,heigth=300");   //Abre el url en una nueva ventana de ese tamaño
}

 getBOM();