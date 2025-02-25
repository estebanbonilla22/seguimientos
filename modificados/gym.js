let check = false;

while(!check){
    alert(`Bienvenido, seleccione:\n 1. 15 dias por $18.000 \n 2. 30 dias por $35.000 \n 3. 3 meses por $86.000 \n4.salir` );
    
    let opcion;
    do{
        opcion=parseInt(prompt("ingrese la opcion: "));
        if(opcion < 1 || opcion > 4){
            alert("ingrese una opcion valida")
        }
    }
    while(opcion < 1 || opcion > 4);

    switch(opcion){
        case 1:
            alert("el valor a pagar es $18.000");
        break;
        case 2:
            alert("el valor a pagar es $35.000");
        break;
        case 3:
            alert("el valor a pagar es $86.000")
        break;
        case 4 :
        check=true;
        alert("hasta luego");
        break;

    }
}
    