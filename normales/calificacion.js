let fisica = parseInt(prompt("ingrese la calificacion de fisica"));
let quimica = parseInt(prompt("ingrese la calificacion de quimica"));
let biologia = parseInt(prompt("ingrese la calificacion de biologia"));
let matematicas = parseInt(prompt("ingrese la calificacion de matematicas"));
let informatica = parseInt(prompt("ingrese la calificacion de informatica"));

let porcentaje = ((fisica + quimica + biologia + matematicas + informatica)/50)*100

if(porcentaje<=59.9){
    calificacion = "mala"
    document.write(`tu porcentaje es ${porcentaje}% y tu calificacion es ${calificacion}`);
}
else if(porcentaje==60>=80){
    calificacion = "buena";
    document.write(`tu porcentaje es ${porcentaje}% y tu calificacion es ${calificacion}`);
}
else if (porcentaje>80){
    calificacion = "exelente";
    document.write(`tu porcentaje es ${porcentaje}% y tu calificacion es ${calificacion}`);
}
    
