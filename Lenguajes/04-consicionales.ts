//04-condicionales.ts
const casado = true;
if(casado == true){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}

if(casado == false){ //(Expresion => Boolean)
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}

if(casado != true){
    console.log("No estoy casado");
}else{
    console.log("SI estoy casado");
}

if(casado != false){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}

const tengoMosa = false;
const estaCasado = casado == true; // Expresión
const casadoYMosero = casado == true && tengoMosa == true;

if(casadoYMosero){
    console.log("Casado y mosero");
}else{
    console.log("O casado o mosero o nada");
}

//TRUTY y FASLY
if(0){
    console.log("TRUTY")
}else{
    console.log("FALSY")
}

//SWITCH
const calculo = "sumar";
switch(calculo){
case "sumar":
     break;
case "restar":
        break;
case "dividir":
        break;
default:
}


const edadString = prompt("Ingrese la edad");
const edad = Number(edadString)
if(edad>=0 && edad<=6){
    console.log("Guagua")
}else{
    if(edad>6 && edad<=18){
        console.log("Guambra")
    }else{
        if(edad>18 && edad<=65){
            console.log("Longo")
        }else{
            if(edad>65){
                console.log("Ruco")
            }else{
                console.log("Ingrese bien su edad")
            }
        }
    }
}





// || -> or -> pipes
// && -> and -> 


/*apago la primera alarma me hago bolita y lloro hasta la segunda alarma y me levanto
celularDescargado = true
celularDañado = true
amaneceMuerto = true
estaActivadaLaAlarma != true
estaEnModoSilencio = true
seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaActivadaLaAlarma != true || estaEnModoSilencio == true 
Si el celular esta descargado o esta dañado o amanece muerto o no esta activada la alarma o esta en modo silencio entonces Se atraso a clases, si no se pone a llorar
*/
/*Elegimos una opareacion a realizar 
Si elegimos suma enotnces n1 + n2 e imprimir el resultado
si elegimos resta entonces n1 - n2 e imprimir el reultado
Si elegimos multiplicacion entonces n1 * n2 e imprimir el resultado 
Si elegimos division entonces n1 / n2 e imprimir el resultado
Si elegimos fuerza electrica entonces ((9*10^9) * n1 * n2) / n3 e imprimir el resultado*/