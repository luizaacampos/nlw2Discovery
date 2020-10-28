//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
//executar uma ação
function cloneField() {
    //duplicar os campos, que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    //node se refere a estruturas html

    //pegar os campos: que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cadacampor, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    //colocar na página, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}