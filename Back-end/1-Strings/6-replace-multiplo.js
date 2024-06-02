// REPLACE PARA MAIS DE UM ITEM

/* 
o replace só substitui a primeira string, caso existam mais no codigo, precisamos utiizar um while. No Exemplo abaixo
estamos substiuindo varias virgulas por ponto.
*/


const original = "1,300,000,000,000";

let resultado = original;
let resultadoAnterior = "";

while (resultado !== resultadoAnterior) {
  resultadoAnterior = resultado;
  resultado = resultado.replace(",", ".");
}

console.log(resultado);