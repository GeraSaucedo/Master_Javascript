//si cargas el script en el head, es decir, antes de que cargue ciertos elementos, saldran errores en la consola
//ya que aun no se han cargado ciertos elementos.
//Para arreglar este tipo de problemas se utiliza el evento Load
//SE USARAN LOS MISMO EVENTOS QUE EN EL TECLADO SOLAMENTE QUE AHORA CON LA FUNCION LOAD
window.addEventListener("load", () => {
    'use strict'
    var input = document.getElementById("nombre");
    
    //FOCUS
    input.addEventListener('focus', function(){ //EVENTO para cuando enfocas el puntero en el elemento
        console.log("[Focus] Estas dentro del input");
    });
    
    //BLUR 
    input.addEventListener('blur', function(){ //evento para cuando desenfocas el elemento
        console.log("[Blur] Estas fuera del input");
    });
    
    //KEYDOWN
    input.addEventListener('keydown', function(event){ //Evento para saber cuando presionas una tecla
        console.log("[KeyDown] Pulsando la tecla: " + String.fromCharCode(event.keyCode)); //fromcharcode es para saber que letra esta presionando
    });
    
    //KEYPRESS
    input.addEventListener('keypress', function(event){
        console.log("[KeyPress] Tecla presionada: " + String.fromCharCode(event.keyCode));
    });
    
    //KEYUP
    input.addEventListener('keyup', function(event){
        console.log("[KeyUP] Tecla soltada: " + String.fromCharCode(event.keyCode));
    });
});