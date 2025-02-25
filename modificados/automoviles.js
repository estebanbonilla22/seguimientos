let check = false;

while(!check){
    alert(`Bienvenido, ¿su auto pertenece a estas referencias?\n -119 \n - 179 \n - 189 \n - 195 \n - 221 \n - 780 `);
    
    let opcion
    do {
       opcion = parseInt(prompt(`1.si \n 2.no \n 3.salir `))
        if (opcion < 1 || opcion > 3) {
            alert("La opción no es válida, intente nuevamente.");
        }
    } while (opcion < 1 || opcion > 3);
    switch(opcion){
    case 1:
         alert("su carro esta defectuoso,llevarlo a garantia");
        break;
    case 2:
        alert("su carro no esta defectuoso,puede utilizarlo con normalidad");
    break;
    case 3:
        check = true;
        alert("hasta pronto")
    break;
     }
        

}