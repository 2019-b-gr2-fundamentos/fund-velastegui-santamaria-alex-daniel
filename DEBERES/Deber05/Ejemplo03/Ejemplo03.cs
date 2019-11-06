/*Este ejemplo usa tanto el switch como el if para dar a 
conocer las sanciones por los diferentes tipos de infracciones 
de transito */ 
using System;

namespace Ejemplo03
{
    class Deber05
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese el tipo de Infraccion del detenido");
            string infraccion = Console.ReadLine();
            switch(infraccion){
                case "conducir en estado de ebriedad":
                    Console.WriteLine("Ingrese los gramos de alcohol por litro de sangre del detenido");
                    var grados = float.Parse(Console.ReadLine());
                    if(grados > 0.3 && grados <= 0.8){
                        Console.WriteLine("Se aplicara la multa de un salario basico, la perdida de 5 puntos en la licencia de conducir y cinco dias de carcel");
                    }else{
                        if(grados > 0.8 && grados <= 1.2){
                            Console.WriteLine("Se aplicara la multa de dos salario basico, la perdida de 10 puntos en la licencia de conducir y quince dias de carcel");
                        }else{
                            if(grados > 1.2){
                                Console.WriteLine("Se aplicara la multa de tres salario basico, la perdida de la licencia de conducir y treinta dias de carcel");
                            }else{
                                Console.WriteLine("El nivel de alcohol esta dentro del permitido.");
                            }
                        }
                    }break;
                case "contravencion de primera clase":
                    Console.WriteLine("3 dias de carcel, multa de un salario basico y la perdida de 10 puntos en la licencia de conducir");
                    break;
                case "contravencion de segunda clase":
                    Console.WriteLine("Multa del 50% del salario basico y la perdida de 9 puntos en la licencia de conducir");
                    break;
                case "contravencion de tercera clase":
                    Console.WriteLine("Multa del 45% del salario basico y la perdida de 7.5 puntos en la licencia de conducir");
                    break;
                case "contravencion de cuarta clase":
                    Console.WriteLine("Multa del 35% del salario basico y la perdida de 6 puntos en la licencia de conducir");
                    break;
                case "contravencion de quinta clase":
                    Console.WriteLine("Multa del 15% del salario basico y la perdida de 4 puntos en la licencia de conducir");
                    break;
                case "contravencion de sexta clase":
                    Console.WriteLine("Multa del 10% del salario basico y la perdida de 3 puntos en la licencia de conducir");
                    break;
                case "contravencion de septima clase":
                    Console.WriteLine("Multa del 5% del salario basico y la perdida de 1.5 puntos en la licencia de conducir");
                    break;
                default:
                Console.WriteLine("Asegurese de escribir bien el tipo de infraccion");
                break;    
            }
        }
    }
}