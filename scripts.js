// Cotação de moedas do dia
const USD = 5.25
const EUR = 5.75
const GBP = 6.50
const JPY = 0.04

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
            case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "JPY":
            convertCurrency(amount.value, JPY, "¥")
            break
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try{
        // Exibe a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
       
        // Calcula o total 
        let total = amount * price
        
       // Verifica se o resultado não é um numero
        if (isNaN(total)) {
            retur alert ("Por favor, digite o valor corretamente para converter.")

        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")
        
        // Exibe o resultado total
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    }catch (error) {
        console.log(error)
        
        // Remove a classe que exibe o footer em caso de erro
        footer.classList.remove("show-result")
        alert("Erro ao converter a moeda. Tente novamente.")
    }
}

}

// Função para formatar o valor em BRL
function formatCurrencyBRL(value) {

    //Converte o valor para número e formata como moeda brasileira
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
