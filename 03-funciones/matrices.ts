function obtenerPrimeraDimension(matrizUno: number[][]):number | boolean
{
    //VALIDACIONES
    const esValido = verificarTodosElementosDeUnArregloSonArreglos(matrizUno);
    if(esValido)
    {
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else
    {
        //console.log("No es una matriz");
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]):number | boolean
{
    const esValidoFilas = verificarTodosElementosDeUnArregloSonArreglos(matrizUno);
    const esValidoColumnas = verificarTodosArreglosConIgualesElementos(matrizUno);
    const esValido = esValidoFilas && esValidoColumnas;
    if(esValido)
    {
        const segundaDimension = matrizUno[1].length;
        return segundaDimension;
    }
    //console.log("No es una matriz");
    return false;
}

function verificarTodosArreglosConIgualesElementos(matrizUno: number[][]): boolean
{
    for(let i = 0; i < matrizUno.length; i++)
    {
        const elementoActual = matrizUno[i];
        const longitudActual = elementoActual.length;
        const elementoInicial = matrizUno[0];
        const longitudInicial = elementoInicial.length;
        if(longitudActual != longitudInicial)
        {
            return false;
        }    
    }
    return true;
}

function verificarTodosElementosDeUnArregloSonArreglos(arreglo: any[]):boolean
{
    for(let i = 0; i < arreglo.length; i++)
    {
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' && elementoActual.indexOf;
        if(!esUnArreglo)
        {
            console.log("No es un arreglo");
            return false;
        }
    }
    return true;
}

function matricesValidas(matrizUno: number[][], matrizDos: number[][]): boolean
{
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    const matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    const matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    const esValidoFilas = matrizUnoPrimeraDimension == matrizDosPrimeraDimension && matrizDosPrimeraDimension != false;
    const esValidoColumnas = matrizUnoSegundaDimension == matrizDosSegundaDimension && matrizDosSegundaDimension != false;
    const esValido = esValidoFilas && esValidoColumnas;
    if(esValido)
    {
        return esValido;
    }else
    {
        console.log("Los datos ingresados no corresponden a una matriz");
        return false;
    }

}

function compararMatriz(matrizUno: number[][], matrizDos: number[][])
{
    const esValido = matricesValidas(matrizUno, matrizDos);
    if(esValido)
    {
        const matrizPrimeraDimension = obtenerPrimeraDimension(matrizUno);
        const matrizSegundaDimension = obtenerSegundaDimension(matrizUno);
        let loSon = true;
        for(var i = 0; i < matrizPrimeraDimension; i ++)
        {
            for(var j = 0; j < matrizSegundaDimension; j ++)
            {
                if(loSon)
                {
                    loSon = matrizUno[i][j] == matrizDos[i][j];
                }
            }
        }

        if(loSon)
        {
            console.log("Las matrices son iguales");
        }else
        {
            console.log("Las matrices no son iguales")
        }
    }
}

function main02()
{
    const matrizUno = [[1, 2, 3],[1, 2, 3]];
    const matrizDos = [[1, 2, 3],[1, 2, 3]];
    compararMatriz(matrizUno, matrizDos);
}
main02();