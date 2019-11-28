function productoMatrices(tamaño:number){
const arreglo = [[],[]];
let suma = 0;
for(let i = 1;i<=tamaño;i++){
    arreglo[0][i-1] = +prompt("Ingrese el elemento "+i+" del primer vector");
    arreglo[1][i-1] = +prompt("Ingrese el elemento "+i+" del segundo vector");
}
let j = tamaño
for(let i = 0;i<tamaño;i++){
    j--
    let producto = arreglo[0][i] * arreglo[1][j];
    suma = suma + producto;
}
alert (`[0, 0, ${suma}]`);
}
function main01(){
    const tamaño = +prompt("Ingrese el tamaño de los arreglos");
    productoMatrices(tamaño);
}