// Crie uma função que recebe um array de números e retorna a soma dos números pares.

function somaPares(arr) {
  let soma = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      soma += num;
    }
  }
  return soma;
}

console.log(somaPares([1, 2, 3, 4, 5]));  // Saída: 6

/*
of no for, é usado para acessar diretamente cada valor do array arr, ou seja, cada número na lista, sem precisar do índice.

of percorre a array
*/