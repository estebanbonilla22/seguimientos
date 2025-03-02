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
        opcion = prompt(`Bienvenido, seleccione:\n 1.¿desea saber su salario?  \n 2. no`);
        if (opcion!="si" && opcion!="no") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="si" && opcion!="no");
    return opcion;
}
function valorHora (hora){
    if(hora<=10){
        return 30000
    }
    else if(hora>=10){

        return 33000
        }
}
function calcularSalario(hora,pagoxHora){
    return hora*pagoxHora
}
function mostrarMensaje(hora,pagoxHora,salario,nombre){
 return alert (`señor/a ${nombre} \n el numero de horas es ${hora} \n cada hora vale $ ${pagoxHora} \n su salario equivale a ${salario}`)
}
let check = false;
while (!check) {

    
    let opcion = elegirOpcion();
    let nombre = prompt("ingresar nombre")
    let hora = obtenerNumero("ingrese las horas trabajadas")
    let pagoxHora = valorHora(hora)
    let salario = calcularSalario(hora,pagoxHora)
    
    switch(opcion){
        case "si": 
            mostrarMensaje(hora,pagoxHora,salario,nombre)
        break;
        case "no":
            check = true;
            alert("hasta luego")
    }
}