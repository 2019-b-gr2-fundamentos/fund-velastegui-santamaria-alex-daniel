const arreglo = [1,2,3,4,5,6,7,8,9,10];
const arreglo02 = []
const posicion = prompt("Ingrese la posicion en el que quiere añadir el elemento")
const elementoString = prompt("Ingrese el elemento que desea aladir");
const elemento = Number(elementoString);

for(let i = 0; i<10;i++){
    if(i<posicion){
    arreglo02.push(arreglo[i]);
    }else{
        if(i == posicion){
            arreglo02.push(elemento);
        }else{
            arreglo02.push(arreglo[i]);
        }
    }
}
console.log(arreglo02);
