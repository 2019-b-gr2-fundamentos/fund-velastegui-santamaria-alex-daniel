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
        console.log("Los datos ingresados no corresponden a matrices iguales");
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

function intercambiarDiagonalesDeUnaMatriz(matrizUno)
{
    var matrizPrimeraDimension = obtenerPrimeraDimension(matrizUno) - 1;
    var matrizSegundaDimension = obtenerSegundaDimension(matrizUno) - 1;
    var esCuadrada = matrizSegundaDimension == matrizPrimeraDimension;
    var esValidoFilas = matrizPrimeraDimension != false;
    var esValidoColumnas = matrizSegundaDimension != false;
    var esValido = esValidoFilas && esValidoColumnas && esCuadrada;
    if(esValido)
    {
        var matrizDos = [[0, 0, 0, 0], [0, 0, 0, 0],[0, 0, 0, 0], [0, 0, 0, 0]];
        for(var i = 0; i <= matrizPrimeraDimension; i++)
        {
            for(var j = 0; j <= matrizSegundaDimension; j ++)
            {
                if(i != j && j != matrizPrimeraDimension - i)
                {
                    matrizDos[i][j] = matrizUno[i][j]
                }else
                {
                    matrizDos[i][matrizSegundaDimension - i] = matrizUno[i][i]
                    matrizDos[i][i] = matrizUno[i][matrizSegundaDimension - i]
                }
            }            
        }
        for(var i = 0; i <= matrizPrimeraDimension; i++)
        {
            for(var j = 0; j <= matrizSegundaDimension; j ++)
            {
                console.log(matrizDos[i][j]);
            }
        }
    }
}

function main02() {
    var matrizUno = [[1, 1, 3, 9], [2, 4, 5, 10],[6, 7, 8, 11],[12, 13, 14, 15]];
    var matrizDos = [[1, 2, 3], [1, 2, 3]];
    //compararMatriz(matrizUno, matrizDos);
    intercambiarDiagonalesDeUnaMatriz(matrizUno);
}
main02();