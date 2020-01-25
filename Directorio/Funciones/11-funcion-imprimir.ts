import { peliculaInterface } from "../Interfaces/peliculas.interface";

export async function imprimirPeliculas(directorio:peliculaInterface[])
{
    const longitud = directorio.length;
    console.log('Posicion\t Nombre');
    for(let i = 1;i <= longitud; i ++)
    {
        console.log("   " + i + ".\t\t", directorio[i-1].nombrePelicula + ".");
    }
}