"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
function pedirDatos() {
    return __awaiter(this, void 0, void 0, function () {
        var peliculas, respuestasPelicula;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    peliculas = [
                        {
                            type: 'text',
                            name: 'nombrePelicula',
                            message: 'Ingresar el nombre de la pelicula:'
                        },
                        {
                            type: 'text',
                            name: 'generoPelicula',
                            message: 'Ingresar el genero de la pelicula:'
                        },
                        {
                            type: 'number',
                            name: 'duracionPelicula',
                            message: 'Ingresar la duracion de la pelicula:'
                        },
                        {
                            type: 'text',
                            name: 'directorPelicula',
                            message: 'Ingresar el director de la pelicula:'
                        },
                        {
                            type: 'text',
                            name: 'protagonistaPelicula',
                            message: '¿Cual es el protagonista de la pelicula?'
                        }
                    ];
                    return [4 /*yield*/, prompts(peliculas)];
                case 1:
                    respuestasPelicula = _a.sent();
                    console.log(respuestasPelicula);
                    return [2 /*return*/];
            }
        });
    });
}
function funcionOpcion() {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, opcionRespuesta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opcion = {
                        type: 'number',
                        name: 'numeroDeOpcion',
                        message: '¿Que desea realizar?',
                        validate: function (value) { return (value < 0 || value > 4) ? "ESCOGER SOLO DE ENTRE LAS OPCIONES QUE APARECEN EN PANTALLA" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 1:
                    opcionRespuesta = _a.sent();
                    return [2 /*return*/, opcionRespuesta.numeroDeOpcion];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var opcion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\tBienvenido al catalogo de peliculas");
                    console.log("1.Crear un directorio");
                    console.log("2.Editar el directorio");
                    console.log("3.Eliminar una pelicula");
                    console.log("4.Agregar una pelicula");
                    return [4 /*yield*/, funcionOpcion()];
                case 1:
                    opcion = _a.sent();
                    switch (opcion) {
                        case 1:
                            pedirDatos();
                            break;
                        case 2: break;
                        case 3: break;
                        case 4: break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
