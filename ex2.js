// Crie uma função que conte o número de vogais em uma string.

function contarVogais(str) {
  let contagem = 0;
  let vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vogais.includes(char)) {
      contagem++;
    }
  }
  return contagem;
}

console.log(contarVogais("desenvolvimento"));  // Saída: 6
