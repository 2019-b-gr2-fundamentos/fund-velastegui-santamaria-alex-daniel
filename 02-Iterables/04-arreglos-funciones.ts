const arregloNumeros = [1,2,3,4,9,6,7,8,9,10];
// Acceder
//Necesito: Indice
console.log(arregloNumeros[6]);
//Añadir al final
//Necesito: Elemento a añadirse
arregloNumeros.push(11);
//Borrar al final
arregloNumeros.pop();

// Añadir
// Necesito: Indice y Elemento
arregloNumeros.splice(1,0,1.1)
console.log(arregloNumeros);
// o Borrar
arregloNumeros.splice(7, 1)
console.log(arregloNumeros)
// Buscar el indice de un elemento elemento
const indice = arregloNumeros.indexOf(1.1); //5
const noExiste = arregloNumeros.indexOf(7);
const doble = arregloNumeros.indexOf(9);

console.log(indice);
console.log(noExiste);
console.log(doble)