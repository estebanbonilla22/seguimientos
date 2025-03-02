function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)|| numero < 0 || numero > 10) {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
    } while (isNaN(numero)|| numero < 0 || numero > 10);
    return numero; 
}
function elegirOpcion(){
    let opcion;
    do {
        opcion = parseInt(prompt(`Bienvenido, seleccione:\n 1. saber mi nota \n 2. salir `));
        if (opcion < 1 || opcion > 2) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 2);
    return opcion;
}


function calcularPorcentaje(fisica,quimica,biologia,matematicas,informatica){
    return ((fisica + quimica + biologia + matematicas + informatica)/50)*100
}
function saberProceso(porcentaje){
    if(porcentaje<=59.9){
        return "mala"
        
        
        }
        else if(porcentaje >= 60 && porcentaje <= 80){
            return "buena"
           
        }
        else if (porcentaje>80){
             
            return "excelente"
        }
}
function mostrar_mensaje(calificacion){
    return alert (`su calificacion fue ${calificacion}`)
}
let check = false;
while (!check){
    let opcion = elegirOpcion()
    if (opcion === 2){
        check = true;
        alert("hasta luego.");
        break;
    }

let fisica = obtenerNumero("ingrese la calificacion de fisica");

let quimica = obtenerNumero("ingrese la calificacion de quimica");

let biologia = obtenerNumero("ingrese la calificacion de biologia");

let matematicas = obtenerNumero("ingrese la calificacion de matematicas");

let informatica = obtenerNumero("ingrese la calificacion de informatica");


let porcentaje = calcularPorcentaje(fisica,quimica,biologia,matematicas,informatica)

let calificacion = saberProceso(porcentaje)

mostrar_mensaje(calificacion)
}
