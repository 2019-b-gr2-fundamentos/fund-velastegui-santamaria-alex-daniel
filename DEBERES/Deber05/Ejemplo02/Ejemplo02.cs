/*Este programa usa el swtich y el if para determinar
si un ciudadano es mayor o menor de edad dependiendo de su 
edad y el Continente seleccionado */
using System;

namespace Ejemplo02
{
    class Deber05
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese el Continente a consultar");
            string continente = Console.ReadLine();
             Console.WriteLine("Ingrese su edad: ");
            var edad = int.Parse(Console.ReadLine());
            switch (continente){
                case "America Latina":
                    if(edad<18){
                    Console.WriteLine("Usted es menor de edad en el continente seleccionado");
                    }else{
                    Console.WriteLine("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "America del Norte":
                    if(edad<21){
                        Console.WriteLine("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        Console.WriteLine("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "Europa":
                    if(edad<18){
                        Console.WriteLine("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        Console.WriteLine("Ustede ya es mayor de edad en el Continente seleccionado");
                    }break;
                case "Africa":
                    if(edad<13){
                        Console.WriteLine("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        Console.WriteLine("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "Oceania":
                    if(edad<17){
                        Console.WriteLine("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        Console.WriteLine("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "Asia":
                    if(edad<18){
                        Console.WriteLine("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        Console.WriteLine("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                default:
                Console.WriteLine("Asegurese de escribir bien el Continente a constultar");
                break;                
            }
        }
    }
}
