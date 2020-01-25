import * as prompts from 'prompts';
import { peliculaInterface } from "../Interfaces/peliculas.interface";
import { funcionOpcion } from './01-funcion-opcion';
import { imprimirObjeto } from './14-imprimir-objeto';

export async function editarPelicula(pelicula:peliculaInterface)
{
    console.log("\nDe la pelicula " + pelicula.nombrePelicula + "Que desea editar:\n");
    console.log('1.Nombre:\t', pelicula.nombrePelicula);
    console.log('2.Genero:\t',pelicula.generoPelicula);
    console.log('3.Director:\t',pelicula.directorPelicula);
    console.log('4.Protagonista:\t',pelicula.protagonistaPelicula);
    console.log('5.Duracion:\t', pelicula.duracionPelicula);
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1:
            const nuevoNombre = await prompts
            (
                {
                    type:'text',
                    name:'nuevoNombre',
                    message:'Ingrese el nuevo Nombre:'
                }
            );
            pelicula.nombrePelicula = nuevoNombre.nuevoNombre;
            break;
        case 2:
            const nuevoGenero = await prompts
            (
                {
                    type:'text',
                    name:'nuevoGenero',
                    message:'Ingrese el nuevo genero:'
                }
            );
            pelicula.generoPelicula = nuevoGenero.nuevoGenero;
            break; 
        case 3:
            const nuevoDirector = await prompts
            (
                {
                    type:'text',
                    name:'nuevoDirector',
                    message:'Ingrese el nuevo director:'
                }
            );
            pelicula.directorPelicula = nuevoDirector.nuevoDirector;
            break;
        case 4:
            const nuevoProtagonista = await prompts
            (
                {
                    type:'text',
                    name:'nuevoProtagonista',
                    message:'Ingrese el nuevo protagonista:'
                }
            );
            pelicula.protagonistaPelicula = nuevoProtagonista.nuevoProtagonista;
            break;
        default:
            const nuevaDuracion = await prompts
            (
                {
                    type:'text',
                    name:'nuevaDuracion',
                    message:'Ingrese la nueva duracion:'
                }
            );
            pelicula.duracionPelicula = nuevaDuracion.nuevaDuracion;
            break;
    }
    console.log("\nLa pelicula editada es:");
    await imprimirObjeto(pelicula);
    return pelicula;
}