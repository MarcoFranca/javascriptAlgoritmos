/*
nome do piloto
velocidade inicial deve ser 0
que velocidade ele quer acelerar
pedir confirmação dizendo que vai para tal vel
exibir

informar nome do piloto e velociade
 */

let nome = prompt("informe seu nome, piloto ")
let velocidade = 0
let velAceleracao = prompt("Estamos prontos para decolagem Sr. " + nome + " qual velocidade o Sr deseja acelerar? ")
let confAcc = confirm("por favor piloto " + nome + " confirme se a velocidade desejada foi " + velAceleracao + " km/s")

if (confAcc == true){
    alert("velocidade confirmada!!\n preparar piloto...\n acelerando para " + velAceleracao + " km/s")
    if (velAceleracao >= 100){

        alert("velocidade de risco, controle automático forçado acionado")
        velocidade = 99
        alert("velocide de curso ajustada, para " + velocidade + " Km/s")
    }else if (velAceleracao >= 80){
        velocidade = velAceleracao
        alert("velocidade alta considere diminuir!!!\n" +
            " velocide de curso ajustada, para " + velocidade + " Km/s")
    }else if (velAceleracao>=40){
        velocidade = velAceleracao
        alert("Boa velocidade de Curso Piloto \n" +
            "velocide de curso ajustada, para " + velocidade + " Km/s")
    }else if (velAceleracao>=1) {
        velocidade = velAceleracao
        alert("velocidade de Curso muito baixa Piloto, considere almentar\n" +
            "velocide de curso ajustada, para " + velocidade + " Km/s")
    }else{
        alert("a nave esta parada. Estamos no aguardo para decolagem!!! " + velocidade + " Km/s")
    }
}else{
    alert("Infelizmente não podemos acelerar, pois houve um erro de comunicação")
}


