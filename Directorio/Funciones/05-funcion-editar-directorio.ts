import * as prompts from 'prompts';
import { peliculaInterface } from "../Interfaces/peliculas.interface";
import { tablaInterface } from '../Interfaces/table.interface';
import { realizarTabla } from './10-funcion-tabla';
import { opcionInterface } from '../Interfaces/opcion.interface';
import { buscarPeliculaPorIndice } from './12-buscar-por-indice';
import { buscarPeliculaPorNombre } from './13-buscar-por-nombre';
import { editarPelicula } from './15-funcion-editar-pelicula';

export async function editarDirectorio (directorio:peliculaInterface[])
{
    const tablaPeliculasBuscar:tablaInterface[] = await realizarTabla(directorio);  
    console.log('\nDesea buscar por:\n');
    console.log('1.Posicion de pelicula.');
    console.log('2.Nombre de pelicula.\n');
    const opcion = 
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'Escoge una opcion:',
        validate: value => (value < 0 || value > 2) ? `ESCOGER SOLO DE ENTRE LAS OPCIONES QUE APARECEN EN PANTALLA`:true
    }
    const opcionRespuesta:opcionInterface = await prompts(opcion);
    const numeroDeOpcion = opcionRespuesta.numeroDeOpcion;
    switch(numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarPeliculaPorIndice(tablaPeliculasBuscar);
            directorio[indiceEncontrado] = await editarPelicula(directorio[indiceEncontrado])
            break;
        case 2:
            const peliculaEncontrada = await buscarPeliculaPorNombre(directorio);
            const indicePeliculaEncontrada = directorio.findIndex
            (
                function(valorActual, indice)
                {
                    if(valorActual.nombrePelicula == peliculaEncontrada.nombrePelicula)
                    {
                        return indice;
                    }
                }
            );
            directorio[indicePeliculaEncontrada] = await editarPelicula(directorio[indicePeliculaEncontrada]);
            break;
    }
    return directorio;
}