let dobra = 0
let nomeNav = prompt("Qual o nome da Nave? ")
let dobraOption = prompt("deseja entrar em dobra espacial?\n" +
    "1 - Sim\n" +
    "2 - Não\n" +
    "Digite a opção desejada (1 ou 2)")
if (dobraOption == 1){
    while (dobraOption == 1){
        dobra += 1
        dobraOption = prompt("Deseja realizar a proxima dobra?\n" +
            "1 - Sim \n" +
            "2 - Não")
    }
    alert("Paramos por aqui!!!")
    alert("nave: " + nomeNav + "\n" +
           "numero de dobras feitas: " + dobra)
}else {
alert(" Voce é sem graça nem vamos começar q:( ")
alert("nave: " + nomeNav + "\n" +
    "numero de dobras: " + dobra)
}

