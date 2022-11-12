class Carro {

    marca;
    cor;
    autonomia;

    constructor(marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    calcularGastosPercurso(distancia, precoCombustivel) {
        return (distancia / this.autonomia) * precoCombustivel;
    }

}


const tracker = new Carro('Chevrolet', 'Branco', 15);
console.log(tracker);
console.log('A viagem vai custar R$ ' + tracker.calcularGastosPercurso(100, 5).toFixed(2));

const A4 = new Carro('Audi', 'Preto', 7);
console.log(A4);
console.log('A viagem vai custar R$ ' + A4.calcularGastosPercurso(100, 5).toFixed(2));