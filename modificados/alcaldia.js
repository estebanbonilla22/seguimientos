let check = false;
let ayuda = 0;


while (!check) {
    alert(`Bienvenido, seleccione:\n 1. masculino \n 2. femenino \n 3. Salir`);

    let opcion
    do {
        opcion = parseInt(prompt(`Ingrese la opción:`));
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);
    switch(opcion){
    case 1:
        ayuda = 40000
        alert(`el valor de la ayuda mensual es ${ayuda} `)
    break;
    case 2 :
        do {
            edad = parseInt(prompt("Ingrese su edad:"));
            if (edad < 0) {
                alert("Edad no válida, intente nuevamente.");
            }
        } while ( edad < 0);
    
        if(edad > 50){
            ayuda = 120000
        alert(`el valor de la ayuda mensual es ${ayuda} `)
        }
        else if(edad >= 30 && edad <= 50){
            ayuda = 100000
            alert(`el valor de la ayuda mensual es ${ayuda} `)
        }
        else if(edad<30){
            alert("no recibe ayuda")
        }
    break;
    case 3:
        check = true;
        alert("hasta pronto")
        break;
    }
    
    

}
