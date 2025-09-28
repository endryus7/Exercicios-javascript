// Crie uma função que inverte uma string (sem usar reverse()).

function inverterString(str) {
  let invertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

console.log(inverterString("javascript"));  // Saída: "tpircsavaj"



// Usando reverse (exemplo)
let nome = ['endrys', 'paulo']

nome.reverse()

console.log(nome)


// Usando reverse em uma string 
let textoOriginal = "Olá Mundo!";
let textoInvertido = textoOriginal.split('').reverse().join('');

console.log(textoInvertido); // Saída: "!odnuM álO"

/*
split(''): divide a string original em um array de substrings.

reverse(): chamado no array resultante e inverte a ordem dos elementos desse array. O primeiro elemento se torna o último e o último se torna o primeiro, e assim por diante.

join(''): Finalmente, este método une todos os elementos do array invertido de volta em uma única string
*/