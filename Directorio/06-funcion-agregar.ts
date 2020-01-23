import { pedirDatos } from './02-funcion-pedir-datos'

export async function agregarPelicula(longitud:number, directorio: any[])
{
    const peliculaNueva = await pedirDatos();
    directorio[longitud] = peliculaNueva;
    return directorio;
}