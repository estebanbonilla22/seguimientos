let check = false;
let nFotocopia = 0;

while(!check){
    alert(`Bienvenido, seleccione:\n 1.saber cuanto vale las fotocopias  \n 2. Salir`);
    
    let opcion
    do{
        opcion = parseInt(prompt(`Ingrese la opción:`));
        if (opcion < 1 || opcion > 2) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 2);
 switch(opcion){
    case 1:
        do {
            nFotocopia=parseInt(prompt("Ingrese el numero de fotocopias que saco: "))
            if (isNaN(nFotocopia) || nFotocopia < 0) {
                alert("Entrada inválida. Por favor, ingrese un número.");
            }
        } while (isNaN(nFotocopia) || nFotocopia < 0);
        if(nFotocopia<=499){
            precio = 120
            total = nFotocopia*precio
            alert(`el precio por fotocopia es ${precio} y el total es ${total}`)
        }
        else if(nFotocopia>=500 && nFotocopia<=749){
            precio = 100
            total = nFotocopia*precio
            alert(`el precio por fotocopia es ${precio} y el total es ${total}`)
        }
        else if(nFotocopia>=750 && nFotocopia<=999){
            precio = 80
            total = nFotocopia*precio
            alert(`el precio por fotocopia es ${precio} y el total es ${total}`)
        }
        else if(nFotocopia>1000){
            precio = 50
            total = nFotocopia*precio
            alert(`el precio por fotocopia es ${precio} y el total es ${total}`)
        }
        break;
        case 2:
        check = true;
        alert("gracias por utilizar el programa");
        break;
    
 }
}



