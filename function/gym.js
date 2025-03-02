function elegirOpcion(){
    let opcion;
    do {
        opcion = prompt(`Bienvenido, cuanto que quiere asistir al gym:\n 1. 15 dias:$18.000 \n 2. 30 dias:$35.000 \n 3. 3 meses:$86.000 \n4.salir` );
        if (opcion!="15 dias" && opcion!="30 dias" && opcion!="3 meses" && opcion!="salir") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="15 dias" && opcion!="30 dias" && opcion!="3 meses" && opcion!="salir");
    return opcion;
}
function iniciarPrograma(){
    let check = false;
    while(!check){
        
        
        let opcion= elegirOpcion()
        switch(opcion){
            case "15 dias":
                alert("el valor a pagar es $18.000");
            break;
            case "30 dias":
                alert("el valor a pagar es $35.000");
            break;
            case "3 meses":
                alert("el valor a pagar es $86.000")
            break;
            case "salir" :
            check=true;
            alert("hasta luego");
            break;
    
        }
    }
}
iniciarPrograma()