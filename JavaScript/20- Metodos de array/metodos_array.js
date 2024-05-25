
//  Reverse - Troca os itens de ordem , aqui o array original é modificado, diferente dos outros em que é criado uma copia

// const opcoes = ["eu","voce","ele"];
// const resultado = opcoes.reverse();
// console.log(opcoes);


//Utilizando o reverse em uma função para inverter as letras de uma string
// function inverter(string) {
//     const letras = string.split(""); //converte o parametro string para um array de letras utilizando o split
//     letras.reverse();
  
// //concatenar todas as letras em uma string unica 

// let resultado = "";

// for (let item of letras) {
//     resultado += item;
    
// }
// console.log(resultado)

// }

// inverter("Lucas Ataide");

//============================================================================

//JOIN - Junta os elementos de array em uma string 

// const opcoes = ["eu","voce","ele"];
// const resultado = opcoes.join(" ou "); // a string ''ou'' é opcional 
// console.log(resultado);

//============================================================================

// EXERCICIO DO REVERSE UTILIZANDO O JOIN PARA FICAR MAIS SIMPLIFICADO

// Reverse em uma função para inverter as letras de uma string

// function inverter(string) {
//     const letras = string.split(""); //converte o parametro string para um array de letras utilizando o split
//     letras.reverse();
  
// //Concatena utilizando o join
// console.log(letras.join("")); // aspas vazias para não separar os itens por virgula

// }

// inverter("Lucas Ataide");
//============================================================================

// CONCAT - CONCATENA ARRAYS

// const a  = [1,2];
// const b  = [3,4];
// const c  = [5,6];
// const resultado  = a.concat(b,c);
// console.log(resultado);

//============================================================================

// SLICE - FAZ UMA COPIA DE PARTE DO ARRAY, O ORIGINAL NÃO É MODIFICADO

// const opcoes = ["eu","voce","ele","nos"];
// const resultado = opcoes.slice(1,3) // slice nos index 1 e 3(o indice final é excluido, vai mostrar o 2).
// console.log(resultado);
//============================================================================

// SPLICE - REMOVE 1 OU MAIS ITENS DE UM INDEX E COLOCA OUTRO NO LUGAR 

// //Exemplo 1 - Inicia a modificacao no indice 1 e deleta 2 itens.
// const lista = ["a","b","c","d","e","f"];
// lista.splice(1,2,"cachorro"); // local onde será modificado / delete count / item a ser inserido
// console.log(lista);


// //Exemplo 2 - Inicia a modificacao no indice 1 , não deleta ninguem e acrescenta 2 itens .

// const lista = ["a","b","c","d","e","f"];
// lista.splice(1,0,"cachorro","vaca"); // local onde será modificado / delete count / itens a serem inseridos
// console.log(lista);


// //Exemplo 3 - Simulando um push 

// const lista = ["a","b","c","d","e","f"];
// lista.splice(lista.length , 0 ,"cachorro","vaca"); // local onde será modificado / delete count / itens a serem inseridos
// console.log(lista);


// //Exemplo 3 - Simulando um unshift 

// const lista = ["a","b","c","d","e","f"];
// lista.splice(0 , 0 ,"cachorro","vaca"); // local onde será modificado / delete count / itens a serem inseridos
// console.log(lista);


// //Exemplo 4 - Simulando um pop 

// const lista = ["a","b","c","d","e","f"];
// lista.splice(lista.length - 1, 1); // local onde será modificado / delete count /
// console.log(lista)



// //Exemplo 5 - Removendo o primeiro item

// const lista = ["a","b","c","d","e","f"];
// lista.splice(0, 1); // local onde será modificado / delete count /
// console.log(lista)

