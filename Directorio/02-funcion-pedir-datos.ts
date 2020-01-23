import { peliculaInterface } from "./Interfaces/peliculas.interface";
import * as prompts from 'prompts';

export async function pedirDatos()
{
    const peliculas =
    [
        {
            type:'text',
            name:'nombrePelicula',
            message:'\nIngresar el nombre de la pelicula:'
        },
        {
            type:'text',
            name:'generoPelicula',
            message:'Ingresar el genero de la pelicula:'
        },
        {
            type:'number',
            name:'duracionPelicula',
            message:'Ingresar la duracion de la pelicula:'
        },
        {
            type:'text',
            name:'directorPelicula',
            message:'Ingresar el director de la pelicula:'
        },
        {
            type:'text',
            name:'protagonistaPelicula',
            message:'¿Cual es el protagonista de la pelicula?'
        }
    ]
    const respuestasPelicula:peliculaInterface = await prompts(peliculas);
    return respuestasPelicula;
}