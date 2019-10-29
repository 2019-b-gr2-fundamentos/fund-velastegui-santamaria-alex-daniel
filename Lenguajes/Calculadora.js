let operacion = prompt("Ingrese operacion a realizar");
const operacion01 = "suma" || "Suma" || "SUMA";
const operacion02 = "resta" || "Resta" || "RESTA";
const operacion03 = "multipicación" || "multiplicacion" || "Multiplicacion" || "Multiplicación" || "MULTIPLICACION"
const operacion04 = "division" || "división" || "División" || "Division" || "DIVISION";
const operacion05 = "Fuerza Eléctrica" || "fuerza eléctrica" || "Fuerza Electrica" || "fuerza electrica" || "FUERZA ELECTRICA";
const constanteElectrica = 9*10^9;
if (operacion01) {
    const numeroUnoString = prompt("Imgrse primer numero: ");
    const numeroDosString = prompt("Ingrese segundo numero: ");
    const numeroUno = Number(numeroUnoString);
    const numeroDos = Number(numeroDosString);
    const suma = numeroUno + numeroDos;
    console.log("El resultado de la suma es: ",suma);
}
else {
    if(operacion02){
    const numeroUnoString = prompt("Imgrse primer numero: ");
    const numeroDosString = prompt("Ingrese segundo numero: ");
    const numeroUno = Number(numeroUnoString);
    const numeroDos = Number(numeroDosString);
    const resta = numeroUno - numeroDos;
    console.log("El resultado de la resta es: ",resta);
    }else{
        if(operacion03){
        const numeroUnoString = prompt("Imgrse primer numero: ");
        const numeroDosString = prompt("Ingrese segundo numero: ");
        const numeroUno = Number(numeroUnoString);
        const numeroDos = Number(numeroDosString);
        const multiplicacion = numeroUno * numeroDos;
        console.log("El resultado de la multiplicacion es: ",multiplicacion);
        }else{
            if(operacion04){
            const numeroUnoString = prompt("Ingrse primer numero: ");
            const numeroDosString = prompt("Ingrese segundo numero: ");
            const numeroUno = Number(numeroUnoString);
            const numeroDos = Number(numeroDosString);
            const division = numeroUno / numeroDos;
            console.log("El resultado de la division es: ",division);
            }else{
                if(operacion05){
                const cargaUnoString = prompt("Ingrse valor de la primera carga: ");
                const cargaDosString = prompt("Ingrese valor de la segunda carga: ");
                const distanciaString = prompt("Ingrese valor de la distancia entre cargas: ");
                const cargaUno = Number(cargaUnoString);
                const cargaDos = Number(cargaDosString);
                const distancia = Number(distanciaString);
                const fuerzaElectrica = (constanteElectrica*cargaDos*cargaUno)/(distancia^2);
                console.log("La fuerza electrica es: ",fuerzaElectrica);
                }else{
                    console.log("No podemos calcular la operacion requerida.")
                }
            }
        }
    }
}