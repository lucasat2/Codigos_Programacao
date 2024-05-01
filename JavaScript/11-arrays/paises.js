const paises = ['França','Dinamarca','Brasil','Alemanha','Estados unidos']

paises.push('Chile');
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift('Belgica');
console.log(paises);

paises.shift();
console.log(paises);

/*Ultimo pais*/
const ultimoPais = paises[paises.length-1];
console.log(ultimoPais);

/*Pais de indice 1*/
console.log(paises[1]);

/*Pais de indice 2*/
console.log(paises[2]);


/*

Mostrar array inteiro  console.log(nomes);
----------------------------------------------------------------------
remove ultimo elemento  
    nomes.pop('Magnata')

Adiciona ultimo elemento   
    nomes.push('batata');

Adiciona no primeiro elemento  
    nomes.unshift("José");

remove primeiro elemento
    nomes.shift();

----------------------------------------------------------------------
fatiar  - console.log(nomes.slice(0,3));
----------------------------------------------------------------------
acessar elemento em um indice - console.log(nomes[3])

----------------------------------------------------------------------
MODIFICAR ITEM 
nomes[0] ="Andreia";
----------------------------------------------------------------------
COMO DESCOBRIR O TAMANHO DO ARRAY

console.log(nomes.length);



*/