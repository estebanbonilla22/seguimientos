let check= false;
while(!check){
    
    alert(`Bienvenido, ingrese el numero de jugadores\n o salir: ` );
    let opcion;
    do{
        opcion=prompt("ingrese la opcion: ");
        if(opcion != "1" && opcion != "2" && opcion!="salir"){
            alert("solo son permitidos dos jugadores o salir ")
        }
    }
    while(opcion != "1" && opcion !="2" && opcion!="salir");
    let pedirCartas;
switch (opcion){
    case "1":
        let primera_carta = Math.floor(Math.random() * 11) + 1;
        let segunda_carta = Math.floor(Math.random() * 11) + 1;
        let carta_casino = Math.floor(Math.random() * 11) + 1;
        
        
        alert(`tu primera carta es: ${primera_carta}\n tu segunda carta es ${segunda_carta}\n la carta del casino es ${carta_casino}`)
        pedirCartas=confirm("quieres pedir cartas")
        let puntaje_jugador;
        if(pedirCartas){
            
            let tercera_carta = Math.floor(Math.random() * 11) + 1;
            let segunda_carta_casino = Math.floor(Math.random() * 11) + 1;
            alert(`tu tercer carta es: ${tercera_carta}\n la segunda carta del casino es ${segunda_carta_casino}`)
            puntaje_jugador =  primera_carta + segunda_carta + tercera_carta
            
        } 
        else{
            puntaje_jugador = primera_carta + segunda_carta
        }
        let segunda_carta_casino = Math.floor(Math.random() * 11) + 1;
        let puntaje_casino = carta_casino + segunda_carta_casino
        alert(`el casino tiene un total de: ${puntaje_casino}puntos \n usted tiene un total de : ${puntaje_jugador}`)
        if (puntaje_jugador > 21) {
            alert("¡Te pasaste de 21! Perdiste.");
        } else if (puntaje_jugador > puntaje_casino) {
            alert("¡Ganaste!");
        } else if (puntaje_jugador === puntaje_casino) {
            alert("¡Empate!");
        } else {
            alert("¡Perdiste!");
        }
            break;
        case "2":
        let primera_cartaJ1 = Math.floor(Math.random() * 11) + 1;
        let segunda_cartaJ1 = Math.floor(Math.random() * 11) + 1;
        
        alert(`jugador 1\n primera carta es : ${primera_cartaJ1} \nsegunda carta es: ${segunda_cartaJ1}`)

        let primera_cartaJ2 = Math.floor(Math.random() * 11) + 1;
        let segunda_cartaJ2 = Math.floor(Math.random() * 11) + 1;

        alert(`jugador 2\n primera carta es : ${primera_cartaJ2} \nsegunda carta es: ${segunda_cartaJ2}`)
        let pedirCartasJ1=confirm("jugador 1 quieres pedir cartas")
        let pedirCartasJ2=confirm("jugador 2 quieres pedir cartas")
        let puntaje_jugadorJ1;
        let puntaje_jugadorJ2;
        if(pedirCartasJ1){
            tercer_cartaJ1 =  Math.floor(Math.random() * 11) + 1;
            alert(`la tercer carta del jugador 1 es: ${tercer_cartaJ1}`)
            puntaje_jugadorJ1=  primera_cartaJ1 + segunda_cartaJ1+ tercer_cartaJ1
        }
        else {
            puntaje_jugadorJ1 = primera_cartaJ1 + segunda_cartaJ1
        }
        if(pedirCartasJ2){
            tercer_cartaJ2 =  Math.floor(Math.random() * 11) + 1;
            alert(`la tercer carta del jugador 2 es: ${tercer_cartaJ2}`)
            puntaje_jugadorJ2=  primera_cartaJ2 + segunda_cartaJ2+ tercer_cartaJ2
        }
        else {
            puntaje_jugadorJ2 = primera_cartaJ2 + segunda_cartaJ2
        }
        
        
        alert (`el jugador 1 tiene ${puntaje_jugadorJ1}puntos \n el jugador 2 tiene ${puntaje_jugadorJ2}`)

        if (puntaje_jugadorJ1 > 21) {
            alert("¡el jugador 1 se paso de 21!el jugador 2 gana.");
        } else if (puntaje_jugadorJ2 > 21) {
            alert("¡el jugador 2 se paso de 21!el jugador 1 gana");
        } else if (puntaje_jugadorJ1 > puntaje_jugadorJ2) {
            alert("el jugador 1 ¡gana!");
        } 
        else if (puntaje_jugadorJ1<puntaje_jugadorJ2) {
            alert("el jugador 2 ¡gana!");
        }
        else{
            alert("¡fue un empate!")
        }
        break;
        case "salir":
            check=true
            alert("hasta luego")
        

}

}
