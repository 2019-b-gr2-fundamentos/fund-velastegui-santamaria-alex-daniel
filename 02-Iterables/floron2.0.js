const tamaño = prompt("Ingrese numero de elementos: ")
const posicion = prompt("Ingrese un numero: ")
const arreglo = []
let condicion = 0
//Llenar el vector de 0
    for(let i = 0; i < tamaño; i++){
        arreglo[i] = 0;
    }
//Elegir una posicion al azar y poner un 1 
    condicion = Math.floor(Math.random() * tamaño)
        arreglo[condicion] = 1;
//Verificar si el numero ingresado por teclado corresponde a la posicion del 1
if(arreglo[posicion] == 1){
    console.log("GANADOR!")
}else{
    console.log("Siga participando")
}