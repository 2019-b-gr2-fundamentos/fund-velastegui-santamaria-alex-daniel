const  operacion1  =  prompt ( " Ingrese operacion a realizar " );
switch(operacion1){
    case "suma":
            const  numeroUnoString  =  prompt ( " Ingrese primer numero: " );
            const  numeroDosString  =  prompt ( " Ingrese segundo numero: " );
            const  numeroUno  =  Number (numeroUnoString);
            const  numeroDos  =  Number (numeroDosString);
            const  suma  = numeroUno + numeroDos;
            console.log ( " El resultado de la suma es: " , suma);
        break;
    case "resta":
            const  numeroTresString  =  prompt ( " Ingrese primer numero: " );
            const  numeroCuatroString  =  prompt ( " Ingrese segundo numero: " );
            const  numeroTres  =  Number (numeroTresString);
            const  numeroCuatro  =  Number (numeroCuatroString);
            const  resta  = numeroTres - numeroCuatro;
            console.log ( " El resultado de la resta es: " , resta);
        break;
    case "multiplicacion":
            const  numeroCincoString  =  prompt ( " Ingrese primer numero: " );
            const  numeroSeisString  =  prompt ( " Ingrese segundo numero: " );
            const  numeroCinco  =  Number (numeroCincoString);
            const  numeroSeis  =  Number (numeroSeisString);
            const  multiplicacion  = numeroCinco * numeroSeis;
            console.log ( " El resultado de la multiplicacion es: " , multiplicacion);
        break;
    case "division":
            const  numeroSieteString  =  prompt ( " Ingrese primer numero: " );
            const  numeroOchoString  =  prompt ( " Ingrese segundo numero: " );
            const  numeroSiete  =  Number (numeroSieteString);
            const  numeroOcho  =  Number (numeroOchoString);
            const  division  = numeroSiete / numeroOcho;
            console.log ( " El resultado de la division es: " , division);
        break;
    case "area de un trangulo":
            const baseString = prompt ("Ingrese la base del triangulo: ");
            const alturaString = prompt ("Ingrese la altura del triangulo: ");
            const base = Number(baseString);
            const altura = Number(alturaString);
            const area = (base*altura)/2;
            console.log ("El area del triangulo es: ", area)
        break;
    default:
            console.log("No sabemos calcular la operacion requerida");
    
}