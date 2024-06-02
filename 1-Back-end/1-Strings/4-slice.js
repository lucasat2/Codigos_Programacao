//SLICE - extrai uma parte da string e retorna uma nova.

const localizacao = "rio de janeiro-rj";
const endIndex = localizacao.indexOf("-");
const cidade = localizacao.slice(0 , endIndex); // corta do inicio até o ponto determinado que foi o tracinho
console.log(cidade);