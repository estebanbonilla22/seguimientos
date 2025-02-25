let nFotocopia = parseInt(prompt("Ingrese el numero de fotocopias"))

if(nFotocopia<=499){
    precio = 120
    total = nFotocopia*precio
    document.write(`el precio por fotocopia es ${precio} y el total es ${total}`)
}
else if(nFotocopia>=500 && nFotocopia<=749){
    precio = 100
    total = nFotocopia*precio
    document.write(`el precio por fotocopia es ${precio} y el total es ${total}`)
}
else if(nFotocopia>=750 && nFotocopia<=999){
    precio = 80
    total = nFotocopia*precio
    document.write(`el precio por fotocopia es ${precio} y el total es ${total}`)
}
else if(nFotocopia>1000){
    precio = 50
    total = nFotocopia*precio
    document.write(`el precio por fotocopia es ${precio} y el total es ${total}`)
}