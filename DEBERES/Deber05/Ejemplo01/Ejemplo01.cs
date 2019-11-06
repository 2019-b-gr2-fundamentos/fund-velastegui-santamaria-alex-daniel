/*El programa usa tanto el switch como el 
if para segunla fecha d nacimiento del cliente
poder definir su signo sodiacal */
using System;

namespace Ejemplo01   
{
    class Deber05
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese su mes de nacimiento: ");
            string mes = Console.ReadLine();
            Console.WriteLine("Ingrese el dia de nacimiento: ");
            var fecha = int.Parse(Console.ReadLine());
            switch(mes){
                case "enero":
                if(fecha>0 && fecha<=21){
                    Console.WriteLine("Tu signo es Capricornio");
                }else{
                    if(fecha>21 && fecha<=31){
                    Console.WriteLine("Tu signo es acuario");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                    }
                }break;
                case "febrero":
                if(fecha>0 && fecha<=19){
                    Console.WriteLine("Tu signo es Acuario");
                }else{
                    if(fecha>19 && fecha<=28){
                    Console.WriteLine("Tu signo es Piscis");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }              
            }break;
            case "marzo":
            if(fecha>0 && fecha<=20){
                    Console.WriteLine("Tu signo es Piscis");
                }else{
                    if(fecha>20 && fecha<=31){
                    Console.WriteLine("Tu signo es Aries");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "abril":
            if(fecha>0 && fecha<=20){
                    Console.WriteLine("Tu signo es Aries");
                }else{
                    if(fecha>20 && fecha<=30){
                    Console.WriteLine("Tu signo es Tauro");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "mayo":
             if(fecha>0 && fecha<=20){
                    Console.WriteLine("Tu signo es Tauro");
                }else{
                    if(fecha>20 && fecha<=31){
                    Console.WriteLine("Tu signo es Geminis");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "junio":
            if(fecha>0 && fecha<=20){
                    Console.WriteLine("Tu signo es Geminis");
                }else{
                    if(fecha>20 && fecha<=30){
                    Console.WriteLine("Tu signo es Cancer");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "julio":
            if(fecha>0 && fecha<=22){
                    Console.WriteLine("Tu signo es Cancer");
                }else{
                    if(fecha>20 && fecha<=31){
                    Console.WriteLine("Tu signo es Leo");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "agosto":
            if(fecha>0 && fecha<=23){
                    Console.WriteLine("Tu signo es Leo");
                }else{
                    if(fecha>20 && fecha<=31){
                    Console.WriteLine("Tu signo es Virgo");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "septiembre":
            if(fecha>0 && fecha<=23){
                    Console.WriteLine("Tu signo es Virgo");
                }else{
                    if(fecha>20 && fecha<=30){
                    Console.WriteLine("Tu signo es Libra");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "octubre":
            if(fecha>0 && fecha<=22){
                    Console.WriteLine("Tu signo es Libra");
                }else{
                    if(fecha>20 && fecha<=31){
                    Console.WriteLine("Tu signo es Escorpio");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "noviembre":
            if(fecha>0 && fecha<=22){
                    Console.WriteLine("Tu signo es Escorpio");
                }else{
                    if(fecha>20 && fecha<=30){
                    Console.WriteLine("Tu signo es Sagitario");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "diciembre":
            if(fecha>0 && fecha<=20){
                    Console.WriteLine("Tu signo es Sagitario");
                }else{
                    if(fecha>20 && fecha<=31){
                    Console.WriteLine("Tu signo es Capricornio");
                    }else{
                        Console.WriteLine("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            default: 
            Console.WriteLine("Asegurese de que escribio bien el mes");
            break;
        }
    }
}
}

