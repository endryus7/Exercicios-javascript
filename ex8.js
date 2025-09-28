// toString() Esse método converte o valor para uma string
// trim() Esse método remove espaços em branco extras do início e do fim da string

function tamanhoDePalavra(d) {
    // converte para string e remove espaços/linhas extras
    let palavra = d.toString().trim().length;

    // retorna o tamanho da string
    console.log(palavra);
};

tamanhoDePalavra('javascript')
tamanhoDePalavra('endryus')
tamanhoDePalavra('outro')

/*
A propriedade .length serve para mostrar o tamanho de algo

Em strings mostra quantos caracteres tem a string (inclui letras, números, espaços e símbolos)

Em arrays mostra quantos elementos tem no array.
*/

let numeros = [10, 20, 30, 40];
console.log(`Array ${numeros.length}`); // 4 elementos

