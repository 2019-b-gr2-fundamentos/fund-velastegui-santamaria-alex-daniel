/*En C# se tienen los siguientes tipos de variables primitivas
int         Numeros enteros
long        Numeros enteros de mayor longitud
float       Numeros deciamles
double      Numeros decimales de mayor longitud
decimal     Valores monetarios
string      Cadena de caracteres
char        Un solo caracter
bool        Valores Booleanos*/


using System;

namespace Primitivas
{
    class Primitivas
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ejemplos de Tipos de varaibles");
            var x= 2;
            Console.WriteLine(x.GetType());
            var a=1.2;
            Console.WriteLine(a.GetType());
            decimal coin=0.42M;
            Console.WriteLine(coin.GetType());
            var b="string";
            Console.WriteLine(b.GetType());
        }
    }
}
