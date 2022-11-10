/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
- Preço do etanol;
- Preço da gasolina;
- Tipo de combustível no tanque do carro;
- Autonomia do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar
esta viagem.*/

var eta = 3.5;
var gas = 5.5;
let combustível = 'Etanol';
var autonomiaCarro = 15;
var distancia = 100;
var valorGasto;

if (combustível === 'Etanol') {
    valorGasto = (distancia / autonomiaCarro) * eta;
} else {
    valorGasto = (distancia / autonomiaCarro) * gas;
}

console.log(valorGasto.toFixed(2));