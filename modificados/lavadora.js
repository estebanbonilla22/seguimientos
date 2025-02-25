let check = false;
let costo = 0;

while (!check) {
    alert(`Bienvenido, seleccione:\n 1. Lavadora grande \n 2. Lavadora pequeña \n 3. Salir`);

    let opcion
    do {
        opcion = parseInt(prompt(`Ingrese la opción:`));
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);

    switch (opcion) {
        case 1:
            
        case 2:
            let cantidad = parseInt(prompt(`Ingrese la cantidad de lavadoras que utilizó:`));
            let horas = parseInt(prompt(`Ingrese las horas que utilizó la lavadora:`));

            let tipoLavadora = opcion === 1 ? "grande" : "pequeña";
            let tarifa = opcion === 1 ? 4000 : 3000;

            costo = tarifa * horas;
            let descuento = 0;

            if (cantidad > 3) {
                descuento = costo * 0.3;
                costo -= descuento;
            }

            alert(`Cantidad de lavadoras: ${cantidad} \nLavadoras tipo: ${tipoLavadora} \nHoras utilizadas: ${horas} \nCosto total: ${costo} ${descuento > 0 ? `\nDescuento aplicado: ${descuento}` : ''}`);
            break;

        case 3:
            check = true;
            alert("hasta luego.");
            break;

        default:
            alert("Opción no válida.");
            break;
    }
}