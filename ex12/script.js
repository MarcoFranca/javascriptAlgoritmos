let shipsEngaged = []

class Ship {
    constructor(name, crewNumber) {
        this.name = name
        this.crewNumber = crewNumber
        this.engaged = false
        this.gates = "closed"
        return shipsEngaged.push()
    }


}

shipsEngaged.push(new Ship("joao", 12, false, "close"))

let option = 0
do {
    option = prompt("******_Conectando com Estação_******" +
        "\n(1) Realizar engate" +
        "\n(2) Naves na Estação" +
        "\n(3) Sair")
    switch (option) {
        case "1":
            alert("Capitão favor identifivar a Nave!!!")
            let name = prompt("Nome da Nave: ")
            let number =prompt("numero de tripulantes ")
            shipsEngaged.push(new Ship(name,number))
            break
        case "2":
            name = shipsEngaged.name

            alert(name)
            break
        case "3":
            break
        default:
            alert("insira um valor válido")
    }
}while (option != 3)