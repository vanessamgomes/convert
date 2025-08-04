// Cotação de moedas do dia
const USD = 5.25
const EUR = 5.75
const GBP = 6.50
const JPY = 0.04

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()
}