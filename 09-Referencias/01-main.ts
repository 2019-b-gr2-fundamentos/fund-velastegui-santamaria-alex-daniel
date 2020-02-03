//Referencias
function main(){
    let uno = 1;
    let dos = uno; // IGUALAN EL VALOR
    let tres = dos; //IGUALAN EL VALOR
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);

    let arreglo = [1, 2, 3];
    let otroArreglo = [];
    let a = arreglo[0];
    let b = arreglo[1];
    console.log('arreglo', arreglo);
    console.log('a', a);
    console.log('b', b);
    //otroArreglo = arreglo; //IGUALAN DIRECCIONES DE MEMORIA  
    otroArreglo = [...arreglo]; //CLONA EL ARREGLO CON OTRA DIRECCION DE MEMORIA
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

    const adrian = {
        id: 1,
        nombre:'Adrian',
        sueldo: 1.12
    };
    const soloElNombre = {...adrian};//CLONA EL OBJETO CON OTRA DIRECCION DE MEMORIA
    const copUno = {...adrian};
    const copDos = {...adrian};
    const copTres = adrian;//IGUALAN DIRECCIONES DE MEMORIA
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    delete adrian.nombre //ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22
    //soloElNombre.edad = 22
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    console.log('copUno', copUno);
    console.log('copDos', copDos);
    console.log('copTres', copTres);
}
main();
/*en JS las primitivas hacen referencia al valoren los arrelos o en objetos hacen referencia ala direccion de memoria*/