

const pessoa = {
    nome: 'Priscila S Maluf',
    idade: 29,

    descrever: function () {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade)
    }
};

/*console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.64;

console.log(pessoa);*/

pessoa.descrever = function () {
    console.log('Meu nome é ' + this.nome);
}

pessoa.descrever();

console.log(pessoa['idade']);

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';

console.log(pessoa.nome);
console.log(pessoa['nome']);
