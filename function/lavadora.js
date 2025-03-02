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
        opcion = parseInt(prompt(`Ingrese la opción:\n 1. Lavadora grande \n 2. Lavadora pequeña \n 3. Salir`));
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);
    return opcion;
}
    

function valorLavadora (opcion){
    if (opcion===1){
        return 3000;
    }
    else if (opcion===2){
        return 4000;
    }
    return 0;

}
function calcularCosto(valorLav,cantidadLavadoras, tiempoH){
    let costo = valorLav*cantidadLavadoras*tiempoH
    return costo;

}
function calcularDescuento(costo,cantidadLavadoras){
    if(cantidadLavadoras >= 3){
        return (costo) * 0.3
    }else{
        return  0
    }
}
function valorPagar(costo, descuento){
    return (costo) - descuento
}
function mostrarMensaje(valorTotal,valorLav,tiempoH,cantidadLavadoras,descuento){
    return alert(`Cantidad de lavadoras: ${cantidadLavadoras} \nLavadoras tipo: ${valorLav} \nHoras utilizadas: ${tiempoH} \n Costo total: $${valorTotal} y el descuento fue: $${descuento}`)
}
let check = false;
while (!check) {
    
    let opcion = elegirOpcion();
    if (opcion === 3){
        check = true;
        alert("hasta luego.");
        break;
    }
    let valorLav = valorLavadora(opcion);
    let cantidadLavadoras = obtenerNumero("Ingrese la cantidad de lavadoras a usar: ");
    let tiempoH = obtenerNumero("Ingrese la cantidad de horas de uso: ");
    let costo = calcularCosto(valorLav, cantidadLavadoras, tiempoH);
    let descuento = calcularDescuento(costo, cantidadLavadoras);
    let valorTotal = valorPagar(costo, descuento);


    mostrarMensaje(valorTotal,valorLav,tiempoH,cantidadLavadoras,descuento)

    

   
            
            

        
}

