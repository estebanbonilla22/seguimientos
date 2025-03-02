function elegirOpcion(){
    let opcion;
    do {
        opcion = parseInt(prompt(`1.si \n 2.no \n 3.salir `));
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);
    return opcion;
}
function mostrar_mensaje(opcion){
    if(opcion===1){
        return alert ("su carro esta defectuoso,llevarlo a garantia")
    }
    
    else if(opcion===2){
        return alert ("su carro no esta defectuoso,puede utilizarlo con normalidad")
    }
}
let check = false;
while (!check){
    alert(`Bienvenido, ¿su auto pertenece a estas referencias?\n -119 \n - 179 \n - 189 \n - 195 \n - 221 \n - 780 `);
 
    let opcion = elegirOpcion()
    if (opcion === 3){
        check = true;
        alert("hasta luego.");
        break;
    }

    mostrar_mensaje(opcion)
}
