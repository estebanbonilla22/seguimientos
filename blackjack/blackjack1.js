const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero de jugadores ", (respuesta) => {

    let Primera_cartaCa = Math.floor(Math.random() * 11) + 1;
    let segunda_cartaCa = Math.floor(Math.random() * 11) + 1;

    if (respuesta == 1) {

        let Primera_carta = Math.floor(Math.random() * 11) + 1;
        let segunda_carta = Math.floor(Math.random() * 11) + 1;
        console.log("tu primera carta es:" + Primera_carta)
        console.log(`tu segunda carta es: ${segunda_carta}`)
        console.log(" La primera carta del casino es:" + Primera_cartaCa)
        rl.question("¿ quieres pedir cartas ?", (respuesta) => {

            if (respuesta == "si") {

                let tercera_carta = Math.floor(Math.random() * 11) + 1;
                console.log("tu tercera carta es:" + tercera_carta)
                console.log("La segunda carta del casino es:" + segunda_cartaCa)

                var puntaje_jugador = Primera_carta + segunda_carta + tercera_carta

            }

            else if (respuesta == "no") {
                var puntaje_jugador = Primera_carta + segunda_carta
            }

            let puntaje_casino = Primera_cartaCa + segunda_cartaCa
            console.log("el casino tiene un total de:" + puntaje_casino)
            console.log("Usted tiene un total de:" + puntaje_jugador)

            if (puntaje_jugador <= puntaje_casino) {
                console.log("perdiste")
            }

            if (puntaje_jugador == puntaje_casino) {
                console.log("empate")
            }

            if (puntaje_jugador >= puntaje_casino) {
                console.log("Ganaste")
            }


        })
    } else if (respuesta == 2) {
        let Primera_cartaJ1 = Math.floor(Math.random() * 11) + 1;
        let segunda_cartaJ1 = Math.floor(Math.random() * 11) + 1;

        console.log("J1: tu primera carta es:" + Primera_cartaJ1)
        console.log(`J1: tu segunda carta es: ${segunda_cartaJ1}`)


        let Primera_cartaJ2 = Math.floor(Math.random() * 11) + 1;
        let segunda_cartaJ2 = Math.floor(Math.random() * 11) + 1;

        console.log("J2: tu primera carta es:" + Primera_cartaJ2)
        console.log(`J2: tu segunda carta es: ${segunda_cartaJ2}`)
        console.log(" La primera carta del casino es:" + Primera_cartaCa)

        rl.question("¿ J1 quieres pedir cartas ?", (respuesta) => {
            if (respuesta == "si") {

                let tercera_cartaJ1 = Math.floor(Math.random() * 11) + 1;
                console.log("J1 tu tercera carta es:" + tercera_cartaJ1)
                console.log("La segunda carta del casino es:" + segunda_cartaCa)

                var puntaje_jugadorJ1 = Primera_cartaJ1 + segunda_cartaJ1 + tercera_cartaJ1
            } else if (respuesta == "no") {
                var puntaje_jugadorJ1 = Primera_cartaJ1 + segunda_cartaJ1
            }
            let puntaje_casino = Primera_cartaCa + segunda_cartaCa
            console.log("el casino tiene un total de:" + puntaje_casino)
            console.log("Usted tiene un total de:" + puntaje_jugadorJ1)

            if (puntaje_jugadorJ1 <= puntaje_casino) {
                console.log("perdiste J1")
            }

            if (puntaje_jugadorJ1 == puntaje_casino) {
                console.log("empataste J1")
            }

            if (puntaje_jugadorJ1 >= puntaje_casino) {
                console.log("Ganaste J1")
            }

            rl.question("¿ J2 quieres pedir cartas ?", (respuesta2) => {

                if (respuesta2 == "si") {

                    let tercera_cartaJ2 = Math.floor(Math.random() * 11) + 1;
                    console.log("J2 tu tercera carta es:" + tercera_cartaJ2)
                    console.log("La segunda carta del casino es:" + segunda_cartaCa)

                    var puntaje_jugadorJ2 = Primera_cartaJ2 + segunda_cartaJ2 + tercera_cartaJ2

                }

                else if (respuesta2 == "no") {
                    var puntaje_jugadorJ2 = Primera_cartaJ2 + segunda_cartaJ2
                }

                let puntaje_casino = Primera_cartaCa + segunda_cartaCa
                console.log("el casino tiene un total de:" + puntaje_casino)
                console.log("Usted tiene un total de:" + puntaje_jugadorJ2)

                if (puntaje_jugadorJ2 <= puntaje_casino) {
                    console.log("perdiste J2")
                }

                if (puntaje_jugadorJ2 == puntaje_casino) {
                    console.log("empataste J2")
                }

                if (puntaje_jugadorJ2 >= puntaje_casino) {
                    console.log("Ganaste J2")
                }


            })

        });


    }
});