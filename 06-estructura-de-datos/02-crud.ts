// 02-crud.ts  create read update delete
//En JavaScripts se importaria asi const prompts = requiere('prompts')

/*PARADIGMAS DE PROGRAMACION

Sincrono vs. Asincrono*/

import * as prompts from 'prompts';

function main()
{
    obtenerDatosAnimalPerrito();
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

main();