let check = false;
let nombre = 0
let hora = 0
let pago = 0
pagoxHora = 0
while(!check){
    alert(`Bienvenido, seleccione:\n 1.saber su salario \n 2.salir ` );
    
    let opcion;
    do{
        opcion=parseInt(prompt("ingrese la opcion: "));
        if(opcion < 1 || opcion > 2){
            alert("ingrese una opcion valida")
        }
    }
    while(opcion < 1 || opcion > 2);

switch(opcion){
    case 1:
        nombre=prompt("ingrese el nombre")
        do {
            hora=parseInt(prompt("ingrese el numero de horas que trabajo"))
            if (isNaN(hora) || hora < 0) {
                alert("Entrada inválida. Por favor, ingrese un número.");
            }
        } while (isNaN(hora) || hora < 0);
        if(hora<=10){
            pagoxHora=30000
            pago = hora*pagoxHora;
            alert(`señor/a ${nombre} \n el numero de horas es ${hora} \n cada hora vale $ ${pagoxHora} \n su salario equivale a ${pago}`);
            
        }
        else if(hora>=10){
            pagoxHora=33000
                pago = hora*pagoxHora;
                alert(`señor/a ${nombre} \n el numero de horas es ${hora} \n cada hora vale $ ${pagoxHora} \n su salario equivale a $ ${pago}`);
            }
        
    case 2:
        check= true;
        alert("gracias por utilizar el programa")
    }
    


}
        

    
