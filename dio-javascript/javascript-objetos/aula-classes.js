
class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade)
    }
}

const priscila = new Pessoa('Priscila', 29);
//priscila.nome = 'Priscila S Maluf'; - sem constructor
//priscila.idade = 29;

const ana = new Pessoa('Ana', 30);
//ana.nome = 'Ana Paula F' - sem constructor
//ana.idade = 30;

console.log(priscila);
console.log(ana);

priscila.descrever();
ana.descrever();

