using System;

namespace Directorio_de_Peliculas
{
    class Ejercicio02
    {
        static string[] Agregar(string[] peliculas)
        {
            Console.Write("\nIngrese el nombre de la pelicula que va a añadir: ");
            string nuevaPelicula = Console.ReadLine();
            string[] peliculas2 = new string [peliculas.Length+ 1 ];

            for(int i = 0; i < peliculas.Length; i++)
            {
                peliculas2[i] = peliculas[i];
            }

            peliculas2[peliculas.Length] = nuevaPelicula;

            Console.WriteLine("\nEl nuevo directorio es:\n");

            for(int i = 0, j = 1; i < peliculas2.Length; i++,j++)
            {
                Console.WriteLine(j+". "+peliculas2[i]);
            }

            return peliculas2;
        }
        static string[] Eliminar(string[] peliculas)
        {
            Console.Write("\nIngrese la pelicula que desea eliminar: ");
            string peliculaEliminada = Console.ReadLine();
            string[] peliculas2 = new string [peliculas.Length -1];

            for(int i = 0; i < peliculas.Length; i++)
            {
                if(peliculas[i] != peliculaEliminada)
                {
                    if(i < peliculas2.Length)
                    {
                        peliculas2[i] = peliculas[i];
                    }else
                    {
                        peliculas2[i-1] = peliculas[i];
                    }
                }else
                {
                    //Comparando que el elemento a eliminar no sea el ultimo del vector
                    if(peliculas[peliculas.Length-1] != peliculaEliminada)
                    {
                    do
                    {
                        i++;
                        if(peliculas[i] != peliculaEliminada)
                        {
                           
                            peliculas2[i-1] = peliculas[i];
                           
                        }
                    }while(i < peliculas2.Length);
                }
                }
            }

            Console.WriteLine("\nEl nuevo directorio es:\n");

            for(int i = 0, j = 1; i < peliculas2.Length; i++,j++)
            {
                Console.WriteLine(j+". "+peliculas2[i]);
            }

            return peliculas2;
        }

        static string[] Editar(string[] peliculas)
        {
            Console.Write("\nCual pelicula desea editar: ");
            string editar = Console.ReadLine();

            for(int i = 0; i < peliculas.Length; i++)
            {
                if(peliculas[i] == editar)
                {
                    Console.Write("\nIngrese la nueva pelicula: ");
                    string nuevaPelicula = Console.ReadLine();
                    peliculas[i] = nuevaPelicula;
                }
            }

            Console.WriteLine("\nEl nuevo directorio es:\n");

            for(int i = 0, j = 1; i < peliculas.Length; i++,j++)
            {
                Console.WriteLine(j+". "+peliculas[i]);
            }

            return peliculas;
        }

        static void Menu(string[] peliculas)
        {
            Console.WriteLine("\nQue deseas relaizar ahora con tu directorio de peliculas?\n");
            Console.WriteLine("1. Agregar pelicula");
            Console.WriteLine("2. Eliminar pelicula");
            Console.WriteLine("3. Ver el directorio");
            Console.WriteLine("4. Editar");
            Console.WriteLine("5. Salir\n");
            Console.Write("Eliga una opcion: ");
            string opcion = Console.ReadLine();
            bool esAgregar = opcion == "Agregar pelicula" || opcion == "agregar pelicula" || opcion == "1. Agregar pelicula" || opcion == "1.Agregar pelicula" || opcion == "1";
            bool esEliminar = opcion == "Eliminar pelicula" || opcion == "eliminar pelicula" || opcion == "2. Eliminar pelicula" || opcion == "2.Eliminar pelicula" || opcion == "2";
            bool esVer = opcion == "Ver el directorio" || opcion == "ver el directorio" || opcion == "3. opcion == er el directorio" || opcion == "3.Ver el directorio" || opcion == "3";
            bool esEditar = opcion == "Editar" || opcion == "editar" || opcion == "4. Editar" || opcion == "4.Editar" || opcion == "4";
            bool esSalir = opcion == "Salir" || opcion == "salir" || opcion == "5. Salir" || opcion == "5.Salir" || opcion == "5";
            bool ok = esAgregar || esEliminar || esVer || esEditar;
            if(ok)
            {
                if(esAgregar)
                {
                    peliculas = Agregar(peliculas);
                    Console.Write("\nPresione ENTER para continuar...");
                    Console.ReadKey();
                    Menu(peliculas);
                }else
                {
                    if(esEliminar)
                    {
                        peliculas = Eliminar(peliculas);
                        Console.Write("\nPresione ENTER para continuar...");
                        Console.ReadKey();
                        Menu(peliculas);
                    }else
                    {
                        if(esVer)
                        {
                            Console.Write("\nEl directorio actual es:\n");
                          for(int i = 0, j = 1; i < peliculas.Length; i++,j++)
                            {
                                Console.WriteLine(j+". "+peliculas[i]);
                            }
                            Console.Write("\nPresione ENTER para continuar...");
                            Console.ReadKey();
                            Menu(peliculas);
                        }else
                        {
                            peliculas = Editar(peliculas);
                            Console.Write("\nPresione ENTER para continuar...");
                            Console.ReadKey();
                            Menu(peliculas);
                        }
                    }
                }
            }else 
            {
                if(esSalir)
                {
                    Console.WriteLine("\nGracias por usar nuestros servivios.\n");
                }else
                {
                    Console.WriteLine("Asegurese de que la opcion que escogio sea correcta.\n");
                    Menu(peliculas);
                }
            }
        }
        static void Main(string[] args)
        {
            Console.Write("Empecemos! Cuantas peliculas deseas agregar ahora: ");
            int tamanio = int.Parse(Console.ReadLine());
            string[] peliculas = new string[tamanio];
            for(int i = 0, j = 1; i < tamanio; i++,j++)
            {
                Console.Write($"Ingrese la pelicula numero {j}: ");
                peliculas[i] = Console.ReadLine();
            }
            Menu(peliculas);
        }
    }
}