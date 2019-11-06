const infraccion = prompt("Ingrese el tipo de Infraccion del detenido");
            switch(infraccion){
                case "conducir en estado de ebriedad":
                    const gradosString = prompt("Ingrese los gramos de alcohol por litro de sangre del detenido");
                    const grados = Number(gradosString);
                    if(grados > 0.3 && grados <= 0.8){
                        console.log("Se aplicara la multa de un salario basico, la perdida de 5 puntos en la licencia de conducir y cinco dias de carcel");
                    }else{
                        if(grados > 0.8 && grados <= 1.2){
                            console.log("Se aplicara la multa de dos salario basico, la perdida de 10 puntos en la licencia de conducir y quince dias de carcel");
                        }else{
                            if(grados > 1.2){
                                console.log("Se aplicara la multa de tres salario basico, la perdida de la licencia de conducir y treinta dias de carcel");
                            }else{
                                console.log("El nivel de alcohol esta dentro del permitido.");
                            }
                        }
                    }break;
                case "contravencion de primera clase":
                    console.log("3 dias de carcel, multa de un salario basico y la perdida de 10 puntos en la licencia de conducir");
                    break;
                case "contravencion de segunda clase":
                    console.log("Multa del 50% del salario basico y la perdida de 9 puntos en la licencia de conducir");
                    break;
                case "contravencion de tercera clase":
                    console.log("Multa del 45% del salario basico y la perdida de 7.5 puntos en la licencia de conducir");
                    break;
                case "contravencion de cuarta clase":
                    console.log("Multa del 35% del salario basico y la perdida de 6 puntos en la licencia de conducir");
                    break;
                case "contravencion de quinta clase":
                    console.log("Multa del 15% del salario basico y la perdida de 4 puntos en la licencia de conducir");
                    break;
                case "contravencion de sexta clase":
                    console.log("Multa del 10% del salario basico y la perdida de 3 puntos en la licencia de conducir");
                    break;
                case "contravencion de septima clase":
                    console.log("Multa del 5% del salario basico y la perdida de 1.5 puntos en la licencia de conducir");
                    break;
                default:
                console.log("Asegurese de escribir bien el tipo de infraccion");
                break;    
            }
