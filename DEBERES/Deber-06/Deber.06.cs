using System;

namespace Deber_06
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese el numero de deberes que tiene: ");
            var deberesString = Console.ReadLine();
            var deberes = int.Parse(deberesString);
            var contador = 1;
            var analisisSocioeconomico = 0;
            var algebra = 0;
            var compiladores = 0;
            var fundamentosDeProgramacion = 0;
            var calculo = 0;
            var fisica = 0;
            var ingles = 0;

            do{
                if((contador%13) == 0){
                    ingles ++;
                        }else{
                            if((contador%11) == 0){
                                fisica ++;
                                    }else{
                                        if((contador%7) == 0){
                                            calculo ++;
                                                }else{
                                                    if((contador%5) == 0){
                                                        fundamentosDeProgramacion ++;
                                                            }else{
                                                                if((contador%3) == 0){
                                                                    compiladores ++;
                                                                    }else{
                                                                        if((contador%2) == 0){
                                                                            algebra ++;
                                                                                }else{
                                                                                    analisisSocioeconomico ++;
                        }
                    }
                }
            }
        }
    }
    contador ++;    
}while(contador<=deberes);
Console.WriteLine($"Para {deberes-1} deberes se tendran que hacer el siguiente numero de deberes por materia:");
Console.WriteLine($"Analisis Socioeconomico: {analisisSocioeconomico}");
Console.WriteLine($"Algebra: {algebra}");
Console.WriteLine($"Compiladores: {compiladores}");
Console.WriteLine($"Fundamentos de la programacion: {fundamentosDeProgramacion}");
Console.WriteLine($"Calculo: {calculo}");
Console.WriteLine($"Fisica: {fisica}");
Console.WriteLine($"Ingles: {ingles}");
        }
    }
}
