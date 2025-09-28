// Crie uma função que recebe um array de números e retorna a soma dos números pares.

function somaDosValores(array) {
    let soma = 0
    for (let num of array)
        if (num % 2 === 0) {
            soma += num
        }
    return soma    
}

console.log(somaDosValores([1,3,6,2,4,2.5]))