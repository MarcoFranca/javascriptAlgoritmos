// //menovalor entre
// preco anterior
// preco atual com desconto de 10%
//     media do preco com desconto 10%

let precoAtual = Number(prompt("digite o valor atual"))
let precoAnterior = Number(prompt("digite o valor anterior"))
let valAtualDesc = precoAtual + (precoAtual * 0.1)
let mediaDesc = ((precoAtual + precoAnterior)/2) * 0.9
if (valAtualDesc < precoAnterior && valAtualDesc < mediaDesc ){
    alert("o valor do desconto foi " + valAtualDesc)
}else if (precoAnterior < valAtualDesc && precoAnterior < mediaDesc ){
    alert("o valor do desconto foi " + precoAnterior)
}else {
    alert("o valor do desconto foi " + mediaDesc)
}