alert("olá!!! Bem vindo ao conversor de distâncias espaciais")
let distance = prompt("Olá!!! Qual a distancia da nave em anos luz do destino?")
let unity = prompt("escolha uma das opções a seguir:\n" +
    "(1) - para parsec (pc)\n" +
    "(2) - para Unidade Astronomica (AU)\n" +
    "(3) - para Quilometros(KM)")
let newUnity = 0
switch (unity) {
    case "1":
        let pc = distance
        newUnity = pc * 0.306601
        alert("Distancia em ano luz: " + distance + "\n" +
        "Converção desejada: Parsec\n" +
        "distancia convertida: " + newUnity + " pc")
        break
    case "2":
        let au = distance
        newUnity = au * 63241.1
        alert("Distancia em ano luz: " + distance + "\n" +
            "Converção desejada: unidade Astronomica\n" +
            "distancia convertida: " + newUnity + " AU")
        break
    case "3":
        let km = distance
        newUnity = km * Math.pow(10,12)
        alert("Distancia em ano luz: " + distance + "\n" +
            "Converção desejada: Quilometro\n" +
            "distancia convertida: " + newUnity + " KM")
        break
    default:
        alert("escolha uma unidade válida")
}



