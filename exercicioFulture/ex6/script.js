alert("digite dois números para saber as quatro operações básicas")

let num1 = parseInt(prompt("digite o primeiro número"))
let num2 = parseInt(prompt("digite o segundo número"))

let soma = num1 + num2
let subtração = num1 - num2
let divisão = num1 / num2
let multiplicação = num1 * num2

alert(
    "os valores são:\n" +
    "soma: " + soma + "\n" +
    "subtração: " + subtração + "\n" +
    "divisão: " + divisão + "\n" +
    "multiplicação: " + multiplicação )