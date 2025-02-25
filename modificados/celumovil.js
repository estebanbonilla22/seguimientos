let check = false;
let cargoFijo = 0
let datos = 0
let minutoExt = 0
let valorTotal = 0
let minutos = 0;
while(!check){
    alert(`Bienvenido, seleccione:\n 1.tigo \n 2. claro \n 3. movistar \n 4. salir `);
    
    let opcion
    do{
        opcion = parseInt(prompt(`Ingrese la opción:`));
        if (opcion < 1 || opcion > 4) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 4);
    switch(opcion){
    case 1:
            
            do {
                minutos=parseInt(prompt("ingrese el los minutos internacionales que utilizo"))
                if (isNaN(minutos) || minutos < 0) {
                    alert("Entrada inválida. Por favor, ingrese un número.");
                }
            } while (isNaN(minutos) || minutos < 0);
             cargoFijo = 45000;
            
             minutoExt = 200;
            
             datos = 12000;
            valorTotal = cargoFijo + (minutos*minutoExt) + datos;
            alert(`el cargo fijo: ${cargoFijo} \n los minutos internacionales :$ ${minutoExt} \n los datos : $ ${datos} \n el valor a pagar es : $ ${valorTotal}`);
        break;
    case 2:
            
    
    do {
        minutos=parseInt(prompt("ingrese el los minutos internacionales que utilizo"))
        if (isNaN(minutos) || minutos < 0) {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
    } while (isNaN(minutos) || minutos < 0);
        cargoFijo = 30000
        
        minutoExt = 100
        
        datos = 18000
       
    
        valorTotal = cargoFijo + (minutos*minutoExt) + datos
        alert(`el cargo fijo: ${cargoFijo} \n los minutos internacionales :$ ${minutoExt} \n los datos : $ ${datos} \n el valor a pagar es : $ ${valorTotal}`);
        break;
    case 3:
            
    do {
        minutos=parseInt(prompt("ingrese el los minutos internacionales que utilizo"))
        if (isNaN(minutos) || minutos < 0) {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
    } while (isNaN(minutos) || minutos < 0);
        cargoFijo = 40000
        
        minutoExt = 250
        
        datos = 8000
        
        valorTotal = cargoFijo + (minutos*minutoExt) + datos
        alert(`el cargo fijo: ${cargoFijo} \n los minutos internacionales :$ ${minutoExt} \n los datos : $ ${datos} \n el valor a pagar es : $ ${valorTotal}`);
        break;
    case 4:
        check = true;
        alert("gracias por utilizar el programa");
        break;
    }
}







