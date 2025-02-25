let tamano = prompt("ingrese el tamaño que desea")
let tocineta = confirm("¿quiere tocineta por $3000?")
let jalapeno = confirm("¿quiere jalapeño sin valor adiccional?")
let pavo =confirm("¿quiere pavo por $3000?")
let queso = confirm("¿quiere queso por 2500?")//confirm es para decir (aceptar,rechazar)
let valorTotal = 0



switch(tamano){
    case "grande":
        valorTotal = 12000
     break;
    case "pequeño" :
        valorTotal = 6000
    break;
    default:
        document.write("el tamaño no es valido")
}
    
if(tocineta) valorTotal += 3000;// si acepta se ejecuta de lo contrario no
if(jalapeno) valorTotal += 0;
if(pavo) valorTotal += 3000;
if(queso) valorTotal += 2500;

document.write(`el valor del sadwich es $${valorTotal}`)

    
   

    
