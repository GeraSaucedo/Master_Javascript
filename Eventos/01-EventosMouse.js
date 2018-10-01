/**
los eventos son acciones que se ejecutan cada que el usuario hace una accion,
cuando borra, cuando redimensiona la ventana, cuando escribe, etc.
*/

//EVENTOS DEL RATON (se puede definir en la etiqueta html con el atributo onclick o ondblclick)
//<button id="boton" onclick="cambiaColor();" >PRESIONAME</button>  
var boton = document.querySelector("#boton");

function cambiaColor(){
    var bg = boton.style.background;

    if(bg == "red")  boton.style.background ="blue";
    else boton.style.background ="red";

}

//otra forma fuera de las etiquetas html
boton.addEventListener('click', function(){
    cambiaColor();
});

//MOUSE OVER
boton.addEventListener('mouseover', function(){  //Evento paara cuando pasas por encima del raton
    boton.style.background = 'yellow';
});

boton.addEventListener('mouseout', function(){
    boton.style.background = "#ccc";
})

