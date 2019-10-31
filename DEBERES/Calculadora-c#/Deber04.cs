using System;

namespace Calculadora
{
    class Deber04
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Introduzca operacion: ");
            string operacion;
            operacion = Console.ReadLine();
            switch(operacion){
                case "suma":
                Console.WriteLine("Ingrese el primer operando: ");
                var x = int.Parse(Console.ReadLine());
                Console.WriteLine("Ingrese el segundo operando: ");
                var y = int.Parse(Console.ReadLine());
                var suma = x + y;
                Console.WriteLine($"El valor de la suma es: {suma}");
                break;
                case "resta":
                Console.WriteLine("Ingrese el primer operando: ");
                var a = int.Parse(Console.ReadLine());
                Console.WriteLine("Ingrese el primer operando: ");
                var b = int.Parse(Console.ReadLine());
                var resta = a - b;
                Console.WriteLine($"El valor de la resta es: {resta}");
                break;
                case "multiplicacion":
                Console.WriteLine("Ingrese el primer operando: ");
                var c = int.Parse(Console.ReadLine());
                Console.WriteLine("Ingrese el primer operando: ");
                var d = int.Parse(Console.ReadLine());
                var multiplicacion = c * d;
                Console.WriteLine($"El valor de la multiplicacion es: {multiplicacion}");
                break;
                case "division":
                 Console.WriteLine("Ingrese el primer operando: ");
                var e = int.Parse(Console.ReadLine());
                Console.WriteLine("Ingrese el primer operando: ");
                var f = int.Parse(Console.ReadLine());
                var division = e / f;
                Console.WriteLine($"El valor de la division es: {division}");
                break;
                case "area":
                Console.WriteLine("Ingrese la altura del triangulo: ");
                var h = int.Parse(Console.ReadLine());
                Console.WriteLine("Ingrese la base del triangulo: ");
                var p = int.Parse(Console.ReadLine());
                var area = (h * p) / 2;
                Console.WriteLine($"El area del triangulo es: {area}");
                break;
                default:
                Console.WriteLine("No podemos calcular la operacion requerida");
                break;                
            }
        }
    }
}