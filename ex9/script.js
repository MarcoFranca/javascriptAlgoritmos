//funcoes

let slowDown = vel => velocity -= 20

let aterrisagem = att => {
    slowDown(velocity)
    if (velocity > 0){
        alert("velocidade de curso: " + velocity + "km/s")
    }else {
        velocity = 0
        alert("Nave aterrizada com sucesso, as comportas podem ser abertas!!!")
    }
}

function mainMenu() {
    let option
    while ( option !=1 && option!=2 && option !=3 && option !=4)

        option = prompt("________________Computador de Bordo________________\n\n" +
            "****Escolha uma das opções a seguir****\n\n" +
            "1 - desacelerar em 20 km/s\n" +
            "2 - imprimir dados de bordo\n" +
            "3 - abrir comportas\n" +
            "4 - Sair do programa")
    return option
}

//variaveis
let velocity = 150
let chosenOption
let comporta = "Fechadas"


//main

alert("Preparar para a aterrisagem!!!")
do {
    chosenOption = mainMenu()
    switch (chosenOption) {
        case "1":
            aterrisagem()

            break
        case "2":
            alert("Comportas: " + comporta +
                "\nvelocidade de curso: " + velocity + "km/s")
            break
        case "3":
            if (velocity >0){
                alert("ATENÇÃO: sistema de seurança acionada\n" +
                    "\"CLIC!!!\" Comportas bloqueadas\n" +
                    "Aterrize antes de abrir")
                comporta="Bloqueadas"
            }else {
                alert("Comportas abertas!")
                comporta = "Abertas"
            }
            break
        case "4":
            alert("Saindo do programa!!!")
            break
        default:
            alert("selecione uma opção válida")
    }
}while (chosenOption != 4)