function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
    } while (isNaN(numero));
    return numero; 
}
function elegirOpcion(){
    let opcion;
    do {
        opcion = prompt(`Bienvenido, seleccione:\n 1.¿desea saber si el numero par o impar?  \n 2. no`);
        if (opcion!="si" && opcion!="no") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="si" && opcion!="no");
    return opcion;
}
function validarParImpar(numero){
    let par = numero%2
        if(par==0){
            return alert(`el numero ${numero} es par`)
            }
        else{
            return alert(`el numero ${numero} es impar`)
            }
}
let check = false;
while (!check) {

    
    let opcion = elegirOpcion();
    
    
    switch(opcion){
        case "si":
            let numero = obtenerNumero("ingrese el primer numero")
            validarParImpar(numero)
        break;
        case "no":
            check = true;
            alert("hasta luego")
    }
}