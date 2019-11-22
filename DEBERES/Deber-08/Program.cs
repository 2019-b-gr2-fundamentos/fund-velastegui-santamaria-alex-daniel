using System;

namespace Deber_08
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Ingrese la posicion del arreglo donde se va a agregar el dato: ");
            var posicionString = Console.ReadLine();
            var posicion = int.Parse(posicionString);
            Console.Write("Ingrese el elemento a agregar: ");
            var elementoString = Console.ReadLine();
            var elemento = int.Parse(elementoString);
            int[] arreglo = {1, 2, 3, 4, 5, 6, 7, 8, 9};
            int[] arreglo02 = new int[arreglo.Length];
            for(int i = 0; i<9;i++){
               if(i<posicion){
                    arreglo02[i] = arreglo[i];
                 }else{
                    if(i == posicion){
                        arreglo02[i] = elemento;
                    }else{
                        arreglo02[i] = arreglo[i];
                    }
                 }
            }
            for(int j = 0; j < arreglo.Length; j++){
                Console.Write($"{arreglo02[j]} ");
            }
        }
    }
}
