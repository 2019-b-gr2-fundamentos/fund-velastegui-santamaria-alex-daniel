// DO WHILE
var vecesQueHeComido = 0;
/*do{
    console.log("Vamos a comer: ")
    vecesQueHeComido ++
    switch(vecesQueHeComido){
        case 1:
            console.log("Desayuno")
            break;
        case 2:
            console.log("Almuerzo")
            break;
        case 3:
            console.log("Merienda")
            break;
        default:
            console.log("Gordito")
            break;
    }
}while(vecesQueHeComido<3)*/
while (vecesQueHeComido <= 3) {
    vecesQueHeComido++;
    console.log("Vamos a comer: ");
    switch (vecesQueHeComido) {
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almuerzo");
            break;
        case 3:
            console.log("Merienda");
            break;
        default:
            console.log("Gordito");
            break;
    }
}
