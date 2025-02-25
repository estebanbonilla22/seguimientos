let check = false;

while(!check){
    alert(`Bienvenido, seleccione:\n 1.saber mi nota \n 2. Salir`);
    
    let opcion
    do{
        opcion = parseInt(prompt(`Ingrese la opción:`));
        if (opcion < 1 || opcion > 2) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 2);
    switch(opcion){
     case 1:
        do {
            fisica = parseInt(prompt("ingrese la calificacion de fisica:"));
            if (fisica<0 || fisica >=11) {
                alert("nota no valida.");
            }
        } while (fisica<0 || fisica >=11);
        do {
            quimica = parseInt(prompt("ingrese la calificacion de quimica:"));
            if (quimica<0 || quimica >=11) {
                alert("nota no valida.");
            }
        } while (quimica<0 || quimica >=11);
        do {
            matematicas = parseInt(prompt(" ingrese la calificacion de matematicas:"));
            if (matematicas<0 || matematicas >=11) {
                alert("nota no valida.");
            }
        } while (matematicas<0 || matematicas >=11);
        do {
            biologia = parseInt(prompt("ingrese la calificacion de biologia:"));
            if (biologia<0 || biologia >=11) {
                alert("nota no valida.");
            }
        } while (biologia<0 || biologia >=11);
        do {
            informatica = parseInt(prompt("ingrese la calificacion de informatica:"));
            if (informatica<0 || informatica >=11) {
                alert("nota no valida.");
            }
        } while (informatica<0 || informatica >=11);

        let porcentaje = ((fisica + quimica + biologia + matematicas + informatica)/50)*100
        if(porcentaje<=59.9){
        calificacion = "mala"
        alert(`tu porcentaje es ${porcentaje}% y tu calificacion es ${calificacion}`);
        }
        else if(porcentaje >= 60 && porcentaje <= 80){
        calificacion = "buena";
        alert(`tu porcentaje es ${porcentaje}% y tu calificacion es ${calificacion}`);
        }
        else if (porcentaje>80){
        calificacion = "exelente";
        alert(`tu porcentaje es ${porcentaje}% y tu calificacion es ${calificacion}`);
        }
    break;
    case 2:
        check = true;
        alert("gracias por utilizar el programa");
        break;
    }
   
}
    
    



