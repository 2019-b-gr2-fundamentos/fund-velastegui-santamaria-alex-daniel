using System;

namespace Calculadora
{
    class Program
    {
        static float Suma(int n1, int n2)
        {
            return n1 + n2;
        }
         static float Resta(int n1, int n2)
        {
            return n1 - n2;
        }
         static float Multiplicacion(int n1, int n2)
        {
            return n1 * n2;
        }
         static float Division(int n1, int n2)
        {
            return n1 / n2;
        }
         static double Tangente(int n1)
        {
            return Math.Tan(n1);
        }
        static void Calculadora()
        {
            Console.WriteLine("\tBienvenido a la Calculadora");
            Console.WriteLine("1. Suma");
            Console.WriteLine("2. Resta");
            Console.WriteLine("3. Multiplicacion");
            Console.WriteLine("4. Division");
            Console.WriteLine("5. Tangente");
            Console.WriteLine("11. Salir");
            Console.Write("Escoja una operacion: ");
            string operacion = Console.ReadLine();
            bool esSuma = operacion == "Suma" || operacion == "1. Suma" || operacion == "1" || operacion == "suma" || operacion == "1.Suma";
            bool esResta = operacion == "Resta" || operacion == "2. Resta" || operacion == "2" || operacion == "resta" || operacion == "2.Resta";
            bool esMultiplicacion = operacion == "Multiplicacion" || operacion == "3. Multiplicacion" || operacion == "3" || operacion == "multiplicacion" || operacion == "3.Multiplicacion";
            bool esDivision = operacion == "Division" || operacion == "4. Division" || operacion == "4" || operacion == "division" || operacion == "4.Division";
            bool esTangente = operacion == "Tangente" || operacion == "5. Tangente" || operacion == "5" || operacion == "tangente" || operacion == "5.Tangente";
            bool salir = operacion == "Salir" || operacion == "11. Salir" || operacion == "11" || operacion == "salir" || operacion == "11.Salir";
            bool estaValida = esDivision || esMultiplicacion || esResta || esSuma || esTangente;
            if(estaValida){
                Console.WriteLine("Valio");
            }else{if(salir){
                Console.WriteLine("Gracias por usar nuestra calculadora");
            }else
            {
                Console.WriteLine("Escoja una opcion valida.");
                Calculadora();
            }
            }
        }
        static void Main(string[] args)
        {
            Program.Calculadora();
        }
    }
}
