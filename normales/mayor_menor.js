let numero1 =parseInt(prompt("ingrese el primer numero"))
let numero2 =parseInt(prompt("ingrese el segundo numero"))
let numero3 =parseInt(prompt("ingrese el tercer numero"))

if(numero1>numero2 && numero1>numero3){
    document.write(`el numero ${numero1} es el mayor`)
}
else if(numero2>numero1 && numero2>numero3){
    document.write(`el numero ${numero2} es el mayor`)
}
else if(numero3>numero1 && numero3>numero2){
    document.write(`el numero ${numero3} es el mayor`)
}
else {
    document.write("los numeros son iguales")
}