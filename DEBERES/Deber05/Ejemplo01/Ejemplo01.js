/*Este ejemplo usa el switch y el if para determinar 
el signo sodiacal de una persona*/
const mes = prompt("Ingrese su mes de nacimiento: ");
            const fechaString = prompt("Ingrese el dia de nacimiento: ");
            const fecha = Number(fechaString)
             switch(mes){
                case "enero":
                if(fecha>0 && fecha<=21){
                    console.log("Tu signo es Capricornio");
                }else{
                    if(fecha>21 && fecha<=31){
                    console.log("Tu signo es acuario");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                    }
                }break;
                case "febrero":
                if(fecha>0 && fecha<=19){
                    console.log("Tu signo es Acuario");
                }else{
                    if(fecha>19 && fecha<=28){
                    console.log("Tu signo es Piscis");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }              
            }break;
            case "marzo":
            if(fecha>0 && fecha<=20){
                    console.log("Tu signo es Piscis");
                }else{
                    if(fecha>20 && fecha<=31){
                    console.log("Tu signo es Aries");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "abril":
            if(fecha>0 && fecha<=20){
                    console.log("Tu signo es Aries");
                }else{
                    if(fecha>20 && fecha<=30){
                    console.log("Tu signo es Tauro");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "mayo":
             if(fecha>0 && fecha<=20){
                    console.log("Tu signo es Tauro");
                }else{
                    if(fecha>20 && fecha<=31){
                    console.log("Tu signo es Geminis");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "junio":
            if(fecha>0 && fecha<=20){
                    console.log("Tu signo es Geminis");
                }else{
                    if(fecha>20 && fecha<=30){
                    console.log("Tu signo es Cancer");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "julio":
            if(fecha>0 && fecha<=22){
                    console.log("Tu signo es Cancer");
                }else{
                    if(fecha>20 && fecha<=31){
                    console.log("Tu signo es Leo");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "agosto":
            if(fecha>0 && fecha<=23){
                    console.log("Tu signo es Leo");
                }else{
                    if(fecha>20 && fecha<=31){
                    console.log("Tu signo es Virgo");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "septiembre":
            if(fecha>0 && fecha<=23){
                    console.log("Tu signo es Virgo");
                }else{
                    if(fecha>20 && fecha<=30){
                    console.log("Tu signo es Libra");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "octubre":
            if(fecha>0 && fecha<=22){
                    console.log("Tu signo es Libra");
                }else{
                    if(fecha>20 && fecha<=31){
                    console.log("Tu signo es Escorpio");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "noviembre":
            if(fecha>0 && fecha<=22){
                    console.log("Tu signo es Escorpio");
                }else{
                    if(fecha>20 && fecha<=30){
                    console.log("Tu signo es Sagitario");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            case "diciembre":
            if(fecha>0 && fecha<=20){
                    console.log("Tu signo es Sagitario");
                }else{
                    if(fecha>20 && fecha<=31){
                    console.log("Tu signo es Capricornio");
                    }else{
                        console.log("Ingrese bien la fecha de nacimiento.");
                }                
            }break;
            default: 
            console.log("Asegurese de que escribio bien el mes");
            break;
        }
