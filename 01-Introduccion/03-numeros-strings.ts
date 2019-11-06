const numeroUno= 1;  // camelCase
const numeroDos= 2;
let resultado = 0;

//SUMA  
resultado=  1+2
//RESTAR  
resultado=  1-2
//MULTIPLICAR  
resultado=  1*2
//DIVIDIR  
resultado=  1/2
//EXPONENCIAL  
resultado=  1^2
//MOD  
resultado=  4%2 // -> RESIDUO

console.log("pera"+2);





//NUMEROUNO     -> TODO MAYUSCULA (SEPARACION NO)
//NUMERO_UNO    -> mayusculas guion bajo
//NumeroUno     -> primera letra de cada palabra con mayusculas
//numerouno

//STRINGS

const mensaje = "\"Hola Mundo\"";
const saludo = "\"Adios Mundo\"";
//console.log(mensaje+"222\r\r\r"+saludo);

//template strings
//const edad = 30;

const saludoEdad = `Mi edad es: ${edad}`;

console.log(saludoEdad)

const saludoCompleto = `${mensaje}\n${saludo}`
console.log(saludoCompleto)

//Contamos los elementos

const nombreLongitud = "Vicente Adrian";
console.log(nombreLongitud.length);
console.log(nombreLongitud.trim());
console.log(nombreLongitud.toLocaleLowerCase());
console.log(nombreLongitud.toLocaleUpperCase());
console.log(nombreLongitud.replace("e","o"));
console.log(nombreLongitud.replace("Vicente",""));
console.log(nombreLongitud);
console.log(saludoCompleto.replace("\n",""));
console.log(saludoCompleto.search("x")); //-1
console.log(nombreLongitud.search("Adrian")); 
console.log(nombreLongitud.slice(0,7));
console.log(nombreLongitud.indexOf("e")); // search
console.log(nombreLongitud.indexOf("z")); //-1
console.log(nombreLongitud.includes(" ")); // bool
console.log(nombreLongitud.includes("z")); // bool
console.log(nombreLongitud.endsWith("z"));
console.log(nombreLongitud.startsWith("V"));
console.log(nombreLongitud.substring(0,7)); //slice





