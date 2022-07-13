 const hitchedSpacesships = [
    ["Fenix ", 8, true],
    ["Golias ", 10, true],
    ["helmet ", 5, false],
    ["elemental ", 3, true],
    ["Darwin ", 15, false]
]
let maior = hitchedSpacesships.filter(spaceShipUp => {
    return spaceShipUp[1] > 9}).map(spaceShip =>{
        return spaceShip[0]
})
console.log(maior)

let pluged = hitchedSpacesships.findIndex(unpluged => {
    return unpluged[2] == false})

console.log(pluged)

let upNave = hitchedSpacesships.map(uper =>{
    return uper[0].toUpperCase()
})

console.log(upNave)

alert("Naves com capacidade acima de 9 tripulantes : " + maior.join("/ ") +
    "\nproxima plataforma a ser conectada: " + (pluged +1) +
    "\nNomes das Naves cadastradas: "+ upNave.join("/ "))