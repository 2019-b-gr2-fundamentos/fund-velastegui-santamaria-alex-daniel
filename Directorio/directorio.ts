import { menu } from "./Funciones/08-funcion-menu";
import { crearDirectorio } from "./Funciones/03-funcion-crear";
import { leerArchivo } from "../07-archivos/02-leer-archivo";
import { escribirArchivo } from "../07-archivos/03-escribir-archivo";

async function main()
{
    let directorio = [];
    try {
        directorio = JSON.parse(leerArchivo('./base-de-datos.txt'))
        menu(directorio);
    } catch (error) {
        console.log("\n\tBIENVENIDO A SU DIRECTORIO DE PELICULAS");
        directorio = await crearDirectorio();
        const directorioTexto = JSON.stringify(directorio);
        escribirArchivo('./base-de-datos.txt', directorioTexto); 
        menu(directorio);
    }
}
main();
