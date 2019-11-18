//for
// 1. Declarar una variable
// 2. Condicion (Expresion)
// 3. Incrementar, Disminuir
for(let numeroExDeMiCrush = 7; numeroExDeMiCrush > 0; numeroExDeMiCrush = numeroExDeMiCrush - 1){
    console.log("ES CAN DA LO!", numeroExDeMiCrush)
}

for(let numeroExDeMiCrush = 1; numeroExDeMiCrush < 8; numeroExDeMiCrush = numeroExDeMiCrush + 1){
    console.log("ES CAN DA LO!", numeroExDeMiCrush)
}

for(let numeroExDeMiCrush = 1; numeroExDeMiCrush <= 7; numeroExDeMiCrush = numeroExDeMiCrush + 1){
    console.log("ES CAN DA LO!", numeroExDeMiCrush)
}

/*ARREGLOS
1. Elementos
2. Indices (0 index based) => POSICION
3. Longitud => # Elementos
Conjunto del MISMO elementos ([1, 2, 3, 4, 5])                  
Conjunto de DIFERENTES elementos ([1, "abc", true])                 Depende del lenguaje, de preferencia se va a usar arreglos del mismo elemento
*/
const arregloNumeros = [1, 2, 3, 4, 5];

//REASIGNAR
//arregloNumeros = [1, 2, 3, 4, 5, 6];
arregloNumeros.push(6);
console.log("arregloNumeros", arregloNumeros)
arregloNumeros.pop();
console.log("arregloNumeros", arregloNumeros)
console.log(arregloNumeros.length);

/* ITERAR UN ARREGLO
CONDICIONES DENTRO DEL FOR
1. let tamaño = arregloNumeros.legth
2. tamaño > 0
3. tamaño --
*/
for(let tamaño = arregloNumeros.length - 1 ; tamaño >= 0; tamaño--){
    console.log(arregloNumeros[tamaño])
}

/*1. Crear areglo 5 elementos
2. Cada elemento 1 o 0
Ej. [1, 0, 0, 0, 1]
3. Existe al menos un elemento un 1
*/
