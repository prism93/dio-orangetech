function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return('Acima do peso');
    } else if (imc >= 30 && imc <= 40) {
        return('Obesidade');
    } else {
        return('Obesidade grave');
    }

}

function main() {

    var peso = 73;
    var altura = 1.64;
    var imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
}

main();

(function () {

    var peso = 73;
    var altura = 1.64;
    var imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
})(); //função invocada imediatamente e só pode ser evocada uma vez


