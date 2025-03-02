let encendido = true
let bateriaCel = 0;
if(encendido){
    console.log("su celular esta encendido")
    if(bateriaCel== 0){
        console.log("el celular esta descargado")
    }
    else if(bateriaCel<30){
        console.log("el celular necesita ser cargado")
    }
    else{
        console.log("el celular no debe ser cargado todavia")
    }
}