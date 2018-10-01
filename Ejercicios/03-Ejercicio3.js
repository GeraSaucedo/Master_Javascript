/**
 * Hacer un programa que muestre los numeros entre 2 numeros intriducidos
 */
'use strict'

do{
    var N1 = parseInt(prompt("Ingrese el primer numero"));
    var N2 = parseInt(prompt("Ingrese el segundo numero"));
    if(isNaN(N1) || isNaN(N2)) alert("Valor no valido, ingrese de nuevo los numeros");
}while(isNaN(N1) || isNaN(N2)); //VALIDACION

if(N1 == N2){
    document.write(N1);
}else{
    if(N1 > N2) {
        for(var i=N2;i<=N1;i++){
            document.write(i + "<br>");
        }
    }
    else {
        for(var i=N1;i<=N2;i++){
            document.write(i + "<br>");
        }
    }
}