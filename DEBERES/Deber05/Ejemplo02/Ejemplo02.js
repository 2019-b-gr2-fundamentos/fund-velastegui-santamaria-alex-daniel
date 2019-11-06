const continente = prompt("Ingrese el Continente a consultar");
const edadString = prompt("Ingrese su edad: ");
const edad = Number(edadString);
            switch (continente){
                case "America Latina":
                    if(edad<18){
                    console.log("Usted es menor de edad en el continente seleccionado");
                    }else{
                    console.log("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "America del Norte":
                    if(edad<21){
                        console.log("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        console.log("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "Europa":
                    if(edad<18){
                        console.log("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        console.log("Ustede ya es mayor de edad en el Continente seleccionado");
                    }break;
                case "Africa":
                    if(edad<13){
                        console.log("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        console.log("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "Oceania":
                    if(edad<17){
                        console.log("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        console.log("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                case "Asia":
                    if(edad<18){
                        console.log("Usted es menor de edad en el Continente seleccionado");
                    }else{
                        console.log("Ustede ya es mayor de edad en el Continente seleccionado");
                }break;
                default:
                console.log("Asegurese de escribir bien el Continente a constultar");
                break;                
             }