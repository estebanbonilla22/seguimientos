let operador = prompt("ingrese el operador al que pertenece")
let minutos = parseInt(prompt("ingrese el cuantos minutos internacionales utilizo"))

switch(operador){
    case "tigo":
        cargoFijo = 45000
        alert(`el cargo fijo de su plan es ${cargoFijo}`)
        minutoExt = 200
        alert(`los minutos internacionales valen ${minutoExt}`)
        datos = 12000
        alert(`los datos de su plan valen ${datos}`)

        valorTotal = cargoFijo + (minutos*minutoExt) + datos
        alert(`el valor de su plan es ${valorTotal}`)
    break;
    case "claro":
        cargoFijo = 30000
        alert(`el cargo fijo de su plan es ${cargoFijo}`)
        minutoExt = 100
        alert(`los minutos internacionales valen ${minutoExt}`)
        datos = 18000
        alert(`los datos de su plan valen ${datos}`)

        valorTotal = cargoFijo + (minutos*minutoExt) + datos
        alert(`el valor de su plan es ${valorTotal}`)
    break;
    case "movistar":
        cargoFijo = 40000
        alert(`el cargo fijo de su plan es ${cargoFijo}`)
        minutoExt = 250
        alert(`los minutos internacionales valen ${minutoExt}`)
        datos = 8000
        alert(`los datos de su plan valen ${datos}`)

        valorTotal = cargoFijo + (minutos*minutoExt) + datos
        alert(`el valor de su plan es ${valorTotal}`)
    break;


}