function elegirOpcion(){
    let opcion;
    do {
        opcion = parseInt(prompt(`Bienvenido, seleccione su problema:\n 1.emite un pitido y la unidad gira \n 2. emite un pitido y la unidad no gira \n 3. no emite un pitido y el disco duro no gira \n 4. no emite un pitido y el disco duro gira \n 5. salir`));
        if (opcion < 1 || opcion > 5) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 5);
    return opcion;
}
function sugerencia(opcion){
    switch(opcion){
        case 1:
            alert("Póngase en contacto con el técnico apoyo")
        break;
        case 2:
            alert("Verificar contactos de la unidad")
        break;
        case 3:
            alert("Traiga la computadora para repararla en la central")
        break;
        case 4:
            alert("Compruebe las conexiones de altavoces")
        break;
        case 5:
            check = true;
            alert("gracias por utilizar nuestro programa")
        }
}
let check=false;
while(!check){
    let opcion = elegirOpcion()
    check = sugerencia(opcion)
    break;
}