
function show() {
    const numbers = document.querySelector("input[name='number']").value
    const districts = document.querySelector("input[name='district']").value
    const adresses = document.querySelector("input[name='address']").value
    const areas = document.querySelector("input[name='area']").value

    let newListnumb = document.createElement("li")
    newListnumb.innerText = "Numero: " + numbers

    let newListDistrict = document.createElement("li")
    newListDistrict.innerText ="Bairro: " + districts

    let newListAddress = document.createElement("li")
    newListAddress.innerText = "Endereço: " + adresses

    let newListArea = document.createElement("li")
    newListArea.innerText = "Área: " + areas +" \n"

    let buttonDelet = document.createElement("button")
    buttonDelet.type = "button"
    buttonDelet.innerText="remover"
    buttonDelet.setAttribute("onclick", "removeHouse(this)")

    let createUl = document.createElement("ul")
    createUl.appendChild(newListnumb).
    appendChild(newListDistrict).
    appendChild(newListAddress).
    appendChild(newListArea).
    appendChild(buttonDelet)
    createUl.setAttribute("id", "list")

    document.getElementById("createList").appendChild(createUl)
}

function removeHouse(button){
    document.getElementById("list").remove()
}
