let nombre =prompt("ingrese el nombre")
let hora = parseInt(prompt("ingrese las horas trabajadas"))

if(hora<=10){
    pago = hora*30000;
    document.write(`señor/a ${nombre},el numero de horas es ${hora} y su salario equivale a ${pago}`);
    
}
else if(hora>=10){
        pago = hora*33000;
        document.write(`señor/a ${nombre},el numero de horas es ${hora} y su salario equivale a ${pago}`)
    }

        

    
