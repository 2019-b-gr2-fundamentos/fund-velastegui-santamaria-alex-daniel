function sumar(numUno: number, numDos: number): number{
    return numUno + numDos;
}
function restar(numUno: number, numDos: number): number{
    return numUno - numDos;
}
function multiplicar(numUno: number, numDos: number): number{
    return numUno * numDos;
}
function dividir(numUno: number, numDos: number): number{
    return numUno / numDos;
}
function main(){
    calculadora();
}
function calculadora(){
    const operacionString :string = prompt('Seleccione el numero de operacion a realizar: ,"1.Suma","2.Resta","3.Multiplicacion", "4.Division","5.Salir"');
    const esSuma: boolean = operacionString == 'Suma' || operacionString == '1.Suma' || operacionString == '1';
    const esResta: boolean = operacionString == 'Resta' || operacionString == '2.Resta' || operacionString == '2';
    const esMultiplicacion: boolean = operacionString == 'Multiplicacion' || operacionString == '3.Multiplicacion' || operacionString == '3';
    const esDivision: boolean = operacionString == 'Division' || operacionString == '4.Division' || operacionString == '4'; 
        const terminar:boolean = operacionString == 'Salir' || operacionString == '5.Salir' || operacionString == '5';
    const estaValida:boolean = esDivision || esMultiplicacion || esResta || esSuma;
    let resultado = 0;
    if(estaValida){
        const numUno = +prompt('Ingrese el primer numero');
        const numDos = +prompt('Ingrese el segundo numero')
        if(esSuma){
            resultado = sumar(numUno,numDos);
        }else{
            if(esResta){
                resultado = restar(numUno,numDos);
            }else{
                if(esMultiplicacion){
                    resultado = multiplicar(numUno,numDos);
                }else{
                    if(esDivision){
                        resultado = dividir(numUno,numDos);
                    }
                }
            }
        }
        alert('El resultado es: ' + resultado);
        calculadora();
    }else{
        if(terminar){
            alert("Adios")
        }else{
            calculadora();
        }
    }
}