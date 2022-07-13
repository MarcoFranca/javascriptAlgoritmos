let boasVindas = "Bem vindo! a seguir pediremos que informe alguns dados."
let qNome ="qual o seu nome"
let qIdade = "qual a sua idade?"
//confirma a idade
alert(boasVindas)
let nome = prompt(qNome)
alert("é um prazer " + nome)
let idade = prompt(qIdade)
let confIdade = confirm("hum... voce tem " + idade + " anos?")
let mensagem = "maravilha " + nome + "\nentão voce me disse que tem " + idade + " anos e essa informação é " + confIdade
alert(mensagem)
