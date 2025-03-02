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
        opcion = parseInt(prompt(`Bienvenido, seleccione:\n 1.saber cuanto vale las fotocopias  \n 2. Salir`));
        if (opcion < 1 || opcion > 2) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 2);
    return opcion;
}
function precioFotocopia(nFotocopias){
    if(nFotocopias<=499){

        return nFotocopias*150
        
    }
    else if(nFotocopias>=500 && nFotocopias<=749){
        return nFotocopias *100
    }
    else if(nFotocopias>=750 && nFotocopias<=999){
        return nFotocopias * 80
        
    }
    else if(nFotocopias>1000){
       return nFotocopias * 50
        
    }
    
}
function mostrarMensaje(costo,nFotocopias){
    return alert (`el numero de fotocopias son ${nFotocopias} y el total es ${costo}`)
}

let check = false;
while (!check) {
    
    let opcion = elegirOpcion();
    if (opcion === 2){
        check = true;
        alert("hasta luego.");
        break;
    }
    
    let nFotocopias= obtenerNumero("Ingrese el numero de fotocopias que utilizo: ");
    let costo = precioFotocopia(nFotocopias);
    
    


    mostrarMensaje(costo,nFotocopias)

}

