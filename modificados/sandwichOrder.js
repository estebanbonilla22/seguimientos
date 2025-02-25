let check= false;
let valorTotal=0;
let tocineta = 0
let jalapeno = 0
let pavo = 0
let queso = 0
while(!check){
    alert(`Bienvenido, seleccione el tamaño que quiere el sadwich:\n 1.grande  \n 2.pequeño \n 3.salir`);
    
    let opcion
    do{
        opcion = parseInt(prompt(`Ingrese la opción:`));
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);
 switch(opcion){
    case 1:
        valorTotal = 12000
        tocineta = confirm("¿quiere tocineta por $3000?")
        jalapeno = confirm("¿quiere jalapeño sin valor adiccional?")
        pavo =confirm("¿quiere pavo por $3000?")
        queso = confirm("¿quiere queso por 2500?")
        if(tocineta) valorTotal += 3000;
        if(jalapeno) valorTotal += 0;
        if(pavo) valorTotal += 3000;
        if(queso) valorTotal += 2500;
    alert(`el valor del sadwich es $${valorTotal}`)
    break;
    case 2:
        valorTotal = 6000
        tocineta = confirm("¿quiere tocineta por $3000?")
        jalapeno = confirm("¿quiere jalapeño sin valor adiccional?")
        pavo =confirm("¿quiere pavo por $3000?")
        queso = confirm("¿quiere queso por 2500?")
        if(tocineta) valorTotal += 3000;
        if(jalapeno) valorTotal += 0;
        if(pavo) valorTotal += 3000;
        if(queso) valorTotal += 2500;
    alert(`el valor del sadwich es $${valorTotal}`)
    break;
    case 3:
        check=true;
        alert("gracias por utilizar el programa")
 }
}

 

    
   

    
