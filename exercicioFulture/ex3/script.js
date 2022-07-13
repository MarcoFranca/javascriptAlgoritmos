let nota1 = prompt("digite a primeira nota ")
let nota2 = prompt("digite a segunda nota ")

let media = (parseInt(nota1) + parseInt(nota2))/2

if (media >=6){
    alert("a média da nota foi " + media + " o aluno esta aprovado")
}else{
    alert("a média da nota foi " + media + " o aluno esta reprovado")
}

