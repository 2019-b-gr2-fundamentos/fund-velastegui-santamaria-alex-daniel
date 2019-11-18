const tamaño = prompt("Ingrese numero de elementos: ")
const posicion = prompt("Ingrese un numero: ")
const arreglo = []
let condicion = 0
while(condicion == 0){
    for(let i = 0; i < tamaño; i++){
        arreglo[i] = Math.floor(Math.random() * 2)
    }
    for(let j = 0; j < tamaño; j++){
        if(arreglo[j] == 1){
            condicion++
        }
    }
}

if(arreglo[posicion] == 1){
    console.log("GANADOR!")
}else{
    console.log("Siga participando")
}