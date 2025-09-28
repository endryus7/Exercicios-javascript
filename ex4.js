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
