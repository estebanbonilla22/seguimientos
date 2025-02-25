let genero = prompt("ingrese su genero")
let edad = parseInt(prompt("ingrese su edad"))
let ayuda = 0 
switch(genero){
    case "masculino":
        ayuda = 40000
        document.write(`el valor de la ayuda mensual es ${ayuda} `) 
    break;
    case "femenino":
        if(edad > 50){
            ayuda = 120000
        document.write(`el valor de la ayuda mensual es ${ayuda} `)
        }
        else if(edad >= 30 && edad <= 50){
            ayuda = 100000
        document.write(`el valor de la ayuda mensual es ${ayuda} `)
        }
        else if(edad<30){
            document.write("no recibe ayuda")
        }
        break;
    default: 
    document.write("genero no valido")
        


}