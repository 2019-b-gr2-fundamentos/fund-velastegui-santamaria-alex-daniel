import { pedirDatos } from './02-funcion-pedir-datos'

export async function agregarPelicula(directorio: any[])
{
    const peliculaNueva = await pedirDatos();
    directorio.push(peliculaNueva);
    return directorio;
}