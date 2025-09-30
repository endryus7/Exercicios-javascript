// Crie uma função que recebe um array de números e retorna a soma dos números pares.

function numerosPares(array) {
    let soma = 0
    for(let num of array)
        if(num % 2 === 0) {
            soma += num
        }
    console.log(soma)    
}

numerosPares([1,3,5,6,2])


// Crie uma função que conte o número de vogais em uma string.

function numeroDeVogais(quantidade) {
    let contagem = 0 
    let vogais = ['a', 'e', 'i', 'o', 'u']

    for(let char of quantidade.toLowerCase()) 
        if (vogais.includes(char)) {
            contagem++
        }
    return contagem
}

console.log(numeroDeVogais('endryus'))
console.log(numeroDeVogais('Aquele'))