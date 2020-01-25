import * as prompts from 'prompts';
import { peliculaInterface } from "../Interfaces/peliculas.interface";

export async function buscarPeliculaPorNombre(directorio: peliculaInterface[])
{
    const peliculaABuscar = await prompts
    (
        {
            type:'text',
            name:'nombre',
            message:"Ingresa el nombre de la pelicula que busca:",
        }
    );
    const peliculaEncontrada = directorio.find
    (
        function(valorActual)
        {
            return valorActual.nombrePelicula == peliculaABuscar.nombre;
        }
    )
    return peliculaEncontrada;
}