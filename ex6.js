/*
Exercício: Manipulação de Array de Objetos e Funções

Você tem um sistema de estoque de produtos e precisa criar uma função para calcular o total de valor em estoque de cada produto, levando em conta a quantidade disponível de cada produto. Além disso, você deve filtrar os produtos que têm um preço acima de R$ 50 e aplicar um desconto de 15% em seu preço, calculando o valor total de cada produto após o desconto.

Cada produto tem as propriedades: nome, preco e quantidade.

Crie uma função chamada calcularEstoqueComDesconto que:

Filtra os produtos com preço acima de 50.

Aplica um desconto de 15% no preço de cada produto.

Para cada produto, calcula o valor total em estoque após o desconto (multiplicando o preço com desconto pela quantidade disponível).

Retorna um novo array com os produtos que atendem à condição de preço acima de 50, com o novo preço com desconto e o valor total do estoque após o desconto.
*/

// Entrada 
const produtos = [
  { nome: "Produto A", preco: 100, quantidade: 10 },
  { nome: "Produto B", preco: 45, quantidade: 5 },
  { nome: "Produto C", preco: 60, quantidade: 2 },
  { nome: "Produto D", preco: 30, quantidade: 3 }
];


function calcularEstoqueComDesconto(produtos) {
    return produtos
    .filter(produto => produto.preco > 50)
    .map (produto => {
        const precoComDesconto = produto.preco * 0.85
        const totalEstoque = precoComDesconto * produto.quantidade
        return {
            nome: produto.nome,
            preco: precoComDesconto,
            totalEmEstoque: totalEstoque
        }
    })
}

console.log(calcularEstoqueComDesconto(produtos))


/*
O .filter() é um método do JavaScript que cria um novo array com todos os elementos que passam em um teste definido por uma função fornecida. Ele não altera o array original, apenas retorna um novo array com os elementos que atendem à condição fornecida.
*/
