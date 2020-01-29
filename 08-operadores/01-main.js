function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Daniel", nota: 7 },
        { id: 2, nombre: "Vicente", nota: 6 },
        { id: 3, nombre: "Wendy", nota: 4 },
        { id: 4, nombre: "Carolina", nota: 9 },
        { id: 5, nombre: "Carlos", nota: 10 }
    ];
    //OPERADOR FOREACH
    /*
    Enviamos -> NADA
    Recibimos -> NADA
    */
    var respuestaDelForEach = arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        //valorActual.nota20 = valorActual.nota * 2;
    });
    //OPERADOR MAP -> TRANSFORMAR EL ARREGLO
    /*
    Enviamos  -> Valor Actual Modificado
    Recibimos -> Nuevo Arreglo Con Valor Modificados
    */
    var respuestaDelMap = arregloEstudiantes.map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            //nota:valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    //OPERADOR FILTER -> filtra el arreglo 
    /*
    Enviamos  -> Condicion
    Recibimos -> Nuevo Arreglo con los Valores filtrados
    */
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota > 7;
        var condicion5 = valorActual.nota < 5;
        return condicion7 || condicion5;
    });
    var respuestaFilterNombre = arregloEstudiantes.filter(function (valorActual) {
        var condicion4 = !valorActual.nombre.search("Daniel");
        return condicion4;
    });
    //OPERADOR SOME -> si agluno cumple TRUE, si ninguno cumple FALSE
    /*
    Enviamos  -> Condicion
    Recibimos -> Booleano
    */
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    //OPERADOR EVERY -> si todos cumplen TRUE, si alguno no cumple FALSE
    /*
    Enviamos  -> Condicion
    Recibimos -> Booleano
    */
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    //OPERADOR REDUCE -> Aplica el calculo a cada iteracion y devuleve un valor 
    /*
    Enviamos  -> Calculo
    Recibimos -> Valor
    */
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual, i, arreglo) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 // VALOR INICIAL DEL ACUMULADOR
    );
    //console.log("respuestaDelForEach", respuestaDelForEach);
    //console.log("respuestaDelMap", respuestaDelMap)
    //console.log("respuestaFilter", respuestaFilter);
    //console.log("respuestaSome", respuestaSome);
    //console.log("respeustaFilterNombre", respuestaFilterNombre);
    //console.log("respuestaEvery:", respuestaEvery);
    console.log("respuestaReduce", respuestaReduce);
    console.log("arregloEstudiantes", arregloEstudiantes);
}
main();
