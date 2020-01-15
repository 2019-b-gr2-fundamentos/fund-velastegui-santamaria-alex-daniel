// 02-crud.ts  create read update delete
//En JavaScripts se importaria asi const prompts = requiere('prompts')
/*PARADIGMAS DE PROGRAMACION

Sincrono vs. Asincrono*/
var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: '¿Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('datos', datos); // AQUI RECIBO LA EDAD
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: '¿Puedes darme tu nombre?'
        });
        console.log(promesaNombre);
        promesaNombre
            .then(function (datos) {
            console.log('datosNombre', datos); // AQUI RECIBO LA EDAD
        })
            .catch(function (error) {
            console.log('Error', error);
        });
    })
        .catch(function (error) {
        console.log('Error', error);
    });
}
main();
