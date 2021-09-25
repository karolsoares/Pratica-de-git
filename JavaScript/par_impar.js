function par_ou_impar(valor1, valor2){
    soma = valor1 + valor2
    resto = soma % 2

    if (resto == 0){
        console.log("Esta é a soma: " + soma + ". E é um número:")
        return "Par"
    }
    else{
        console.log("Esta é a soma: " + soma + ". E é um número:")
        return "Ímpar"
    }
}
console.log(par_ou_impar(33, 99))




