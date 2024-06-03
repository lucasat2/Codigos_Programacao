

//INCLUDES - Verifica se existe a string na frase 

// frase = "Eu ja vou pra casa";
// console.log(frase.includes("casa"));

//============================================================================

//INDEX OF / Serve para dizer em que posição está uma determinada string


// const palavra = 'paralelepipedo';
// console.log(palavra.indexOf('e',6)); //Começa a procurar no index 6

//============================================================================

//LAST INDEX OF - Começa a procurar de traz pra frente

// const palavra = 'paralelepipedo';
// console.log(palavra.lastIndexOf('e'));

//============================================================================

//SLICE - extrai uma parte da string e retorna uma nova.

// const localizacao = "rio de janeiro-rj";
// const endIndex = localizacao.indexOf("-");
// const cidade = localizacao.slice(0 , endIndex); // corta do inicio até o ponto determinado que foi o tracinho
// console.log(cidade);
//============================================================================

//REPLACE - substitui uma string por outra

//utilizado para substituir o ponto por virgula 

// const numero_ponto = "97.50";
// const numero_virgula = numero_ponto.replace(".",",");
// console.log(numero_ponto); // original é mantido
// console.log(numero_virgula);

//============================================================================

// REPLACE PARA MAIS DE UM ITEM   

//o replace só substitui a primeira string, caso existam mais no codigo, precisamos utiizar um while., no Exemplo abaixo
// estamos substiuindo varias virgulas por ponto.

// const original = "1,300,000,000,000";

// let resultado = original;
// let resultadoAnterior = "";

// while(resultado !== resultadoAnterior) { 
//     resultadoAnterior = resultado;
//     resultado = resultado.replace(",",".");
// }

// console.log(resultado);

//============================================================================

// TRIM - 
//remove espaços em branco

// const email = "          lucaspaivacontato@gmail.com ";
// console.log(email.trim());
//============================================================================

//PAD START 
//Adiciona coisas no inicio da string 

//  const ultimos4dig = '2345';
//  const numCartao = ultimos4dig.padStart(19,'***** ');
//  console.log(numCartao);

//============================================================================

// //Exercicio de PadStart - crie uma função que deixe dia mes e ano com 8 digitos no formato dd/mm/aaaa, o ano pode deixar como está com 4 digitos.
// function imprimirData(dia,mes,ano) {

//     const diaString = `${dia}`.padStart(2,"0"); // converte o dia para string usando uma string template / a string terá 2 digitos e preencher com zero.
//     const mesString = `${mes}`.padStart(2,"0"); // converte o mes para string usando uma string template / a string terá 2 digitos e preencher com zero antes.
//     console.log(`${diaString}/${mesString}/${ano}`)

// }

// imprimirData(1,3,2024);

//============================================================================

// SPLIT
// Quebra o texto em indices de array 

// const textao = "Eu gosto. Eu vou pra praia. Pode parar tudo eu vou pra praia";
// const frase = textao.split(".");


// //Limpando os espaços com trim 
// let novoArray = [];
// for (let trecho of frase) {
//     novoArray.push(trecho.trim()); //adicionando os trechos com espaço limpo no array vazio
// }

// console.log(frase);
// console.log(novoArray);
// //============================================================================
