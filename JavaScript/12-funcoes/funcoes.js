function soma(x, y) {
    const resultado = x + y;
    return resultado
}

const result = soma(2, 4);
console.log(result);


//ARROW FUNCTION 
//FUNCAO PARA MOSTRAR A RAIZ QUADRADA

const arrow = n => n ** 0.5;
console.log(arrow(9));
console.log(arrow(16));
console.log(arrow(25));



//FUNCAO PARA CRIAR OBJETOS 
// {} as chaves sao usadas para criar objetos

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Lucas', 'Paiva', 34)
const pessoa2 = criaPessoa('Francisco', 'Assis', 24)
const pessoa3 = criaPessoa('Igarape', 'santos', 48)

console.log(pessoa1.nome,pessoa1.sobrenome);
console.log(pessoa2.nome,pessoa2.sobrenome);
console.log(pessoa3.nome,pessoa3.sobrenome);


