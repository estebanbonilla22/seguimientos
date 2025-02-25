let check = false;
let numero = 0;
let par = 0;

while(!check){
    alert(`Bienvenido, seleccione:\n 1.saber si el numero es par o impar \n 2. Salir`);
    
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
                numero=parseInt(prompt("Ingrese el numero: "))
                if (isNaN(numero) || numero < 0) {
                    alert("Entrada inválida. Por favor, ingrese un número.");
                }
            } while (isNaN(numero) || numero < 0);
            par = numero%2
            if(par==0){
            alert(`el numero ${numero} es par`)
            }
            else{
            alert(`el numero ${numero} es impar`)
            }
            break;
        case 2:
        check = true;
        alert("gracias por utilizar el programa");
        break;
        }
    }