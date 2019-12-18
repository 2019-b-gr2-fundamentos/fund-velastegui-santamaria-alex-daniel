function obtenerPrimeraDimension(matrizUno) {
    //VALIDACIONES
    var esValido = verificarTodosElementosDeUnArregloSonArreglos(matrizUno);
    if (esValido) {
        var primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }
    else {
        //console.log("No es una matriz");
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValidoFilas = verificarTodosElementosDeUnArregloSonArreglos(matrizUno);
    var esValidoColumnas = verificarTodosArreglosConIgualesElementos(matrizUno);
    var esValido = esValidoFilas && esValidoColumnas;
    if (esValido) {
        var segundaDimension = matrizUno[1].length;
        return segundaDimension;
    }
    //console.log("No es una matriz");
    return false;
}
function verificarTodosArreglosConIgualesElementos(matrizUno) {
    for (var i = 0; i < matrizUno.length; i++) {
        var elementoActual = matrizUno[i];
        var longitudActual = elementoActual.length;
        var elementoInicial = matrizUno[0];
        var longitudInicial = elementoInicial.length;
        if (longitudActual != longitudInicial) {
            return false;
        }
    }
    return true;
}
function verificarTodosElementosDeUnArregloSonArreglos(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' && elementoActual.indexOf;
        if (!esUnArreglo) {
            console.log("No es un arreglo");
            return false;
        }
    }
    return true;
}
function matricesValidas(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    var esValidoFilas = matrizUnoPrimeraDimension == matrizDosPrimeraDimension && matrizDosPrimeraDimension != false;
    var esValidoColumnas = matrizUnoSegundaDimension == matrizDosSegundaDimension && matrizDosSegundaDimension != false;
    var esValido = esValidoFilas && esValidoColumnas;
    if (esValido) {
        return esValido;
    }
    else {
        console.log("Los datos ingresados no corresponden a una matriz");
        return false;
    }
}
function compararMatriz(matrizUno, matrizDos) {
    var esValido = matricesValidas(matrizUno, matrizDos);
    if (esValido) {
        var matrizPrimeraDimension = obtenerPrimeraDimension(matrizUno);
        var matrizSegundaDimension = obtenerSegundaDimension(matrizUno);
        var loSon = true;
        for (var i = 0; i < matrizPrimeraDimension; i++) {
            for (var j = 0; j < matrizSegundaDimension; j++) {
                if (loSon) {
                    loSon = matrizUno[i][j] == matrizDos[i][j];
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
}
function main02() {
    var matrizUno = [[1, 2], [1, 2, 3]];
    var matrizDos = [[1, 2, 3], [1, 2, 3]];
    compararMatriz(matrizUno, matrizDos);
}
main02();
