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

let numero1 = obtenerNumero("Ingrese el primer número:");
let numero2 = obtenerNumero("Ingrese el segundo número:");
let numero3 = obtenerNumero("Ingrese el tercer número:");

if (numero1 > numero2 && numero1 > numero3) {
    document.write(`El número ${numero1} es el mayor.`);
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write(`El número ${numero2} es el mayor.`);
} else if (numero3 > numero1 && numero3 > numero2) {
    document.write(`El número ${numero3} es el mayor.`);
} else {
    document.write("Los números son iguales.");
}