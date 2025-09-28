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
