// preciso de ajuda para resolver este código


function impar(valor){
    x= valor

    if (x < 2){
        console.log("o número precisa ser maior que dois")
    }

    else{
        for(var count= 0; count= x; count++){ // faz uma contagem aé o numero que a função recebe
            for( i in count){ //pega elemento por elemento da conatgem
                resto= i % 2 // faria o resto da divisão do número por 2
                if(resto != 0) // se fosse = 0 então iria imprimir os numeros que seriam apenas impares.
                    console.log(i)    
            }
        }
    }
}

console.log(impar(5))

