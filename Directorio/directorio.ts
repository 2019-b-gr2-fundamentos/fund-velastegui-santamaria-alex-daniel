import { funcionOpcion } from './01-funcion-opcion';

async function main()
{
    console.log("\tBienvenido al catalogo de peliculas");
    console.log("1.Crear un directorio");
    console.log("2.Editar el directorio");
    console.log("3.Eliminar una pelicula");
    console.log("4.Agregar una pelicula");
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1: 
        
        break;
        case 2: break;
        case 3: break;
        case 4: break;
    }

}
main();
