//funções
function speedUp(velShip = 0, aceleration = 0) {
    velShip += aceleration
    return velShip
}
function slowDown(velShip = 0,braking = 0) {
    velShip -= braking
    return velShip
}

//variaveis
let spaceShip = ""
let newVelocity = 0
let option = 0



//inicio do programa
alert("iniciando sistema....")
spaceShip = prompt("Capitão !!!!\nPrecisamos dar um nome para a Nave\n" +
    "Diga o nome que desejado")


do {
    option = prompt("________________Main menu________________\n\n" +
        "****Escolha uma das opções a seguir****\n\n" +
        "1 - acelerar a nave em 5 km/s\n" +
        "2 - desacelerar em 5 km/s\n" +
        "3 - imprimir dados de bordo\n" +
        "4 - Sair do programa")
    switch (option) {
        case "1":
            newVelocity = speedUp(newVelocity, 5)
            alert("*****Velocidade de curso*****\n" +
                "velocidade: " + newVelocity + " km/s")
            break

        case "2":
            if (newVelocity >= 5) {
                newVelocity = slowDown(newVelocity, 5)
                alert("*****Velocidade de curso*****\n" +
                    "velocidade: " + newVelocity + " km/s")
                break
            }else {
                alert("Velocidade mínima atingida")
                break
            }
        case "3":
            alert("*****Status da Nave*****\n" +
                "SpaceChip: " + spaceShip +
            "\nVelocidade de Curso: " + newVelocity + " km/s")
            break
        case "4" :
            alert("Saindo do programa.....")
            break
        default :
            alert("Selecione uma opção válida")

    }
    }while (option != 4)



