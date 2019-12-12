function productoMatrices(tamaño) {
    var arreglo = [[], []];
    var suma = 0;
    for (var i = 1; i <= tamaño; i++) {
        arreglo[0][i - 1] = +prompt("Ingrese el elemento " + i + " del primer vector");
        arreglo[1][i - 1] = +prompt("Ingrese el elemento " + i + " del segundo vector");
    }
    var j = tamaño;
    for (var i = 0; i < tamaño; i++) {
        j--;
        var producto = arreglo[0][i] * arreglo[1][j];
        suma = suma + producto;
    }
    alert("[0, 0, " + suma + "]");
}
function main01() {
    var tamaño = +prompt("Ingrese el tamaño de los arreglos");
    productoMatrices(tamaño);
}
