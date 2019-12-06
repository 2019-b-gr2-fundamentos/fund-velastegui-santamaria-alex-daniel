using System;

namespace Calculadora
{
    class Ejercicio01
    {
        static float Suma(float n1, float n2)
        {
            return n1 + n2;
        }
        static float Resta(float n1, float n2)
        {
            return n1 - n2;
        }
        static float Multiplicacion(float n1, float n2)
        {
            return n1 * n2;
        }
        static float Division(float n1, float n2)
        {
            return n1 / n2;
        }
        static double Tangente(double n1)
        {
            return Math.Tan(n1);
        }
        static double Seno(double n1)
        {
            return Math.Sin(n1);
        }
        static double Coseno(double n1)
        {
            return Math.Cos(n1);
        }
        static float Cuadrado(float n1)
        {
            return n1 * n1;
        }
        static float Area(float b, float h)
        {
            return (b * h) / 2;
        }
        static double Logaritmo(float n1, float newbase)
        {
            return Math.Log(n1,newbase);
        }
        static void Calculadora()
        {
            Console.WriteLine("\tMenu Principal");
            Console.WriteLine("1. Suma");
            Console.WriteLine("2. Resta");
            Console.WriteLine("3. Multiplicacion");
            Console.WriteLine("4. Division");
            Console.WriteLine("5. Tangente");
            Console.WriteLine("6. Seno");
            Console.WriteLine("7. Coseno");
            Console.WriteLine("8. Cuadrado de un numero");
            Console.WriteLine("9. Area de un triangulo");
            Console.WriteLine("10. Logaritmo");
            Console.WriteLine("11. Salir");
            Console.Write("Escoja una operacion: ");
            string operacion = Console.ReadLine();
            bool esSuma = operacion == "Suma" || operacion == "1. Suma" || operacion == "1" || operacion == "suma" || operacion == "1.Suma";
            bool esResta = operacion == "Resta" || operacion == "2. Resta" || operacion == "2" || operacion == "resta" || operacion == "2.Resta";
            bool esMultiplicacion = operacion == "Multiplicacion" || operacion == "3. Multiplicacion" || operacion == "3" || operacion == "multiplicacion" || operacion == "3.Multiplicacion";
            bool esDivision = operacion == "Division" || operacion == "4. Division" || operacion == "4" || operacion == "division" || operacion == "4.Division";
            bool esTangente = operacion == "Tangente" || operacion == "5. Tangente" || operacion == "5" || operacion == "tangente" || operacion == "5.Tangente";
            bool esSeno = operacion == "Seno" || operacion == "6. Seno" || operacion == "seno" || operacion == "6.Seno" || operacion == "6";
            bool esCoseno = operacion == "Coseno" || operacion == "coseno" || operacion == "7. Coseno" || operacion == "7.Coseno" || operacion == "7";
            bool esCuadrado = operacion == "Cuadrado de un numero" || operacion == "cuadrado de un numero" || operacion == "8. Cuadrado de un numero" || operacion == "8.Cuadrado de un numero" || operacion == "8";
            bool esArea = operacion == "Area de un triangulo" || operacion == "area de un triangulo" || operacion == "9. Area de un triangulo" || operacion == "9.Area de un triangulo" || operacion == "9";
            bool esLogaritmo = operacion == "Logaritmo" || operacion == "logaritmo" || operacion == "10. Logaritmo" || operacion == "10.Logaritmo" || operacion == "10";
            bool salir = operacion == "Salir" || operacion == "11. Salir" || operacion == "11" || operacion == "salir" || operacion == "11.Salir";
            bool estaValida = esDivision || esMultiplicacion || esResta || esSuma || esTangente || esCoseno || esSeno || esCuadrado || esArea || esLogaritmo;
            if(estaValida){
                if(esSuma)
                {
                    Console.Write("Ingrese primer operando: ");
                    float n1 = float.Parse(Console.ReadLine());
                    Console.Write("Ingrese segundo operando: ");
                    float n2 = float.Parse(Console.ReadLine());
                    float resultado = Suma(n1, n2);
                    Console.WriteLine($"El resultado de la suma es: {resultado}");
                    Console.ReadKey();
                }else
                {
                    if(esResta)
                    {
                        Console.Write("Ingrese primer operando: ");
                        float n1 = float.Parse(Console.ReadLine());
                        Console.Write("Ingrese segundo operando: ");
                        float n2 = float.Parse(Console.ReadLine());
                        float resultado = Resta(n1, n2);
                        Console.WriteLine($"El resultado de la resta es: {resultado}");
                        Console.ReadKey();   
                    }else
                    {
                        if(esMultiplicacion)
                        {
                            Console.Write("Ingrese primer operando: ");
                            float n1 = float.Parse(Console.ReadLine());
                            Console.Write("Ingrese segundo operando: ");
                            float n2 = float.Parse(Console.ReadLine());
                            float resultado = Multiplicacion(n1, n2);
                            Console.WriteLine($"El resultado de la multiplicacion es: {resultado}");
                            Console.ReadKey();
                        }else
                        {
                            if(esDivision)
                            {
                                Console.Write("Ingrese primer operando: ");
                                float n1 = float.Parse(Console.ReadLine());
                                Console.Write("Ingrese segundo operando: ");
                                float n2 = float.Parse(Console.ReadLine());
                                float resultado = Multiplicacion(n1, n2);
                                Console.WriteLine($"El resultado de la multiplicacion es: {resultado}");
                                Console.ReadKey();
                            }else
                            {
                                if(esTangente)
                                {
                                    Console.WriteLine("Ingresara el argumento en:");
                                    Console.WriteLine("1. Grados");
                                    Console.WriteLine("2. Radianes");
                                    Console.Write("Escoja un opcion: ");
                                    string argumento = Console.ReadLine();
                                    bool grados = argumento == "Grados" || argumento == "1.Grados" || argumento == "grados" || argumento == "1" || argumento == "1. Grados";
                                    bool radianes = argumento == "Radianes" || argumento == "2.Radianes" || argumento == "radianes" || argumento == "2" || argumento == "2. Radianes";
                                    bool ok = grados || radianes;
                                    if(ok)
                                    {
                                        if(grados)
                                        {
                                            Console.Write("Ingrese el argumento en grados: ");
                                            double n1Grados = double.Parse(Console.ReadLine());
                                            double n1 = (n1Grados * System.Math.PI) / 180;
                                            double resultado = Math.Round(Tangente(n1),2);
                                            Console.WriteLine($"La tangente de {n1Grados} grados es: {resultado}");
                                            Console.ReadKey();
                                        }else
                                        {
                                            Console.Write("Ingrese el argumento en radianes: ");
                                            double n1 = double.Parse(Console.ReadLine());
                                            double resultado = Math.Round(Tangente(n1),2);
                                            Console.WriteLine($"La tangente de {n1} radianes es: {resultado}");
                                            Console.ReadKey();
                                        }
                                    }else
                                    {
                                        Console.WriteLine("La opcion escogida no es valida.");
                                        Calculadora();
                                    }
                                }else
                                {
                                    if(esSeno)
                                    {
                                        Console.WriteLine("Ingresara el argumento en:");
                                        Console.WriteLine("1. Grados");
                                        Console.WriteLine("2. Radianes");
                                        Console.Write("Escoja un opcion: ");
                                        string argumento = Console.ReadLine();
                                        bool grados = argumento == "Grados" || argumento == "1.Grados" || argumento == "grados" || argumento == "1" || argumento == "1. Grados";
                                        bool radianes = argumento == "Radianes" || argumento == "2.Radianes" || argumento == "radianes" || argumento == "2" || argumento == "2. Radianes";
                                        bool ok = grados || radianes;
                                        if(ok)
                                        {
                                            if(grados)
                                            {
                                                Console.Write("Ingrese el argumento en grados: ");
                                                double n1Grados = double.Parse(Console.ReadLine());
                                                double n1 = (n1Grados * System.Math.PI) / 180;
                                                double resultado = Math.Round(Seno(n1),2);
                                                Console.WriteLine($"La seno de {n1Grados} grados es: {resultado}");
                                                Console.ReadKey();
                                            }else
                                            {
                                                Console.Write("Ingrese el argumento en radianes: ");
                                                double n1 = double.Parse(Console.ReadLine());
                                                double resultado = Math.Round(Seno(n1),2);;
                                                Console.WriteLine($"La seno de {n1} radianes es: {resultado}");
                                                Console.ReadKey();
                                            }
                                        }else
                                        {
                                            Console.WriteLine("La opcion escogida no es valida.");
                                        }
                                    }else
                                    {
                                        if(esCoseno)
                                        {
                                            Console.WriteLine("Ingresara el argumento en:");
                                            Console.WriteLine("1. Grados");
                                            Console.WriteLine("2. Radianes");
                                            Console.Write("Escoja un opcion: ");
                                            string argumento = Console.ReadLine();
                                            bool grados = argumento == "Grados" || argumento == "1.Grados" || argumento == "grados" || argumento == "1" || argumento == "1. Grados";
                                            bool radianes = argumento == "Radianes" || argumento == "2.Radianes" || argumento == "radianes" || argumento == "2" || argumento == "2. Radianes";
                                            bool ok = grados || radianes;
                                            if(ok)
                                            {
                                                if(grados)
                                                {
                                                    Console.Write("Ingrese el argumento en grados: ");
                                                    double n1Grados = double.Parse(Console.ReadLine());
                                                    double n1 = (n1Grados * System.Math.PI) / 180;
                                                    double resultado = Math.Round(Coseno(n1),2);
                                                    Console.WriteLine($"La coseno de {n1Grados} grados es: {resultado}");
                                                    Console.ReadKey();
                                                }else
                                                {
                                                    Console.Write("Ingrese el argumento en radianes: ");
                                                    double n1 = double.Parse(Console.ReadLine());
                                                    double resultado = Math.Round(Coseno(n1),2);
                                                    Console.WriteLine($"La coseno de {n1} radianes es: {resultado}");
                                                    Console.ReadKey();
                                                }
                                            }else
                                            {
                                                Console.WriteLine("La opcion escogida no es valida.");
                                                Calculadora();
                                            }   
                                        }else
                                        {
                                            if(esCuadrado)
                                            {
                                                Console.Write("Ingrese el numero que desea elevar al cuadrado: ");
                                                float n1 = float.Parse(Console.ReadLine());
                                                float resultado = Cuadrado(n1);
                                                Console.WriteLine($"El resultado de la potencia es: {resultado}");
                                                Console.ReadKey();
                                            }else
                                            {
                                                if(esArea)
                                                {
                                                    Console.Write("Ingrese la base del triangulo: ");
                                                    float b = float.Parse(Console.ReadLine());
                                                    Console.Write("Ingrese la altura del triangulo: ");
                                                    float h = float.Parse(Console.ReadLine());
                                                    float resultado = Area(b,h);
                                                    Console.WriteLine($"El area del triangulo con las dimensiones ingresadas es: {resultado}");
                                                    Console.ReadKey();
                                                }else
                                                {
                                                    if(esLogaritmo)
                                                    {
                                                        Console.Write("Ingrese la base del logaritmo: ");
                                                        float newbase = float.Parse(Console.ReadLine());
                                                        Console.Write("Ingrese el argumento del logaritmo: ");
                                                        float n1 = float.Parse(Console.ReadLine());
                                                        bool ok = n1 > 0 && newbase > 1;
                                                        if(ok)
                                                        {
                                                            double resultado = Logaritmo(n1, newbase);
                                                            Console.WriteLine($"El resultado del logaritmo de {n1} en base {newbase} es: {resultado}");
                                                            Console.ReadKey();
                                                        }else{
                                                            Console.WriteLine("Recuerde que la base del logaritmo debe ser mayor que 1 y el argumento del logaritmo debe ser mayor que 0");
                                                            while(ok == false)
                                                            {
                                                                Console.Write("Ingrese la base del logaritmo: ");
                                                                newbase = float.Parse(Console.ReadLine());
                                                                Console.Write("Ingrese el argumento del logaritmo: ");
                                                                n1 = float.Parse(Console.ReadLine());
                                                                ok = n1 > 0 && newbase > 1;
                                                            }
                                                            double resultado = Logaritmo(n1, newbase);
                                                            Console.WriteLine($"El resultado del logaritmo de {n1} en base {newbase} es: {resultado}");
                                                            Console.ReadKey();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                Calculadora();
            }else
            {
                if(salir)
                {
                Console.WriteLine("Gracias por usar nuestra calculadora");
                Console.ReadKey();
                }else
                {
                Console.WriteLine("Escoja una opcion valida.");
                Calculadora();
                }
            }
        }
        static void Main(string[] args)
        {
            Ejercicio01.Calculadora();
        }
    }
}