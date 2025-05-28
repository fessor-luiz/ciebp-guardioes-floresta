const minusArvores = document.getElementById('minus-arvores')
const minusPovos = document.getElementById('minus-povos')
const minusAcoes = document.getElementById('minus-acoes')

const plusArvores = document.getElementById('plus-arvores')
const plusPovos = document.getElementById('plus-povos')
const plusAcoes = document.getElementById('plus-acoes')

const arvores = document.getElementById('cont-arvores')
const povos = document.getElementById('cont-povos')
const acoes = document.getElementById('cont-acoes')

let contArvores = 0
let contPovos = 0
let contAcoes = 0

let soma = 0

const health = document.getElementById("healthBar")
const healthValue = document.getElementById("hp-value")

document.addEventListener("click", () => {
    health.style.width = `${100 - (soma / 2)}%`
    healthValue.innerHTML = `${100 - soma / 2}%`
})

minusArvores.addEventListener('click', () => {
    if (contArvores === 0) return
    contArvores = contArvores - 1
    arvores.innerHTML = contArvores

    soma = contArvores + contPovos + contAcoes
})

minusAcoes.addEventListener('click', () => {
    if (contAcoes === 0) return
    contAcoes = contAcoes - 1
    acoes.innerHTML = contAcoes
    soma = contArvores + contPovos + contAcoes

})

minusPovos.addEventListener('click', () => {
    if (contPovos === 0) return
    contPovos = contPovos - 1
    povos.innerHTML = contPovos
    soma = contArvores + contPovos + contAcoes

})

plusPovos.addEventListener('click', () => {
    contPovos = contPovos + 1
    povos.innerHTML = contPovos
    soma = contArvores + contPovos + contAcoes

})


plusAcoes.addEventListener('click', () => {
    contAcoes = contAcoes + 1
    acoes.innerHTML = contAcoes
    soma = contArvores + contPovos + contAcoes

})

plusArvores.addEventListener('click', () => {
    contArvores = contArvores + 1
    arvores.innerHTML = contArvores
    soma = contArvores + contPovos + contAcoes

})