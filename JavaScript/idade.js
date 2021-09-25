var idade= 11
var status= ""

if (idade > 17){
    status= "Maior de Idade"
    console.log("Idade: " + idade + ". " + status)
}
else if (idade < 13){
    status= "Menor de Idade"
    console.log("Idade: " + idade + ". " + status)
}
else{
    status= "Adolescente"
    console.log("Idade: " + idade + ". " + status)
}