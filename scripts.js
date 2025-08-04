const amount = document.getElementById("amount")

//Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})