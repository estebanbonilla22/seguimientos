let problema = prompt("ingrese su problema")

switch(problema){
    case "emite un pitido y la unidad gira":
        document.write("Póngase en contacto con el técnico apoyo")
    break;
    case "emite un pitido y la unidad no gira":
        document.write("Verificar contactos de la unidad")
    break;
    case "no emite un pitido y el disco duro no gira":
        document.write("Traiga la computadora para repararla en la central")
    break;
    case "no emite un pitido y el disco duro gira":
        document.write("Compruebe las conexiones de altavoces")
    break;
}