
/*
Lucas Ataide tem 34 anos, pesa 89 kg
tem 1.77m de altura e seu IMC é de 28.40818411056848
Lucas Ataide nasceu em 1990 */

const nome = 'Lucas';
const sobrenome = 'Ataide';
const idade = 34;
const anoAtual = 2024;
const peso = 89;
const altura = 1.77;
let imc = peso / (altura * altura) ; // peso / (altura * altura)

console.log(nome + ' ' + sobrenome ,'tem', idade ,'anos,pesa',peso,'kg,tem',altura, 'de altura e seu IMC é de',imc);

console.log(nome + ' ' + sobrenome,'nasceu em',anoAtual-idade);
