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
function mayorMenor(numero1,numero2,numero3){
    if(numero1>numero2 && numero1>numero3){
        return alert(`el numero ${numero1} es el mayor`)
    }
    else if(numero2>numero1 && numero2>numero3){
        return alert(`el numero ${numero2} es el mayor`)
    }
    else if(numero3>numero1 && numero3>numero2){
        return alert(`el numero ${numero3} es el mayor`)
    }
    else {
        return alert("los numeros son iguales")
    }
}
function elegirOpcion(){
    let opcion;
    do {
        opcion = prompt(`Bienvenido, seleccione:\n 1.¿desea saber cual numero es mayor?  \n 2. no`);
        if (opcion!="si" && opcion!="no") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="si" && opcion!="no");
    return opcion;
}
let check = false;
while (!check) {

    
    let opcion = elegirOpcion();
    switch(opcion){
        case "si":
            let numero1 = obtenerNumero("ingrese el primer numero")
            let numero2 = obtenerNumero("ingrese el segundo numero")
            let numero3 = obtenerNumero("ingrese el segundo numero")
            mayorMenor(numero1,numero2,numero3)
        break;
        case "no":
            check = true;
            alert("hasta luego")
    }
    
       
    


    mostrarMensaje(costo,nFotocopias)

}
