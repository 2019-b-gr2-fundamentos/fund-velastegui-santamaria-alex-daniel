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

function compararMatriz()
{
    
}