import { peliculaInterface } from "../Interfaces/peliculas.interface";
import { tablaInterface } from "../Interfaces/table.interface";

export async function realizarTabla(directorio: peliculaInterface[])
{
    const longitud = directorio.length;
    const tablaPeliculas:tablaInterface[] = []
    for(let i = 1;i <= longitud; i ++)
    {
        tablaPeliculas[i-1] =
        {
            id: i,
            nombre: directorio[i-1].nombrePelicula
        }
    }
    return tablaPeliculas;
}