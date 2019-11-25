function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function calculadora() {
    var operacionString = prompt('Seleccione el numero de operacion a realizar: ,"1.Suma","2.Resta","3.Multiplicacion", "4.Division","5.Terminar"');
    var esSuma = operacionString == 'Suma' || operacionString == '1.Suma' || operacionString == '1';
    var esResta = operacionString == 'Resta' || operacionString == '2.Resta' || operacionString == '2';
    var esMultiplicacion = operacionString == 'Multiplicacion' || operacionString == '3.Multiplicacion' || operacionString == '3';
    var esDivision = operacionString == 'Division' || operacionString == '4.Division' || operacionString == '4';
    var fin = operacionString == 'Terminar' || operacionString == '5.Terminar' || operacionString == '5';
    var estaValida = esDivision || esMultiplicacion || esResta || esSuma;
    var resultado = 0;
    if (estaValida) {
        var numUno = +prompt('Ingrese el primer numero');
        var numDos = +prompt('Ingrese el segundo numero');
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        else {
            if (esResta) {
                resultado = restar(numUno, numDos);
            }
            else {
                if (esMultiplicacion) {
                    resultado = multiplicar(numUno, numUno);
                }
                else {
                    if (esDivision) {
                        resultado = dividir(numUno, numDos);
                    }
                }
            }
        }
        console.log('El resultado es: ', resultado);
        calculadora();
    }else{
        if(fin){
            console.log("Gracias por usar nuestra calculadora");
        }else{
            calculadora();
        }
    }
}
function main() {
    calculadora();
}

