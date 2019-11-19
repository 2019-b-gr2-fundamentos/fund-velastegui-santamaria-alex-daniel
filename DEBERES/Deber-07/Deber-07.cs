using System;

namespace Deber_07
{
    class Deber_07
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese numero de elementos:");
            var tamañoString = Console.ReadLine();
            var tamaño = int.Parse(tamañoString);
            Console.WriteLine("Ingrese un numero:");
            var posicionString = Console.ReadLine();
            var posicion = int.Parse(posicionString);
            int[] arreglo = new int[tamaño];
            var random = new Random();
            var condicion = 0;
//Lenar el arreglo y comprobar que existe al menos un uno
            while(condicion == 0){
                for(var i = 0; i < tamaño; i++){
                    arreglo[i] = random.Next(0 , 2);
                    }
                for(var j = 0; j < tamaño; j++){
                    if(arreglo[j] == 1){
                        condicion++;
                        }
                    }
                }
            if(arreglo[posicion] == 1){
                Console.WriteLine("GANADOR!");
            }else{
                Console.WriteLine("Siga participando");
                }
        }
    }
}