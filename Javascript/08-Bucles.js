'use strict'
//Bucle FOR
var numero = 10;

for(var i = 0; i <= numero; i++){
    console.log("Imprimiendo con for: " + i);
    //hdebugger;
}

//Bucle WHILE
while(numero <= 15 ){
    numero++;
    console.log("Imprimiendo con while " + numero);
}

//Bucle DO-WHILE
do{             //ejecuta primero el bloque de instrucciones antes de evaluar para hacer el bucle
    numero++;
    console.log("Imprimiendo con Do-While " + numero);
}while(numero != 20);

//Parar bucles con break
while(true){
    numero++;
    console.log("Bucle con break " + numero);
    if(numero == 25) break;
}

