function elegiropcion(){
    alert(`Bienvenido, ingrese el numero de jugadores\n o salir: ` );

    let opcion;
    
    do{
        opcion=prompt("ingrese la opcion: ");
        if(opcion != "1" && opcion != "2" && opcion!="salir"){
            alert("solo son permitidos dos jugadores o salir ")
        }
    }
    while(opcion != "1" && opcion !="2" && opcion!="salir");
    return opcion;
}
function randomCart(){
    
 return Math.floor(Math.random() * 11) + 1;
}

function pedir_Cartas(mensaje){
    return confirm(mensaje)
}

function aviso(puntaje_jugador){
    return alert(`el jugador tiene ${puntaje_jugador} puntos`)
}


function puntajeJugador(pedirCartas, primera_carta, segunda_carta) {
    let tercera_carta = pedirCartas ? randomCart() : 0;
    return primera_carta + segunda_carta + tercera_carta;
}


function iniciarPrograma(){
    let check = false;
    while (!check) {
        let opcion = elegiropcion()
        
        switch(opcion){
            case "1":
            let primera_carta= randomCart()
            let segunda_carta = randomCart()
            let carta_casino = randomCart()
            

            alert(`tu primera carta es: ${primera_carta}\n tu segunda carta es ${segunda_carta}\n la carta del casino es ${carta_casino}`)
            let pedirCartas= pedir_Cartas("quieres pedir otra carta")
            let tercera_carta = pedirCartas?randomCart():0;
            let segunda_carta_casino = randomCart()
            if (pedirCartas){
                alert (`Tu tercera carta es: ${tercera_carta}\nLa segunda carta del casino es: ${segunda_carta_casino}`)
            }
            let puntaje_jugador = puntajeJugador(pedirCartas, primera_carta, segunda_carta);
            let puntaje_casino = carta_casino + segunda_carta_casino;
            
            alert(`El casino tiene un total de: ${puntaje_casino} puntos.\nUsted tiene un total de: ${puntaje_jugador} puntos.`);

            if (puntaje_jugador > 21) {
                alert("¡Has perdido! Tu puntaje superó 21.");
            } else if (puntaje_casino > 21 || puntaje_jugador > puntaje_casino) {
                alert("¡Felicidades, has ganado!");
            } else if (puntaje_jugador === puntaje_casino) {
                alert("Es un empate.");
            } else {
                alert("¡El casino gana!");
            }
            break;
            case "2":
                let primera_cartaJ1= randomCart()
                let segunda_cartaJ1= randomCart()
                alert(`jugador 1\n primera carta es : ${primera_cartaJ1} \nsegunda carta es: ${segunda_cartaJ1}`)
                let primera_cartaJ2 = randomCart()
                let segunda_cartaJ2 = randomCart()
                alert(`jugador 2\n primera carta es : ${primera_cartaJ2} \nsegunda carta es: ${segunda_cartaJ2}`)
                let pedirCartasJ1 = pedir_cartas("jugador 1,¿quieres pedir ptra carta?")
                let pedirCartasJ2 = pedir_cartas("jugador 2,¿quieres pedir ptra carta?")
                let tercer_cartaJ1=pedirCartasJ1?randomCart():0;
                let tercer_cartaJ2=pedirCartasJ2?randomCart():0;
                if(pedirCartasJ1){
                    alert(`la tercer carta del jugador 1 es: ${tercer_cartaJ1}`)
                }
                if(pedirCartasJ2){
                    alert(`la tercer carta del jugador 2 es: ${tercer_cartaJ2}`)
                }
                let puntaje_JugadorJ1= puntajeJugador(pedirCartasJ1,primera_cartaJ1,segunda_cartaJ1,)
                let puntaje_jugadorJ2 = puntajeJugador(pedirCartasJ2,primera_cartaJ2,segunda_cartaJ2,)
                alert (`el jugador 1 tiene ${puntaje_JugadorJ1}puntos \n el jugador 2 tiene ${puntaje_jugadorJ2}`)
                if (puntaje_JugadorJ1 > 21) {
                    alert("¡el jugador 1 se paso de 21!el jugador 2 gana.");
                } else if (puntaje_jugadorJ2 > 21) {
                    alert("¡el jugador 2 se paso de 21!el jugador 1 gana");
                } else if (puntaje_JugadorJ1 > puntaje_jugadorJ2) {
                    alert("el jugador 1 ¡gana!");
                } 
                else if (puntaje_JugadorJ1<puntaje_jugadorJ2) {
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
        
    }
iniciarPrograma()






