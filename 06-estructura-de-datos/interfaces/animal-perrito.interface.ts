import {Duenio} from './duenio.interface'

export interface AnimalPerrito // interface -> (Struct) 
{
    nombreCientifico: string;
    edadActual?: number, //variables
    nombre: string;
    clan: string;
    //hijos: ,
    perritas?: string[];
    vacunado?: boolean;
    duenio?: Duenio;
}