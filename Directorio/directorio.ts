import { menu } from "./Funciones/08-funcion-menu";
import { crearDirectorio } from "./Funciones/03-funcion-crear";

async function main()
{
    console.log("\n\tBIENVENIDO A SU DIRECTORIO DE PELICULAS");
    const directorio = await crearDirectorio();
    await menu(directorio);
}
main();