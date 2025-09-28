const produtos = [
  { nome: "Produto A", preco: 100, quantidade: 10 },
  { nome: "Produto B", preco: 45, quantidade: 5 },
  { nome: "Produto C", preco: 60, quantidade: 2 },
  { nome: "Produto D", preco: 30, quantidade: 3 }
];

function temDesconto(produtos) {
    return produtos
    .filter(produto => produto.preco > 50) 
    .map( produto => {
       const valorDesconto = produto.preco * 0.85 
       const totalEstoque = valorDesconto * produto.quantidade
       return {
        nome: produto.nome,
        preco: valorDesconto,
        totalEmEstoque: totalEstoque
       }
    })
}

console.log(temDesconto(produtos))