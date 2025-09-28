// Crie uma função que receba um array de objetos com nome e idade e retorne os nomes das pessoas com idade maior que 18.

const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "Carlos", idade: 30 },
];

function maioresDeIdade(arr) {
  return arr.filter(pessoa => pessoa.idade > 18).map(pessoa => pessoa.nome);
}

console.log(maioresDeIdade(pessoas));  // Saída: ["João", "Carlos"]


/*
O .map() é um método do JavaScript usado para transformar elementos de um array em novos valores, criando um novo array com os resultados da aplicação de uma função em cada elemento do array original. Ele não altera o array original, mas retorna um novo array.
*/