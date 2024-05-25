
/*                                RESUMO DOS ITENS 

 Map - Percorre todos os itens do array e os modifica.
 Settimeout - Define um tempo para a funcao ser executada
 Setinterveal - Define um intervalo entre uma execucao e outra 
 Filter - Filtra o array com um callback e retorna um novo array, não modifica o original
 Find -Apenas o primeiro elemento com a condição buscada é retornado.
 Foreach 
      o que faz: percorre todos os itens do array
      Quando usar: varrer o array sem precisar interromper 
      Quando não usar : quando precisa utilizar o break ou o continue.


*==================================================================================================================/



//                          FUNCOES ARMAZENADAS EM VARIAVEIS 

//- Colocamos a funcao anonima(sem nome) dentro da variavel imprimir, e chamamos pelo nome da variavel


// const imprimir = function (mensagem) {
//     console.log(mensagem);
// }

// imprimir("Olá!");

// ===========================================================================

//                           ARROW FUNCTION - 


// const imprimir = (mensagem) => {
//     console.log(mensagem);
// }

// imprimir("Olá!");

// ===========================================================================

//                           LENDO ARQUIVOS

// FORMA SINCRONA - UMA COISA DE CADA VEZ - DEMORA MAIS, NÃO É BOM.

// const fs = require('fs');
// const buffer = fs.readFileSync('./JavaScript/21-Callbacks/texto.txt');
// console.log(buffer.toString());

// ===========================================================================
//                          LENDO ARQUIVOS 2 

// FORMA ASSINCRONA - Aqui são feitas outras coisas enquanto se lê o arquivo, o texto ''opa'' foi exibido antes.

// const fs = require('fs');

// console.log("Vou começar a ler o arquivo");

// // logo apos o caminho do arquivo temos a função de callback do arquivo em que o primeiro parametro  err se der erro e parametro data, que é o conteudo do arquivo em si. O metodo toString converte para texto para ficar legivel.

// fs.readFile('./JavaScript/21-Callbacks/texto.txt', (err, data) => {
//     if (!err) {
//         console.log(data.toString());
//     }
// });

// console.log("opa!");

// ===========================================================================

//                          SET TIMEOUT  
// Define um tempo para a funcao ser executada 
// Na funcao abaixo temos 3 segundos, enquanto isso outros consoles são executados.

// setTimeout(() => { 
//     console.log("Aoba");
// },3000)

// console.log("Comecou o programa");
// console.log("Processando algumas coisas...");

// ===========================================================================
//                          SET TIMEOUT COM FUNCAO DENTRO DE VARIAVEL ANTES 

// const imprimirAoba = () => { 
//     console.log("Aoba");
// };

// setTimeout(imprimirAoba,3000);

// console.log("Comecou o programa");
// console.log("Processando algumas coisas...");

// ===========================================================================

//                          SET TIMEOUT COM FUNCAO DENTRO DE VARIAVEL ANTES E PARAMETRO 

// const imprimirAoba = (mensagem) => { 
//     console.log(mensagem);
// };

// setTimeout(imprimirAoba,3000,"Aoba");

// console.log("Comecou o programa");
// console.log("Processando algumas coisas...");

// ===========================================================================
// Define o intervalo em que um codigo fica executando

// setInterval(() => {
//     console.log('Passou 1 segundo');
// }, 1000);
// console.log("To processando coisas...hdghfhfgh");

// ===========================================================================
//                        SETINTERVAL COM CLEAR INTERVAL PARA ENCERRAR O CODIGO 
/*
  O que faz: Contagem regressiva para a explosão de uma bomba. 
  inicia a contagem em 10
  cria um setinterval de 1 segundo entre as execucoes 
  cria a funcao para executar as mensagens e o decremento na contagem 
  cria um if ternario para estabelecer se escreverá segundo ou segundos
  cria um clear interval para parar o programa 

*/

// let contagem = 10;

// function imprimirContagem() {

//     if (contagem === 0) {
//         console.log("kABUUUUM!");
//         clearInterval(intervalId);
//     } else {
//         console.log(`A bomba explodira em ${contagem} segundo${contagem === 1 ? "" : "s"}`); //ternario para deixar segundos no plural ou singular
//         contagem--;
//     }
// }

// imprimirContagem();

// const intervalId = setInterval(imprimirContagem, 1000);

// ===========================================================================

//                        ESCREVER EM ARQUIVOS 
/*
  o que faz: cria um arquivo novo 
  criado o fs ( file string )
  utilizado o metodo writeFile para escrever o arquivo 
  o huhuhuhuh é o texto que sera escrito, pode ser uma variavel ou outro tipo de dado.
  a arrow function é o callback, o aviso que foi escrito com sucesso.
*/

// const fs = require('fs');

// fs.writeFile('./JavaScript/21-Callbacks/texto2.txt','uhhuhuhhfsdfsdfsuhuuh',()=>{
//   console.log('Arquivo foi escrito com sucesso!');
// })

// ===========================================================================

//                        FILTER 
/*
  o que faz: Filtra o array com um callback e retorna um novo array, não modifica o original 
*/

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // apenas os maiores que 5
// // forma super enxuta de dar um return dos itens maiores que 5
// // 2 filters em um array filter.

// const filtrado = array.filter(item => item > 5).filter(item => item % 2 === 0 ); 

// console.log(filtrado);

// ===========================================================================

//                        MAP 
/*
  o que faz: modifica todos os itens do array
*/

// const array = [1, 2, 3, 4, 5,];

// //elevar todos os itens do array ao quadrado

// const modificado = array.map(item => item ** 2 ); // para cada item, eleve cada item ao quadrado.

// console.log(modificado);




// EXEMPLO 2 - Modificar os valores dos objetos abaixo adicionando novos itens

// const pessoas = [
//   {
//     nome: "José",
//     idade: 30,
//     altura: 173
//   },

//   {
//     nome: "Pedro",
//     idade: 12,
//     altura: 144
//   },

//   {
//     nome: "Maria",
//     idade: 38,
//     altura: 156
//   },
// ];

// const modificacoes = pessoas.map(x => {
//   return { 
//     nome: x.nome,
//     idade: `${x.idade} anos`,
//     altura: `${x.altura/100}m.`,
//     maioridade: (x.idade >= 18 ? "È maior de idade" : "É menor de idade") // ternário
//   }
// });

// console.log(modificacoes);

// ===========================================================================

//                        For Each 
/*
  o que faz: percorre todos os itens do array
  Quando usar: varrer o array sem precisar interromper 
  Quando não usar : quando precisa utilizar o break ou o continue.
*/

// const array = [1, 2, 3, 4, 5];

// array.forEach((item, indice, array) => {

// console.log(`O item ${item} está no indice ${indice} do array ${array}`);

// });

// ===========================================================================

//                        FIND
/* 
 O que faz: Apenas o primeiro elemento com a condição buscada é retornado.
*/


// Objetivo Pegar o primeiro item cujo texto tem mais de 10 elementos. 

// const array = ['fsfdsdfsdf', 'dsfdsfsdfsdfsdfsdfsd', 'sfsdfsdf', 'isij'];

// const localizado = array.find(item => item.length > 10);


// if (localizado) {

//   console.log(`A palavra com mais de 10 caracteres é: ${localizado}`)
// } else {
//   console.log(`Nenhum item com mais de 10 caracteres`);
// }

