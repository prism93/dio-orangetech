/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
- Preço do combustível;
- Autonomia do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar
esta viagem.*/

const precoCombustivel = 5.79;
let autonomiaCarro = 15;
let distancia = 100;

let valorGasto = (distancia / autonomiaCarro) * precoCombustivel;

console.log(valorGasto.toFixed(2));
