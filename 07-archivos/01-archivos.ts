import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts'

async function main()
{
    let contador = 1;
    const contenidoArchivo = leerArchivo('./ejemplo.txt');
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    const arregloEstudiantes:Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas =
    [
        {
            type: 'text',
            name:'nombre',
            message:'Ingresa tu nombre:',
        }
    ];
    const respuestaEstudiante = await prompts(arregloPreguntas);

    const nuevoRegistro = 
    {
        id: contador,
        nombre: respuestaEstudiante.nombre
    };
    contador += 1;
    arregloEstudiantes.push(nuevoRegistro);
    const respuestaEstudianteDos = await prompts(arregloPreguntas);

    const nuevoRegistroDos = 
    {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador += 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    console.log("Cual usuario quieres editar");
    console.log(arregloEstudiantes);

    const idABuscar = await prompts
    (
        {
            type:'number',
            name:'id',
            message:"Ingresa el ID del registro a editar"
        }
    )

    /*const indiceEncontrado = arregloEstudiantes.findIndex
    (//return condicion 
        function(valorActual, indice, arreglo)
        {
            return valorActual.id == idABuscar.id;
        }
    )
    //console.log('Indice encontrado: ', indiceEncontrado);
    const nombreAEditar = await prompts 
    (
        {
            type:'text',
            name:'nombre',
            message:'Ingresa el nuevo nombre'
        }
    )
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);*/

    const buscar = await prompts
    (
        {
            type:'text',
            name:'nombre',
            message: 'Buscar por ID o por nombre'
        }
    );

    const estudianteEncontrado = arregloEstudiantes.find
    (
        function(valorActual)
        {
            return valorActual.nombre == buscar.nombre;
        }
    )
    console.log(estudianteEncontrado);
    
    
    
    
    /*const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO SUEÑO \n' + textoLeido;
    escribirArchivo('./ejemplo.txt',nuevoContenido);
    const textoNuevoLeido = leerArchivo('./ejemplo.txt');
    console.log(textoNuevoLeido);*/
}
main().then().catch();