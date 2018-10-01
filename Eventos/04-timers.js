'use strict'
window.addEventListener('load', () => {

    //TIMERS
    // con setInterval se ejecuta cada cierto tiempo indicado
    function intervalo(){
        var tiempo = setInterval(function() { //Funcion set interval ejecuta las instrucicones cada cierto tiempo
            console.log("Set inteval ejecutado");
           if(document.getElementById("titulo").style.background == "yellow") document.getElementById("titulo").style.background = "blue";
            else document.getElementById("titulo").style.background = "yellow";
        }, 1000);

        return tiempo;
    }
    
    

    //con set timeout se ejecuta solo una vez al pasar el tiempo indicado
    /*
    var tiempo = setTimeout(function() { //Funcion set interval ejecuta las instrucicones cada cierto tiempo
        console.log("Set inteval ejecutado");
       if(document.getElementById("titulo").style.background == "yellow") document.getElementById("titulo").style.background = "blue";
        else document.getElementById("titulo").style.background = "yellow";
    }, 2000);
    */

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', function(){
        alert("has detenido el parpadeo");
        clearInterval(tiempo);
    });

    var stop = document.querySelector("#start");
    stop.addEventListener('click', function(){
        alert("has iniciado el parpadeo");
        tiempo = intervalo();
    });

});