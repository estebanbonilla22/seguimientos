function elegirOpcion(){
    let opcion;
    do {
        opcion = prompt(`Bienvenido, seleccione el tamaño que quiere su sandwich:\n 1.grande \n 2. pequeño \n 3. salir `);
        if (opcion!="grande" && opcion!="pequeño" && opcion!="salir") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="grande" && opcion!="pequeño" && opcion!="salir");
    return opcion;
}
function iniciarPrograma(){
let check = false;
    while(!check){
        
        let opcion = elegirOpcion()
        let valorTotal=0;
        let tocineta = 0
        let jalapeno = 0
        let pavo = 0
        let queso = 0
     switch(opcion){
        case "grande":
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
        case "pequeño":
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
        case "salir":
            check=true;
            alert("gracias por utilizar el programa")
     }
    }
}
iniciarPrograma();