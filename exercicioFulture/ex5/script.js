let number1 = parseInt(prompt("digite o primeiro numero"))
let number2 = parseInt(prompt("digite o segundo numero"))
let number3 = parseInt(prompt("digite o terceiro numero"))

let media = (number1 + number2 + number3)/3

if (number1 < number2 & number1 < number3){
    alert("o menor numero é " + number1 + " e a média é " + media)
}else if (number2 < number1 & number2 < number3){
    alert("o menor numero é " + number2 + " e a média é " + media)
}else {
    alert("o menor numero é " + number3 + " e a média é " + media)
}