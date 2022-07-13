alert("Calcule o seu IMC")

let altura = Number(prompt("digite a sua altura"))
let peso = Number(prompt("digite o seu peso"))

let imc = peso / (Math.pow(altura,2))

alert("O seu IMC é: " + imc)