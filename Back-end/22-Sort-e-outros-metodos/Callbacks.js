
//                          METODO EVERY

// Testa se varios itens de um array passam por uma condição

//Exemplo 1
//Teste para verificar se os numeros do array sao menores que 10, somente dará true se todos atenderem a condição passada no callback

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros.every(x => x < 10));


//Exemplo 2
//Teste para verificar se os preços do array sao positivos e inteiros

// const precos = [100, 131, 2544];

// const ehValido = precos.every(x => {

//   return x >= 0 && x % 1 === 0;

// });

// console.log(ehValido);
//========================================================================
//                        METODO SOME

// Se houver um elemento valido , retorna true.
//Ex: Tem Numeros maiores que 5 ?

// const numeros = [1, 2, 3, 4, 5, 6];

// maiorque5 = numeros.some(x => x > 5);
// console.log(maiorque5)

// //Ex2 Tem numeros pares no array?
// const numeros = [1, 5, 7, 17,11,14];
// const pares = numeros.some(x => x % 2 === 0);
// console.log(pares);

// //Ex3 Verifica se tem quadrado perfeito
// const numeros = [2, 3, 5];

// const resultado = numeros.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0 );

// console.log(resultado);

//========================================================================
//                       METODO REDUCE