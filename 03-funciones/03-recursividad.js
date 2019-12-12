/*Escriba un programa que verifique si dos matrices son
iguales ( la matriz es de dos dimensiones n * m )
"n" y "m" pueden ser iguales o distintas*/
function MatricesIguales(matriz1, matriz2) {
    var igualN = matriz1.length == matriz2.length;
    var igualM = matriz1[1].length == matriz2[1].length;
    var puedeSer = igualM && igualN;
    var loSon = true;
    if (puedeSer) {
        for (var i = 0; i < matriz2.length; i++) {
            for (var j = 0; j < matriz2[1].length; j++) {
                if (loSon) {
                    loSon = matriz2[i][j] == matriz1[i][j];
                }
            }
        }
        if (loSon) {
            console.log("Las matrices son iguales");
        }
        else {
            console.log("Las matrices no son iguales");
        }
    }
    else {
        console.log("Las matrices ingresadas no son de igual dimension, por lo que no pueden ser iguales");
    }
}
function main() {
    var matriz1 = [[1, 2, 3], [2, 3, 4], [2, 3, 4]];
    var matriz2 = [[1, 2, 3], [2, 3, 4], [1, 3, 4]];
    //MatricesIguales(matriz1, matriz2);
    Filas(matriz1);
    Columnas(matriz1);
}
function Filas(matriz1) {
    var suma = 0;
    var n = matriz1.length;
    var m = matriz1[1].length;
    for (var i = 0; i < n; i++) {
        for(var j = 0; j < m; j ++)
        {
            suma = suma + matriz1[i][j];
        }
        var k = i + 1;
        console.log("La suma de la fila numero "+k+" es: " + suma);
        suma = 0;
    }
}

function Columnas(matriz1) {
    var suma = 0;
    var n = matriz1.length;
    var m = matriz1[1].length;
    for (var i = 0; i < m; i++) {
        for(var j = 0; j < n; j ++)
        {
            suma = suma + matriz1[j][i];
        }
        var k = i + 1;
        console.log("La suma de la columna numero "+k+" es: " + suma);
        suma = 0;
    }
}
