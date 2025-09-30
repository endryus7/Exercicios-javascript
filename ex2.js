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

// O método .toLowerCase() serve para converter todos os caracteres de uma string para letras minúsculas.

// O método .includes() verifica se uma string contém outra string (ou se um array contém um valor). Ele retorna um booleano:

/*
Case-sensitive → ele diferencia maiúsculas de minúsculas:

console.log(frase.includes("javascript")); // false (porque o original tem "JavaScript")
*/
