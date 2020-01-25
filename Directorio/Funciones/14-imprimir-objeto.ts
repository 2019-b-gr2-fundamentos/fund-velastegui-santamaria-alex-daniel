import { peliculaInterface } from '../Interfaces/peliculas.interface';

export async function imprimirObjeto(pelicula: peliculaInterface)
{
    console.log('Nombre:\t\t', pelicula.nombrePelicula);
    console.log('Duracion:\t', pelicula.duracionPelicula);
    console.log('Genero:\t\t',pelicula.generoPelicula);
    console.log('Director:\t',pelicula.directorPelicula);
    console.log('Protagonista:\t',pelicula.protagonistaPelicula);
}