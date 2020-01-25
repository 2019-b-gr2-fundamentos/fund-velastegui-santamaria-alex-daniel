import { menu } from "./08-funcion-menu";
import { crearDirectorio } from "./03-funcion-crear";

async function main()
{
    console.log("\n\tBIENVENIDO A SU DIRECTORIO DE PELICULAS");
    const directorio = await crearDirectorio();
    menu(directorio);
}
main();