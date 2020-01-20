// 02-crud.ts  create read update delete
//En JavaScripts se importaria asi const prompts = requiere('prompts')

/*PARADIGMAS DE PROGRAMACION

Sincrono vs. Asincrono*/

import * as prompts from 'prompts';
import { respuestaEdad } from './interfaces/respuesta-edad.interface';
import { respuestaNombre } from './interfaces/respuesta-nombre.interface';
import { respuestaPreguntas } from './interfaces/respuesta-preguntas.interface';

function main()
{
    obtenerDatosAnimalPerritoSincono()
    .then()
    .catch();
}

function obtenerDatosAnimalPerrito()
{
    console.log('Inicio');

    const promesaEdad = prompts
    ({
        type: 'number',
        name: 'edad',
        message: '¿Puedes darme tu edad?'
    });
console.log(promesaEdad);
promesaEdad
    .then(
        (datos)=>{
            console.log('datos', datos); // AQUI RECIBO LA EDAD
            const promesaNombre = prompts
            ({
                type: 'text',
                name: 'nombre',
                message: '¿Puedes darme tu nombre?'
            });
        console.log(promesaNombre);
        promesaNombre
            .then(
                (datos)=>{
                    console.log('datosNombre', datos); // AQUI RECIBO LA EDAD
                }
            )
            .catch(
                (error)=>{
                    console.log('Error', error);
                }
            );
        }
    )
    .catch(
        (error)=>{
            console.log('Error', error);
        }
    );

}

 async function obtenerDatosAnimalPerritoSincono()
{
    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: '¿Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: '¿Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'cedula',
            message: '¿Puedes darme tu cedula?'
        }
    ]
    console.log('Inicio');

    /*const edad: respuestaEdad = await prompts
    ({
        type: 'number',
        name: 'edad',
        message: '¿Puedes darme tu edad?'
    });
    const nombre: respuestaNombre = await prompts
    ({
        type: 'text',
        name: 'nombre',
        message: '¿Puedes darme tu nombre?'
    });
    const cedula= await prompts
    ({
        type: 'text',
        name: 'cedula',
        message: '¿Puedes darme tu cedula?'
    });
    console.log('Edad: ', edad.edad);
    console.log('Nombre: ',nombre.nombre);*/
    const respuesta: respuestaPreguntas = await prompts(preguntas);
    console.log('Respuesta', respuesta);
    console.log("Fin");
}

main();