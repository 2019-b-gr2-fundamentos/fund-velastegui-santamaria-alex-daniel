let operacion = prompt("Ingrese operacion a realizar");
const suma = "suma";
const resta = "resta";
const multiplicacion = "multiplicacion";
const division = "division";
const fuerzaElectrica = "fuerza electrica"
const constanteElectrica = 9*10^9;
if (operacion == suma) {
    const numeroUnoString = prompt("Imgrse primer numero: ");
    const numeroDosString = prompt("Ingrese segundo numero: ");
    const numeroUno = Number(numeroUnoString);
    const numeroDos = Number(numeroDosString);
    console.log("El resultado de la suma es: ",numeroUno + numeroDos);
}
else {
    if(operacion == resta){
    const numeroUnoString = prompt("Imgrse primer numero: ");
    const numeroDosString = prompt("Ingrese segundo numero: ");
    const numeroUno = Number(numeroUnoString);
    const numeroDos = Number(numeroDosString);
    console.log("El resultado de la resta es: ",numeroUno - numeroDos);
    }else{
        if(operacion == multiplicacion){
        const numeroUnoString = prompt("Imgrse primer numero: ");
        const numeroDosString = prompt("Ingrese segundo numero: ");
        const numeroUno = Number(numeroUnoString);
        const numeroDos = Number(numeroDosString);
        console.log("El resultado de la multiplicacion es: ",numeroUno * numeroDos);
        }else{
            if(operacion == division){
            const numeroUnoString = prompt("Ingrse primer numero: ");
            const numeroDosString = prompt("Ingrese segundo numero: ");
            const numeroUno = Number(numeroUnoString);
            const numeroDos = Number(numeroDosString);
            console.log("El resultado de la division es: ",numeroUno / numeroDos);
            }else{
                if(operacion == fuerzaElectrica){
                const cargaUnoString = prompt("Ingrse valor de la primera carga: ");
                const cargaDosString = prompt("Ingrese valor de la segunda carga: ");
                const distanciaString = prompt("Ingrese valor de la distancia entre cargas: ");
                const cargaUno = Number(cargaUnoString);
                const cargaDos = Number(cargaDosString);
                const distancia = Number(distanciaString);
                console.log("La fuerza electrica es: ",(constanteElectrica*cargaDos*cargaUno)/(distancia^2));
                }else{
                    console.log("No podemos calcular la operacion requerida.")
                }
            }
        }
    }
}