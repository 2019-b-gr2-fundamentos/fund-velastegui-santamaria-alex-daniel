//04-condicionales.ts
var casado = true;
if (casado == true) {
    console.log("Si estoy casado");
}
else {
    console.log("No estoy casado");
}
if (casado == false) {
    console.log("No estoy casado");
}
else {
    console.log("Si estoy casado");
}
if (casado != true) {
    console.log("No estoy casado");
}
else {
    console.log("SI estoy casado");
}
if (casado != false) {
    console.log("Si estoy casado");
}
else {
    console.log("No estoy casado");
}
var tengoMosa = false;
var estaCasado = casado == true; // Expresión
var casadoYMosero = casado == true && tengoMosa == true;
if (casadoYMosero) {
    console.log("Casado y mosero");
}
else {
    console.log("O casado o mosero o nada");
}
// || -> or -> pipes
// && -> and ->  
