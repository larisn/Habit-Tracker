const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) /* adicionar funçao no botao */
form.addEventListener("change", save) /* salvar os dias */

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5) /* slice ''recorta'' os dados */
    const dayExists = nlwSetup.dayExists(today)
    
    if(dayExists) {
        alert("Erro: Esse dia já foi adicionado ❌")
        return /* para o código imediatamente */
    }

    alert('Dia adicionado com sucesso! ✔')
    nlwSetup.addDay(today)
}


function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) /* JSON transforma os dados em string */
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()