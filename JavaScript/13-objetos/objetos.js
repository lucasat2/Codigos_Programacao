//os objetos sao criados com aspas 

const pessoa = {
    nome: 'Lucas',
    idade: 34,
    sobrenome: 'Paiva',

    Fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa.Fala();
pessoa.incrementaIdade();
pessoa.Fala();
pessoa.incrementaIdade();
pessoa.Fala();
pessoa.incrementaIdade();

