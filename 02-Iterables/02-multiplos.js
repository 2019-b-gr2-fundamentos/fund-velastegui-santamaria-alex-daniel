let deberes = 1;
let analisisSocioeconomico = 0
let algebra = 0
let compiladores = 0
let fundamentosDeProgramacion = 0
let calculo = 0
let fisica = 0
let ingles = 0
let mod = 0

do{
    if((deberes%13) == 0){
        ingles ++
    }else{
        if((deberes%11) == 0){
            fisica ++
        }else{
            if((deberes%7) == 0){
                calculo ++
            }else{
                if((deberes%5) == 0){
                    fundamentosDeProgramacion ++
                }else{
                    if((deberes%3) == 0){
                        compiladores ++
                    }else{
                        if((deberes%2) == 0){
                            algebra ++
                        }else{
                            analisisSocioeconomico ++
                        }
                    }
                }
            }
        }
    }
    deberes ++    
}while(deberes<=1000)
console.log(`Para ${deberes-1} deberes se tendran que hacer el siguiente numero de deberes por materia:`)
console.log("Analisis Socioeconomico: ",analisisSocioeconomico)
console.log("Algebra:",algebra)
console.log("Compiladores: ",compiladores)
console.log("Fundamentos de la programacion: ",fundamentosDeProgramacion)
console.log("Calculo: ",calculo)
console.log("Fisica: ",fisica)
console.log("Ingles: ",ingles)
