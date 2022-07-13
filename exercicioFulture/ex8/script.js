alert("Calcule a conta de acordo com a demanda")

let consumo = Number(prompt("digite o consumo da empresa"))
let valorKwv

if (consumo > 1000){
    valorKwv = consumo * 2
}else if (consumo > 600 && consumo <= 1000){
    valorKwv = consumo * 1.75
}else if (consumo > 300 && consumo <= 600){
    valorKwv = consumo * 1.50
}else {
    valorKwv = consumo * 1.25
}

alert("o valor do consumo usado foi: " + valorKwv)