
/*const funcoes = require ('./funcoes_auxiliares');

console.log(funcoes);

console.log(funcoes.gets());

console.log('-----------------');*/

const { gets, print } = require('./funcoes_auxiliares');

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);






