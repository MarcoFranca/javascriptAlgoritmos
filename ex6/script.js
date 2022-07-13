let shipName = prompt("Capitão, qual o nome atual da sua Nave? ")
let newShip = ""
let caracterSub = prompt("nome atual: " + shipName +
    "\nCapitão, voce pode substituir apenas um caracter\n" +
    "qual caracter devo alterar?")
let newCaracter = prompt("Por qual caracter o Sr. deseja?")

for (let i = 0 ; i < shipName.length ; i++){
    if (shipName[i] == caracterSub){
        newShip += newCaracter
    }else {
        newShip += shipName[i]
    }
}
alert("o novo nome da nave é: " + newShip)