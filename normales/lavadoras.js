let tipoLavadora = parseInt(prompt("ingrese el tipo de lavadora "))
let cantidad = parseInt(prompt("ingrese el numero de lavadoras"))
let horas = parseInt(prompt("ingrese las horas que utilizo la lavadora"))
let costo = 0


switch(tipoLavadora){
    case 1 :
         costo = 4000*horas;
    break
    case 2 :
        costo = 3000*horas;
default: document.write("la lavadora no existe")
}
if (cantidad>3){
    descuento = costo*0,3
    costo -=descuento
}

document.write(`costo total por alquilar ${cantidad} lavadoras tipo${tipoLavadora} por ${horas} horas:${costo}`)


