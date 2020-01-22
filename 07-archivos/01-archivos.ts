import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";

function main()
{
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO SUEÑO \n' + textoLeido;
    escribirArchivo('./ejemplo.txt',nuevoContenido);
    const textoNuevoLeido = leerArchivo('./ejemplo.txt');
    console.log(textoNuevoLeido);
}
main();