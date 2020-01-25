import * as prompts from 'prompts';
import { opcionInterface } from '../Interfaces/opcion.interface';
import { peliculaInterface } from '../Interfaces/peliculas.interface';
import { realizarTabla } from './10-funcion-tabla';
import { tablaInterface } from '../Interfaces/table.interface';
import { buscarPeliculaPorIndice } from './12-buscar-por-indice';
import { buscarPeliculaPorNombre } from './13-buscar-por-nombre';
import { imprimirObjeto } from './14-imprimir-objeto';

export async function buscarPelicula(directorio: peliculaInterface[])
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
    switch (numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarPeliculaPorIndice(tablaPeliculasBuscar);
            await imprimirObjeto(directorio[indiceEncontrado]);
            break;
        case 2:
            const peliculaEncontrada = await buscarPeliculaPorNombre(directorio);
            await imprimirObjeto(peliculaEncontrada);
            break;
    }
}