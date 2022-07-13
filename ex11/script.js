let chosenOption

let spaceship = {
    name: "SolarParker",
    type: "Heliophysics",
    maxVelocity: 150,
    velocity: 0,
    comporta: "Fechadas",
    combustivel: 500,
    status: "Preparada para decolagem",

    computadorBordo: function (option) {
        while ( option !=1 && option!=2 && option !=3 && option !=4 && option !=5 && option!=6)
            option = prompt("******_COMPUTADOR DE BORDO_******" +
                "\n(1) acelerar Aeronave" +
                "\n(2) desacelerar Aeronave" +
                "\n(3) pousar Aeronave" +
                "\n(4) Abrir comportas" +
                "\n(5) status da Nave" +
                "\n(6) Sair do menu")
        return option
    },
    speedDown: function (slowDown) {
        this.combustivel -= 80
        if ((this.combustivel > 50 && this.combustivel <= 150) && this.status == "voo"){
            alert("ATENÇÃO NÍVEL DE COMBUSTIVEL BAIXO")
        }else if((this.combustivel > 0 && this.combustivel <= 50) && this.status == "voo"){
            alert("ALERTA: NÍVEL DE COMBUSTIVEL EXTREMAMENTE BAIXO" +
                "\n POUSAR IMEDIATAMENTE")
        }else if(this.combustivel <= 0 && this.status != "Nave Destruida"){
            alert("Sinto muito Capitão iremos colidir..." +
                "\n Boomm!!!!")
            this.status = "Nave Destruida"
            this.combustivel = 0
            this.velocity = 0
        }else{

        }
        if (this.status == "Nave Destruida"){
            alert("A nave não responde!!!")
            this.combustivel = 0
        } else{
            if ((this.velocity - parseInt(slowDown)) > 0) {
                this.velocity -= parseInt(slowDown)
            }else{
                this.velocity = 0
                let pousar = confirm("deseja pousar ou se manter em orbita? " +
                    "\n (ok) para pousar")
                if (pousar == true) {
                    alert("Velocidade \"zero\" " +
                        "\n nave esta pousada e estável")
                    spaceship.status = "Pousada"
                    spaceship.combustivel = 500
                }else{
                    alert("Velocidade \"zero\" " +
                        "\n nave esta em órbita")
                    spaceship.status = "Em orbita"
                }
            }
        }

    },
    speedUp: function (acc){
        if (this.status != "Nave Destruida"){
            this.status = "voo"
        }

        this.combustivel -= 50
        if ((this.combustivel > 50 && this.combustivel <= 150) && this.status == "voo"){
            alert("ATENÇÃO NÍVEL DE COMBUSTIVEL BAIXO")
        }else if ((this.combustivel > 0 && this.combustivel <= 50)  && this.status == "voo"){
            alert("ALERTA: NÍVEL DE COMBUSTIVEL EXTREMAMENTE BAIXO" +
                "\n POUSAR IMEDIATAMENTE")
        }else if(this.combustivel <= 0 && this.status != "Nave Destruida"){
            alert("Sinto muito Capitão iremos colidir..." +
                "\n Boomm!!!!")
            this.status = "Nave Destruida"
            this.combustivel = 0
            this.velocity = 0
        }else
        {

        }
        if (this.status == "Nave Destruida"){
            alert("A nave não responde!!!")
            this.combustivel = 0
        }else{
            if (this.comporta != "Fechadas" ){
                alert("As comportas estão abertas" +
                    "\n Não podemos decolar!!!")

                let comp = confirm("Deseja fechar as comportas?")
                if (comp == true){
                    this.comporta = "Fechadas"
                }
            }else {
                if ((this.velocity + parseInt(acc)) <= this.maxVelocity) {
                    this.velocity += parseInt(acc)

                }else{
                    alert("ATENÇÃO VELOCIDADE ACIMA DE " + this.maxVelocity + " KM/S" + "\n Aeronave sujeita a entrar em combustão " +
                        "\n Velocidade de segurança ativada, reduzindo velocidade: " + (this.velocity - this.maxVelocity) + "KM/S")
                    this.velocity = this.maxVelocity
                }
            }
        }

    },
}

//main

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}
registerSpaceship()
do {

    chosenOption = spaceship.computadorBordo()
    switch (chosenOption) {
        case "1":
            let aceleration =prompt("Valor da velocidade")
            spaceship.speedUp(aceleration)
            alert("Velocidade de curso: " + spaceship.velocity + "KM/S" +
                "\n Nível de combustivel: " + spaceship.combustivel)
            break

        case "2":
            spaceship.speedDown(prompt("Qual a velocidade de desaceleração?"))
            alert("Velocidade de curso: " + spaceship.velocity + "KM/S" +
                "\n Nível de combustivel: " + spaceship.combustivel)
            break

        case "3":
            spaceship.speedDown(spaceship.velocity)
            break

        case "4":
            if (spaceship.status == "Nave Destruida"){
                alert("comportas emperradas, não tem como abrir")
                spaceship.comporta = "emperrada"
            }else if (spaceship.velocity > 0){
                alert("Nave em movimento comportas não podem ser abertas\n" +
                    "sistema de segurança acionado\n" +
                    "comportas Bloqueadas")
                spaceship.comporta = "Bloqueadas"
            }else{
                alert("Comportas Abertas")
                spaceship.comporta = "Abertas"
            }
            break

        case "5":
            alert("************STATUS************" +
                "\n Nome da nave: " + spaceship.name +
                "\n Tipo da nave: " + spaceship.type +
                "\n Velocidade Máxima permitida: " + spaceship.maxVelocity +" km/s"+
                "\n Velocidade de curso: " + spaceship.velocity + " km/s" +
                "\n Comportas: " + spaceship.comporta +
                "\n Status: " + spaceship.status +
                "\n Nivel de combustivel: " + spaceship.combustivel + "/500")
            break
        case "6":
            alert("Saindo do computador de bordo")
            break
        default:
            alert("Insira um valor Válido")
            break
    }

}while (chosenOption !=6)


