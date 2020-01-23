import { funcionOpcion } from "./01-funcion-opcion";
import { crearDirectorio } from "./03-funcion-crear";
import { agregarPelicula } from "./06-funcion-agregar";

export async function menu(directorio: any[])
{
    console.log("\n\n1.Crear un directorio\n");
    console.log("2.Editar el directorio\n");
    console.log("3.Eliminar una pelicula\n");
    console.log("4.Agregar una pelicula\n");
    console.log("5.Salir\n");
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1: 
        directorio = await crearDirectorio();
        console.log("El directorio actual es:\n", directorio);
        menu(directorio);
        break;
        case 2: break;
        case 3: break;
        case 4:
        const longitudNueva = directorio.length;
        directorio = await agregarPelicula(longitudNueva, directorio);
        console.log("El nuevo directorio es:\n", directorio); 
        menu(directorio);
        break;
        default: 
        console.log("Hasta Luego!!");
        break;
    }
}