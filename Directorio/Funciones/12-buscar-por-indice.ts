import * as prompts from 'prompts'
import { tablaInterface } from '../Interfaces/table.interface';

export async function buscarPeliculaPorIndice(tablaPeliculas: tablaInterface[])
{
    const idABuscar = await prompts
    (
        {
            type:'number',
            name:'id',
            message:"Ingresa la posicion de la pelicula que busca:",
            validate: value => (value < 0 || value > tablaPeliculas.length)? `No existe esa posicion de pelicula`:true
        }
    )
    const indiceEncontrado:number = tablaPeliculas.findIndex
    (
        function(valorActual, indice, arreglo)
        {
            return valorActual.id == idABuscar.id;
        }
    )
    return indiceEncontrado;
}