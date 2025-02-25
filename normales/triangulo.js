let angulo1 = parseInt(prompt("ingrese el primer angulo del triangulo"))
let angulo2 = parseInt(prompt("ingrese el segundo angulo del triangulo"))
let angulo3 = parseInt(prompt("ingrese el tercer angulo del triangulo"))

let suma = angulo1 + angulo2 + angulo3

if(suma==180){
    document.write("es un triangulo")
}
else{
    document.write("no es un triangulo")
}