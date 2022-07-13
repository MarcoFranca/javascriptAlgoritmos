function showinfo(){
    let name = document.querySelector("input[name='name']").value
    let favColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOption = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOption.forEach(element => {optionsValue.push(element.value)})
    let optionChecked = optionsValue.join(", ")
    alert("Nome: " + name + "\n" + "Cor Primaria: " + favColor + "\n" +
        "gosta de programar? " + likeProgramming + "\n" + "conhecimentos em programação: " + optionChecked )
}