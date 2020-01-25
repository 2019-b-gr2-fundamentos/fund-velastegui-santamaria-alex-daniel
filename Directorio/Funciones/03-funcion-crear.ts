import * as prompts from 'prompts';
import { opcionInterface } from '../Interfaces/opcion.interface';
import { pedirDatos } from './02-funcion-pedir-datos';
import { imprimirPeliculas } from './11-funcion-imprimir';
import { esperear } from './09-funcion-await';
export async function crearDirectorio()
{
    console.log("\nEmpecemos!!\n");
    const peliculasInicialPregunta =
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'¿Cuantas peliculas quieres añadir para empezar?',
        validate: value => value < 0? `Debe ser un numero mayor a 0.`:true
    }
    const peliculasInicial:opcionInterface = await prompts(peliculasInicialPregunta);
    const cantidadDePeliculas = peliculasInicial.numeroDeOpcion;
    const directorio = [];

    for(let i = 0;i <cantidadDePeliculas ;i ++)
    {
        directorio[i] = await pedirDatos();
    }
    console.log("\nEl directorio creado es:\n");
    await imprimirPeliculas(directorio);
    await esperear(); 
    return directorio;
    
}