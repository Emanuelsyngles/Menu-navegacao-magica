const listas = document.querySelectorAll('.lista')

function ativaLink () {
    for(let i of listas) {
        i.classList.remove('ativo')
    }
    this.classList.add('ativo')
}
 
for (let i of listas) {
    i.addEventListener('click', ativaLink)
}