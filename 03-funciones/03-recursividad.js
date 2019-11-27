
function recorrerArreglo(arregloNumeros, indice) {
    var tamaño = arregloNumeros.length;
    if (indice == tamaño) {
        console.log("Fin del arreglo");
    }
    else {
        console.log(arregloNumeros[indice]);
        indice++;
        recorrerArreglo(arregloNumeros, indice);
    }
}
function immprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("Se terminó");
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        immprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    recorrerArreglo([1, 2, 3, 4], 0);
}
