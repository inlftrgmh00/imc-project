const peso = document.getElementById('weight');
const altura = document.getElementById('height');
const btnCalculate = document.getElementById('calculate');
const result = document.querySelector('p')
const form = document.querySelector('form');
const reset = document.getElementById('reset');

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

reset.addEventListener('click', () => {
    peso.value = ''
    altura.value = ''

    result.innerHTML = 'seu resultado'
})

function formmulaIMC(peso, altura) {
    return peso / (altura * altura)
}

btnCalculate.addEventListener('click', () => {
    const pesoValue = Number(peso.value)
    const alturaValue = Number(altura.value)

    let imc = formmulaIMC(pesoValue, alturaValue)

    result.innerHTML = `Seu IMC: ${imc.toFixed(2)}`
})