import {AnimalPerrito} from './interfaces/animal-perrito.interface'
import { Duenio } from './interfaces/duenio.interface';

/*
DATOS PRIMITIVOS
bool
string
null
number
DATOS NO PRIMITIVOS
Persona
Animal
Fecha de nacimiento


CASI EN TODOS LOS LENGUAJES
struct  --> Estructura de datos
Clase   --> Estructora de datos pero ademas tiene metodos.
*/

//Estructura de datos en lenguaje NO TIPADO                             
const edad = 20;
const poliPerro =
{
    nombreCientifico: 'canis lupus familiaris',
    edadActual: 10, //variables
    nombre: 'Grandote',
    clan: 'Poliperro',
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true,
}
console.log(poliPerro.nombreCientifico);



const poliPerroAmarillo: AnimalPerrito =
{
    nombreCientifico: 'canis lupus familiaris',
    edadActual: 4,
    nombre: 'Amarillo',
    clan: 'Poliperro',
    //hijos: null,
    perritas: [],
    vacunado: false,
}

const duenioPoliPerroAmarillo: Duenio =
{
    nombres: "Benito",
    apellidos: "Camelo",
    fechaNacimiento: 2,
    mascotasPerros: [ poliPerroAmarillo ],
}

poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
console.log(poliPerroAmarillo.duenio.nombres);

