const  operacion  =  prompt ( " Ingrese operacion a realizar " );
const  operacion01  =  "suma" ;
const  operacion02  =  "resta" ;
const  operacion03  =  "multipicación";
const  operacion04  =  "división";
const  operacion05  =  "area de un triangulo" ;
const  constanteElectrica =  9 * 10 ^ 9 ;
if (operacion == operacion01) {
    const  numeroUnoString  =  prompt ( " Ingrese primer numero: " );
    const  numeroDosString  =  prompt ( " Ingrese segundo numero: " );
    const  numeroUno  =  Number (numeroUnoString);
    const  numeroDos  =  Number (numeroDosString);
    const  suma  = numeroUno + numeroDos;
    console.log ( " El resultado de la suma es: " , suma);
}
else{
    if (operacion == operacion02) {
    const  numeroUnoString  =  prompt ( " Ingrese primer numero: " );
    const  numeroDosString  =  prompt ( " Ingrese segundo numero: " );
    const  numeroUno  =  Number (numeroUnoString);
    const  numeroDos  =  Number (numeroDosString);
    const  resta  = numeroUno - numeroDos;
    console.log ( " El resultado de la resta es: " , resta);
    }else{
        if (operacion == operacion03) {
        const  numeroUnoString  =  prompt ( " Ingrese primer numero: " );
        const  numeroDosString  =  prompt ( " Ingrese segundo numero: " );
        const  numeroUno  =  Number (numeroUnoString);
        const  numeroDos  =  Number (numeroDosString);
        const  multiplicacion  = numeroUno * numeroDos;
        console.log ( " El resultado de la multiplicacion es: " , multiplicacion);
        }else{
            if (operacion == operacion04) {
            const  numeroUnoString  =  prompt ( " Ingrese primer numero: " );
            const  numeroDosString  =  prompt ( " Ingrese segundo numero: " );
            const  numeroUno  =  Number (numeroUnoString);
            const  numeroDos  =  Number (numeroDosString);
            const  division  = numeroUno / numeroDos;
            console.log ( " El resultado de la division es: " , division);
            }else{
                if (operacion == operacion05) {
                    const baseString = prompt ("Ingrese la base del triangulo: ");
                    const alturaString = prompt ("Ingrese la altura del triangulo: ");
                    const base = Number(baseString);
                    const altura = Number(alturaString);
                    const area = (base*altura)/2;
                    console.log ("El area del triangulo es: ", area);
                }else{
                    console.log("No sabemos calcular la operacion requerida");
                }
            }
        }
    }
}
