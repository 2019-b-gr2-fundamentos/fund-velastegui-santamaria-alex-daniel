"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(contenido) {
    fs.writeFileSync('./ejemplo.txt', 'NUEVO CONTENIDO: ' + contenido, 'utf-8');
}
exports.escribirArchivo = escribirArchivo;
