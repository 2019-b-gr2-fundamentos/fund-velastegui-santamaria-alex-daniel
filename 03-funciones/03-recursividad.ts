function recorrerArreglo(arregloNumeros : number[], indice: number){
    const tamaño = arregloNumeros.length-1
    if(indice == tamaño){
        console.log("Fin del arreglo");
    }else{
        indice ++ 
        console.log(arregloNumeros[indice])
        recorrerArreglo(arregloNumeros,indice); 
    }

}

function immprimirMensajeNVeces(mensaje:string , numeroVeces:number):void{
     if(numeroVeces == 0){
         console.log("Se terminó")
     }else{
         console.log(mensaje)
         const nuevoNumeroVeces = numeroVeces - 1;
         immprimirMensajeNVeces(mensaje,nuevoNumeroVeces)
     }
}

function main(){
    recorrerArreglo([1, 2, 3, 4],0)
}