const tamaño = prompt("Ingrese numero de elementos: ")
const posicion = prompt("Ingrese un numero: ")
let condicion = 0
const arreglo = []
//Lenar el arreglo y comprobar que existe al menos un uno
while(condicion == false){
    for(let i = 0; i < tamaño; i++){
        arreglo[i] = Math.floor(Math.random() * 2)
    }
    for(let j = 0; j < tamaño; j++){
        if(arreglo[j] == 1){
            condicion = true
        }
    }
}
if(arreglo[posicion] == 1){
    console.log("GANADOR!")
}else{
    console.log("Siga participando")
}