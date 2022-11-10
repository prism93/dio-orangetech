function chamarNome(nome) {
    return nome;
 }


/* function chamarNome(nome) {
   console.log('Meu nome é ' + nome);
}

chamarNome('Priscila');
chamarNome('Ana');*/

function verificarMaioridade(idade) {

    if (idade >= 18) {
        console.log(chamarNome('Priscila') + ' é maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

verificarMaioridade(20);
