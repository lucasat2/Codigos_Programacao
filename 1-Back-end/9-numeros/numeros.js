// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0

console.log(num1);

//checar se o numero é inteiro 
console.log(Number.isInteger(num1));

//converter numero para string e concatenar
 console. log(num1. toString() + num2); 


 //Mostra a versão binária do numero
 console.log(num1.toString(2));

//Arredondar casas decimais 
 console. log(num1.toFixed(2));

