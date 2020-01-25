import { funcionOpcion } from "./01-funcion-opcion";
import { agregarPelicula } from "./06-funcion-agregar";
import { esperear } from "./09-funcion-await";
import { tablaInterface } from "../Interfaces/table.interface";
import { realizarTabla } from "./10-funcion-tabla";
import { imprimirPeliculas } from "./11-funcion-imprimir";
import { buscarPelicula } from "./04-funcion-buscar";

export async function menu(directorio: any[])
{
    console.log("\nESCOGA UNA LA ACCION QUE DESEA REALIZAR\n");
    console.log("1.Buscar en el directorio");
    console.log("2.Editar el directorio");
    console.log("3.Eliminar una pelicula");
    console.log("4.Agregar una pelicula");
    console.log("5.Salir\n");
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1: 
            buscarPelicula(directorio);
            await esperear();
            menu(directorio);
            break;
        case 2: break;
        case 3: break;
        case 4:
            directorio = await agregarPelicula(directorio);
            const tablaPeliculasAgregar:tablaInterface[] = await realizarTabla(directorio);  
            console.log("\nLas peliculas actuales son:\n");
            await imprimirPeliculas(directorio)            
            await esperear(); 
            menu(directorio);
            break;
        default: 
            console.log("\nHASTA LUEGO!!");
            break;
    }
}