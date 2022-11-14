

const alunos = ['Ana', 'Paulo', 'Maria'];

alunos.push('Priscila'); //coloca o item na ultima posição

alunos[4] = 'João'; // coloca o item na posição específica

console.log(alunos);

alunos.pop(); // retira o item da ultima posição

console.log(alunos);


const notas = [];

notas.push(10);
notas.push(5);
notas.push(2);
notas.push(5);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;

console.log(media.toFixed(1));