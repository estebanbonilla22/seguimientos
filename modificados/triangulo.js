let check = false;
let primerAngulo = 0
let segundoAngulo = 0
let tercerAngulo = 0
let suma = 0

while(!check){
    alert(`Bienvenido, seleccione:\n 1.saber si es un triangulo \n 2. Salir`);
    
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
                primerAngulo=parseInt(prompt("ingrese el primer angulo: "))
                if (isNaN(primerAngulo) || primerAngulo < 0) {
                    alert("Entrada inválida. Por favor, ingrese un número.");
                }
            } while (isNaN(primerAngulo) || primerAngulo < 0);
            do {
                segundoAngulo=parseInt(prompt("ingrese el segundo angulo: "))
                if (isNaN(segundoAngulo) || segundoAngulo < 0) {
                    alert("Entrada inválida. Por favor, ingrese un número.");
                }
            } while (isNaN(segundoAngulo) || segundoAngulo < 0);
            do {
                tercerAngulo=parseInt(prompt("ingrese el tercer angulo: "))
                if (isNaN(tercerAngulo) || tercerAngulo < 0) {
                    alert("Entrada inválida. Por favor, ingrese un número.");
                }
            } while (isNaN(tercerAngulo) || tercerAngulo < 0);
            
            suma =  primerAngulo + segundoAngulo + tercerAngulo

            if(suma==180){
                alert("es un triangulo")
            }
            else{
                alert("no es un triangulo")
            }
        break;
        case 2:
            check= true;
            alert("gracias por utilizar el programa")
        break;
    }
}
