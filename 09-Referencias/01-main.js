var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Referencias
function main() {
    var uno = 1;
    var dos = uno; // IGUALAN EL VALOR
    var tres = dos; //IGUALAN EL VALOR
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglo = [1, 2, 3];
    var otroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log('arreglo', arreglo);
    console.log('a', a);
    console.log('b', b);
    //otroArreglo = arreglo; //IGUALAN DIRECCIONES DE MEMORIA  
    otroArreglo = __spreadArrays(arreglo); //CLONA EL ARREGLO CON OTRA DIRECCION DE MEMORIA
    //PARA QUE NO SE MODIFIQUE EL ARREGLO ORIGINAL DEBEMOS ASIGNAR DIRECCINES DE MEMORIA DIFERENTE
    //CON UN FOR PODEMOS LLENAR UN NUEVO ARREGLO
    //FILTER CON UN SIEMPRE TRUE LLENAMOS UN NUEVO ARREGLO
    //MAP NUEVO ARREGLO
    //INMUTABILIDAD
    //EN JS CUANDO TRABAJEMOS CON ARREGLOS U OBJETOS DEBEMOS HACER UN CLON.
    //CON TODO ESTO HACEMOS UN CLON DEL ARREGO ORIGINAL CON OTRA DIRECCION DE MEMORIA Y AHI TRABAJAR
    otroArreglo.push(2);
    arreglo[0] = 9;
    arreglo[1] = 10;
    console.log('arreglo', arreglo);
    console.log('otroArreglo', otroArreglo);
    console.log('a', a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, adrian);
    var copUno = __assign({}, adrian);
    var copDos = __assign({}, adrian);
    var copTres = adrian;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    delete adrian.nombre; //ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22;
    //soloElNombre.edad = 22
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    console.log('copUno', copUno);
    console.log('copDos', copDos);
    console.log('copTres', copTres);
}
main();
/*en JS las primitivas hacen referencia al valoren los arrelos o en objetos hacen referencia ala direccion de memoria*/ 
