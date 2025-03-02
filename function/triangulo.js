function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)|| numero < 0) {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
    } while (isNaN(numero)|| numero < 0);
    return numero; 
}
function elegirOpcion(){
    let opcion;
    do {
        opcion = prompt(`Bienvenido, seleccione:\n 1.¿desea saber con los angulos si es un triangulo?  \n 2. no`);
        if (opcion!="si" && opcion!="no") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="si" && opcion!="no");
    return opcion;
}
function sum(primerAngulo,segundoAngulo,tercerAngulo){
    return primerAngulo + segundoAngulo + tercerAngulo
}
function validarTriangulo(suma){
    if (suma===180){
        alert ("es un triangulo")
    
    }
    else {
        alert (`no es un triangulo porque la suma de sus angulo es ${suma}`)
    }
}
function iniciarPrograma(){
    let check = false;
    

    while (!check){
        let opcion = elegirOpcion()
        
        let primerAngulo= 0
        let segundoAngulo= 0
        let tercerAngulo = 0
        let suma = 0
        let validacion= 0
        switch(opcion){
            case "si":
            primerAngulo = obtenerNumero("ingrese el valor del primer angulo: ")
            segundoAngulo = obtenerNumero("ingrese el valor del segundo angulo: ")
            tercerAngulo = obtenerNumero("ingrese el valor del tercer angulo: ")
            suma=sum(primerAngulo,segundoAngulo,tercerAngulo)
            validacion=validarTriangulo(suma)
             break;
             case "no":
                check=true;
                alert("gracias por utilizar el programa")   
        }
    }
}
iniciarPrograma();