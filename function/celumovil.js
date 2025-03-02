function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
    } while (isNaN(numero));
    return numero; 
}
function elegirOpcion(){
    let opcion;
    do {
        opcion = prompt(`Bienvenido, seleccione:\n 1.tigo \n 2. claro \n 3. movistar \n 4. salir `);
        if (opcion!="tigo" && opcion!="claro" && opcion!="movistar" && opcion!="salir") {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion!="tigo" && opcion!="claro" && opcion!="movistar" && opcion!="salir");
    return opcion;
}
function calcularTotal(cargoFijo,minutos,minutoExt,datos){
    return cargoFijo + (minutos*minutoExt) + datos;
}
function mostrarMensaje(cargoFijo,minutos,minutoExt,datos,valorTotal){
    return alert (`el cargo fijo tiene un valor de: $${cargoFijo} \n usted utilizo la ${minutos}minutos \n los minutos internacionales cuestan :$ ${minutoExt} \n los datos : $ ${datos} \n el valor a pagar es : $ ${valorTotal}`)
}
let check = false;
while (!check) {

    
    
    let opcion = elegirOpcion()
    
    let cargoFijo = 0;
            
    let minutoExt = 0;
            
    let datos = 0;
    let minutos = 0;

    switch(opcion){
        case "tigo": 
        minutos = obtenerNumero("ingrese el numero de minutos internacionales que utilizo")
        cargoFijo = 45000;
            
        minutoExt = 200;
            
        datos = 12000;

        valorTotal=calcularTotal(cargoFijo,minutos,minutoExt,datos)
        
        mostrarMensaje(cargoFijo,minutos,minutoExt,datos,valorTotal)
        break;
        case "claro":
        minutos = obtenerNumero("ingrese el numero de minutos internacionales que utilizo")
        cargoFijo =30000
            
        minutoExt = 100;
            
        datos = 18000;

        valorTotal=calcularTotal(cargoFijo,minutos,minutoExt,datos)
        
        mostrarMensaje(cargoFijo,minutos,minutoExt,datos,valorTotal)
        break;
        case "movistar":
        minutos = obtenerNumero("ingrese el numero de minutos internacionales que utilizo")

        cargoFijo = 40000
        
        minutoExt = 250
        
        datos = 8000
        valorTotal=calcularTotal(cargoFijo,minutos,minutoExt,datos)
        mostrarMensaje(cargoFijo,minutos,minutoExt,datos,valorTotal)
        break;
        case "salir":
            check= true;
            alert("hasta luego")
    }
}
