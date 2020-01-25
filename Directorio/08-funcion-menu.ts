import { funcionOpcion } from "./01-funcion-opcion";
import { crearDirectorio } from "./03-funcion-crear";
import { agregarPelicula } from "./06-funcion-agregar";
import { esperear } from "./09-funcion-await";

export async function menu(directorio: any[])
{
    console.log("\n\nESCOGA UNA LA ACCION QUE DESEA REALIZAR\n");
    console.log("1.Buscar en el directorio\n");
    console.log("2.Editar el directorio\n");
    console.log("3.Eliminar una pelicula\n");
    console.log("4.Agregar una pelicula\n");
    console.log("5.Salir\n");
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1: 

        break;
        case 2: break;
        case 3: break;
        case 4:
            directorio = await agregarPelicula(directorio);
            console.log(directorio); 
            console.log("El nuevo directorio es:\n", directorio);
            await esperear(); 
            menu(directorio);
        break;
        default: 
        console.log("\nHASTA LUEGO!!");
        break;
    }
}