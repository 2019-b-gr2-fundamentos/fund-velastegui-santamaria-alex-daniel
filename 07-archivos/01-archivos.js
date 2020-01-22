"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
function main() {
    var textoLeido = _02_leer_archivo_1.leerArchivo();
    var nuevoContenido = 'TENGO SUEÑO \n' + textoLeido;
    _03_escribir_archivo_1.escribirArchivo(nuevoContenido);
    var textoNuevoLeido = _02_leer_archivo_1.leerArchivo();
    console.log(textoNuevoLeido);
}
main();
