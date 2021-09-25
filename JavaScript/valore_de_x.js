// código não esta funcionando corretamente. Na minha lógica eu pensei que ia funcionar certo, mas não está e não estou conseguindo resolver.


var x = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(i in x){ // faz um for pelos itens da lista
    resto= i % 2 // faz resto de dois
    if (resto == 0){ // se for igual a 0 siginifica que é par
        const lista= []
        const list= lista.concat(i) // então armazeno em uma lista
        soma= i + i
        console.log(list) // a ideia era somar estes itens desta nova lista
        console.log(soma)
    }

}