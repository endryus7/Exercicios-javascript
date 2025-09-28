// Crie uma função que encontra o maior número em um array.

function maiorNumero(arr) {
  return Math.max(...arr);
}

console.log(maiorNumero([1, 9, 3, 7]));  // Saída: 9

/*
Math.max() é uma função embutida em JavaScript que retorna o maior valor entre os números fornecidos a ela.

O operador de espalhamento (...) é utilizado para "desempacotar" os elementos de um array, ou seja, ele "espalha" os valores dentro do array como argumentos individuais para a função Math.max().

O que o código faz é pegar o array arr e "desempacotar" seus elementos para que a função Math.max() possa comparar os números de forma individual.
*/