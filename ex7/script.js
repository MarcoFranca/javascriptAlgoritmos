
let spaceShip = prompt(" Capitão identificamos naves inimigas!!!\n\n " +
    "Por segurança vamos mudar o nome da nave,\n\n" +
    "ATENÇÃO: Os radares inimigos identificam a letra 'e' como naves inimigas esse será um caracter proíbido..." +
    "\n \n Qual o nome atula da nave? ")
let newSpaceShip = ""

for (let spl = spaceShip.length -1; spl > 0 ; spl -- ){
    if (spaceShip[spl] == "e" || spaceShip[spl] == "E"){
        alert("Nome original da nave: " + spaceShip +
            "\n\nNome após ocultação: " + newSpaceShip)
        break
    }else{
        newSpaceShip += spaceShip[spl]
    }
}
alert("Nome original da nave: " + spaceShip +
    "\n\nNome após ocultação: " + newSpaceShip)
