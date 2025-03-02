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
        opcion = parseInt(prompt(`Bienvenido, seleccione:\n 1. masculino \n 2. femenino \n 3. Salir`));
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);
    return opcion;
}
function ayudas(opcion,edad){
    if (opcion===1){
        valorAyuda = 40000;
        return valorAyuda;
    }
    else if(opcion=== 2){
        if(edad > 50){
            valorAyuda = 120000
            return valorAyuda
        }
        else if(edad >= 30 && edad <= 50){
            valorAyuda = 100000
            return valorAyuda;
        }
        else if(edad<30){
            return alert("no recibe ayuda")
        }
    
    }
}
function mostrar_mensaje(valorAyuda){
    return alert(`el valor de su ayuda : $ ${valorAyuda}`)

}

let check = false;
while (!check) {
    
    let opcion = elegirOpcion();
    if (opcion === 3){
        check = true;
        alert("hasta luego.");
        break;
    }
    let edad = obtenerNumero("Ingrese su edad: ");
    let valorAyuda = ayudas(opcion,edad);
    


    mostrar_mensaje(valorAyuda)

}
    