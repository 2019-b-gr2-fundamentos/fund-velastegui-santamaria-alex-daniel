using System;

namespace Deber_09
{
    class Program
    {

        static void SumaFilas(float[,] matrizA)
        {
            float suma = 0;
            int filas = matrizA.GetUpperBound(0) + 1;
            int columnas = matrizA.GetUpperBound(1) + 1;
            for(int i = 0; i < filas; i ++)
            {
                for(int j = 0; j < columnas; j ++)
                {
                    suma = suma + matrizA[i, j];
                }
                Console.WriteLine($"La suma de los elementos de la fila {i + 1} de la matriz A es: {suma}.");
                suma = 0;
            }
        }

        static void SumaColumnas(float[,] matrizA)
        {
            float suma = 0;
            int filas = matrizA.GetUpperBound(0) + 1;
            int columnas = matrizA.GetUpperBound(1) + 1;
            for(int i = 0; i < columnas; i ++)
            {
                for(int j = 0; j < filas; j ++)
                {
                    suma = suma + matrizA[j, i];
                }
                Console.WriteLine($"La suma de los elementos de la columna {i + 1} de la matriz A es: {suma}.");
                suma = 0;
            }
        }

        static bool MatricesIguales(float[,] matrizA, float[,] matrizB )
        {
            bool siSon = true;
            bool igualFilas = matrizA.GetUpperBound(0) == matrizB.GetUpperBound(0);
            bool igualColumnas = matrizA.GetUpperBound(1) == matrizB.GetUpperBound(1);
            bool puedeSer = igualFilas && igualColumnas;
            if(puedeSer)
            {
                int filas = matrizA.GetUpperBound(0) + 1;
                int columnas = matrizA.GetUpperBound(1) + 1;
                bool loSon = true;
                for(int i = 0; i < filas; i ++)
                {
                    for(int j = 0; j < columnas; j++)
                    {
                        if(loSon)
                        {
                            loSon = matrizA[i, j] == matrizB[i, j];
                        }
                    }
                    if(loSon)
                    {
                        siSon = true;
                    }else
                    {
                        siSon = false;
                    }
                }
            }else{
                siSon = false;
            }
            return siSon;
        }

        static void Main(string[] args)
        {

            //MATRIZ A

            Console.Write("Ingrese el numero de filas de la matriz A: ");
            int filasA = int.Parse(Console.ReadLine());
            Console.Write("Ingrese el numero de columnas de la matriz A: ");
            int columnasA = int.Parse(Console.ReadLine());
            float[,] matrizA = new float[filasA, columnasA];
            for(int i = 0; i < filasA; i ++)
            {
                for(int j = 0; j < columnasA; j ++)
                {
                    Console.Write($"A[{i+1}][{j+1}]: ");
                    matrizA[i, j] = int.Parse(Console.ReadLine());
                }
            }

            //MATRIZ B

            Console.Write("Ingrese el numero de filas de la matriz B: ");
            int filasB = int.Parse(Console.ReadLine());
            Console.Write("Ingrese el numero de columnas de la matriz B: ");
            int columnasB = int.Parse(Console.ReadLine());
            float[,] matrizB = new float[filasB, columnasB];
            for(int i = 0; i < filasB; i ++)
            {
                for(int j = 0; j < columnasB; j ++)
                {
                    Console.Write($"B[{i+1}][{j+1}]: ");
                    matrizB[i, j] = int.Parse(Console.ReadLine());
                }
            }

            //COMPARACION

            bool siSon = MatricesIguales(matrizA, matrizB);
            if(siSon)
            {
                Console.WriteLine("Las matrices A y B son iguales");
            }else
            {
                Console.WriteLine("Las matrices A y B no son iguales");
            }

            //SUMA DE FILAS

            SumaFilas(matrizA);

            //SUMA DE COLUMNAS

            SumaColumnas(matrizA);
        }
    }
}