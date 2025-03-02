// funcion - bloque de codigo -accion
let numero1 = 2
let numero2 = 3 // sin parametros
function sumar(){
    // implementacion
    let suma = numero1 + numero2
    console.log(suma)
}
sumar() // llamar la funcion

function mostrarMensaje(){
    console.log("Holaa")
    for (let index = 0; index < 4; index++){
        console.log(index)
    }
}
mostrarMensaje()

function sumar2(n1, n2){
    suma = n1 + n2
    console.log(suma)
}
sumar2(4, 5)
sumar2(3, 7)

function sumar3(num, num2){
    return num + num2
}
console.log(sumar3(3, 5))

function procesar(n, f){
    return n * f
}

function procesar2(m){
    return m + 5
}

console.log(procesar(procesar2(1)+3, procesar2(2)))

function seleccionarValorT(tipoLavadora){
    if(tipoLavadora ===  1){
        return 3000
    }else{
        return 4000
    }
}
seleccionarValorT(1)

function calcularDescuento(valorHora, cantidadLavadoras, tiempoH){
    if(cantidadLavadoras >= 3){
        return (valorHora * cantidadLavadoras * tiempoH) * 0.3
    }else{
        return  0
    }
}

function valorPagar(valorHora, cantidadLavadoras, tiempoH, descuento){
    return (valorPagar * cantidadLavadoras * tiempoH) - descuento
}
valorPagar(seleccionarValorT(1), 4, 3, calcularDescuento(seleccionarValorT(1), 4, 3))
let opcion = 1
switch (opcion){
    case 1: {
        console.log("mostrar horas: " + seleccionarValorT(1))
        break
    }
}
