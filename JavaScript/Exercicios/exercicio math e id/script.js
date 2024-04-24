const numero = Number(prompt('Digite um numero'));
const ntitulo = document.getElementById('numero-titulo');
const texto0 = document.getElementById('texto');


//Adicionando o numero digitado pela pessoa no html 
ntitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>O numero mais + 2 é: ${numero + 2}<p>`;
texto.innerHTML += `<p> Raiz quadrada: ${Math.sqrt(numero)}<p>`;
texto.innerHTML += `<p> O numero é inteiro?  ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p> É NaN?: ${Number.isNaN(numero)}<p>`;
texto.innerHTML += `<p> Arredondando pra baixo: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p> Arredondando pra cima: ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${(numero.toFixed(2))}<p>`;